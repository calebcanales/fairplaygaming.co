from PIL import Image, ImageDraw, ImageFont
import os

# Define colors
COLOR_BLACK = "#1A1A1A"
COLOR_GOLD = "#D4AF37"
COLOR_WHITE = "#FFFFFF"

# Define output directory
OUTPUT_DIR = "/home/ubuntu/betonline-prelander/client/public"
os.makedirs(OUTPUT_DIR, exist_ok=True)

def create_favicon():
    # Canvas size (Standard favicon size, but high res for modern screens)
    size = 256
    
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Draw Emblem (Shield-like shape) - Scaled up to fill the square
    shield_width = size * 0.8
    shield_height = size * 0.9
    shield_x = (size - shield_width) / 2
    shield_y = (size - shield_height) / 2
    
    # Shield points
    points = [
        (shield_x, shield_y), # Top left
        (shield_x + shield_width, shield_y), # Top right
        (shield_x + shield_width, shield_y + shield_height * 0.7), # Bottom right curve start
        (shield_x + shield_width // 2, shield_y + shield_height), # Bottom point
        (shield_x, shield_y + shield_height * 0.7) # Bottom left curve start
    ]
    
    draw.polygon(points, fill=COLOR_BLACK)
    
    # Inner shield (Gold)
    inner_margin = size * 0.05
    inner_points = [
        (shield_x + inner_margin, shield_y + inner_margin),
        (shield_x + shield_width - inner_margin, shield_y + inner_margin),
        (shield_x + shield_width - inner_margin, shield_y + shield_height * 0.7),
        (shield_x + shield_width // 2, shield_y + shield_height - inner_margin),
        (shield_x + inner_margin, shield_y + shield_height * 0.7)
    ]
    draw.polygon(inner_points, outline=COLOR_GOLD, width=int(size * 0.03))
    
    # "FG" Monogram inside shield
    try:
        font_path = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
        font_mono = ImageFont.truetype(font_path, int(size * 0.4))
    except:
        font_mono = ImageFont.load_default()
        
    draw.text((size//2, size//2), "FG", font=font_mono, fill=COLOR_WHITE, anchor="mm")
    
    # Save as PNG (Modern browsers support PNG favicons)
    output_path = os.path.join(OUTPUT_DIR, "favicon.png")
    img.save(output_path)
    print(f"Generated favicon at {output_path}")
    
    # Also save as .ico for compatibility
    img.save(os.path.join(OUTPUT_DIR, "favicon.ico"))
    print(f"Generated favicon.ico at {OUTPUT_DIR}/favicon.ico")

if __name__ == "__main__":
    create_favicon()
