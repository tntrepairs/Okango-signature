from collections import deque
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
IMAGE_DIR = ROOT / "public" / "images"


def is_green_background(pixel: tuple[int, int, int]) -> bool:
    r, g, b = pixel
    brightness = (r + g + b) / 3
    return g > r + 10 and g > b - 2 and brightness < 175


def is_edge_background(pixel: tuple[int, int, int], x: int, y: int, w: int, h: int) -> bool:
    r, g, b = pixel
    brightness = (r + g + b) / 3
    if is_green_background(pixel):
        return True
    if y > h * 0.72 and brightness > 145:
        return True
    if y > h * 0.68 and brightness < 78:
        return True
    if x < w * 0.08 and brightness < 95:
        return True
    return False


def flood_background(image: Image.Image) -> Image.Image:
    rgb = image.convert("RGB")
    w, h = rgb.size
    bg = Image.new("L", (w, h), 0)
    bg_px = bg.load()
    pix = rgb.load()
    queue: deque[tuple[int, int]] = deque()

    for x in range(w):
        queue.append((x, 0))
        queue.append((x, h - 1))
    for y in range(h):
        queue.append((0, y))
        queue.append((w - 1, y))

    while queue:
        x, y = queue.popleft()
        if x < 0 or y < 0 or x >= w or y >= h or bg_px[x, y]:
            continue
        if not is_edge_background(pix[x, y], x, y, w, h):
            continue
        bg_px[x, y] = 255
        queue.append((x + 1, y))
        queue.append((x - 1, y))
        queue.append((x, y + 1))
        queue.append((x, y - 1))

    return bg


def create_watch_cutout() -> None:
    source = Image.open(IMAGE_DIR / "delta-flow-silver.webp").convert("RGBA")
    w, h = source.size

    silhouette = Image.new("L", (w, h), 0)
    draw = ImageDraw.Draw(silhouette)
    draw.polygon(
        [
            (548, 150),
            (830, 150),
            (852, 620),
            (990, 768),
            (1080, 792),
            (1096, 914),
            (1032, 942),
            (948, 914),
            (888, 1088),
            (820, 1588),
            (590, 1588),
            (506, 1086),
            (360, 930),
            (346, 780),
            (470, 650),
        ],
        fill=255,
    )
    draw.ellipse((326, 560, 1068, 1336), fill=255)
    draw.polygon(
        [(496, 1044), (906, 1044), (814, 1608), (592, 1608)],
        fill=255,
    )
    draw.rounded_rectangle((536, 162, 846, 646), radius=28, fill=255)
    draw.rounded_rectangle((524, 1240, 860, 1608), radius=26, fill=255)

    product = silhouette
    product_px = product.load()
    rgb = source.convert("RGB")
    rgb_px = rgb.load()
    for y in range(h):
        for x in range(w):
            if not product_px[x, y]:
                continue
            r, g, b = rgb_px[x, y]
            brightness = (r + g + b) / 3
            saturation = max(r, g, b) - min(r, g, b)
            green_dominance = g - max(r, b)
            yellow_green = g >= r - 8 and g >= b - 4 and saturation > 20 and brightness < 190
            edge_dark = saturation > 18 and brightness < 74 and (x < 430 or x > 980 or y > 1380)
            loose_edge = (
                (x > 1020 and not (760 <= y <= 960))
                or (x > 986 and y > 980)
                or (x > 960 and 720 <= y <= 1080 and not (1002 <= x <= 1120 and 738 <= y <= 960))
                or (x < 356 and y > 850)
                or (x < 416 and 1060 <= y <= 1300)
                or (x > 836 and y > 1320)
                or (y < 184 and brightness < 130)
            )
            if loose_edge:
                product_px[x, y] = 0
                continue
            if green_dominance > 5 and saturation > 20 and brightness < 205:
                product_px[x, y] = 0
            elif yellow_green and (x < 500 or x > 930 or y < 220 or y > 1280):
                product_px[x, y] = 0
            elif edge_dark:
                product_px[x, y] = 0

    product = product.filter(ImageFilter.MaxFilter(3))
    product = product.filter(ImageFilter.GaussianBlur(0.85))

    rgba = source.copy()
    rgba.putalpha(product)
    bbox = product.getbbox()
    if bbox:
        pad = 28
        left = max(0, bbox[0] - pad)
        top = max(0, bbox[1] - pad)
        right = min(w, bbox[2] + pad)
        bottom = min(h, bbox[3] + pad)
        rgba = rgba.crop((left, top, right, bottom))

    rgba.save(IMAGE_DIR / "delta-flow-watch-cutout.png")


def create_logo_cutout() -> None:
    source = Image.open(IMAGE_DIR / "okavango-logo-cutout.png").convert("RGBA")
    logo_crop = source.crop((156, 6, 286, 94)).resize((260, 176), Image.Resampling.LANCZOS)
    rgb = logo_crop.convert("RGB")
    mask = Image.new("L", logo_crop.size, 0)
    mask_px = mask.load()
    pix = rgb.load()
    w, h = logo_crop.size

    for y in range(h):
        for x in range(w):
            r, g, b = pix[x, y]
            value = max(r, g, b)
            darkness = 255 - value
            contrast = max(r, g, b) - min(r, g, b)
            if value < 96 and darkness + contrast > 150:
                mask_px[x, y] = min(255, int((darkness + contrast) * 1.55))

    mask = mask.filter(ImageFilter.MedianFilter(3))
    mask = mask.filter(ImageFilter.GaussianBlur(0.35))

    output = Image.new("RGBA", logo_crop.size, (0, 0, 0, 0))
    out_px = output.load()
    mask_px = mask.load()
    for y in range(h):
        for x in range(w):
            alpha = mask_px[x, y]
            if alpha < 20:
                continue
            out_px[x, y] = (205, 160, 62, alpha)

    bbox = mask.getbbox()
    if bbox:
        pad = 26
        output = output.crop(
            (
                max(0, bbox[0] - pad),
                max(0, bbox[1] - pad),
                min(w, bbox[2] + pad),
                min(h, bbox[3] + pad),
            )
        )
    output.save(IMAGE_DIR / "okavango-logo-transparent.png")


def create_checker_preview(image_name: str) -> None:
    source = Image.open(IMAGE_DIR / image_name).convert("RGBA")
    cell = 24
    preview = Image.new("RGBA", source.size, (255, 255, 255, 255))
    draw = ImageDraw.Draw(preview)
    for y in range(0, source.height, cell):
        for x in range(0, source.width, cell):
            fill = (222, 222, 222, 255) if ((x // cell) + (y // cell)) % 2 else (250, 250, 250, 255)
            draw.rectangle((x, y, x + cell, y + cell), fill=fill)
    preview.alpha_composite(source)
    preview.thumbnail((900, 900), Image.Resampling.LANCZOS)
    preview.save(IMAGE_DIR / f"preview-{Path(image_name).stem}.png")


if __name__ == "__main__":
    create_watch_cutout()
    create_logo_cutout()
    create_checker_preview("delta-flow-watch-cutout.png")
    create_checker_preview("okavango-logo-transparent.png")
