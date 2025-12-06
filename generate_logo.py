from PIL import Image, ImageDraw, ImageFont
import os

# Define colors
COLOR_BLACK = "#1A1A1A"
COLOR_GOLD = "#D4AF37"
COLOR_WHITE = "#FFFFFF"

# Define output directory
OUTPUT_DIR = "/home/ubuntu/betonline-prelander/client/public/images/text"
os.makedirs(OUTPUT_DIR, exist_ok=True)

def create_official_logo():
    # Canvas size
    width = 800
    height = 150
    
    img = Image.new('RGBA', (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Font settings
    try:
        font_path = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
        font_main = ImageFont.truetype(font_path, 48)
        font_sub = ImageFont.truetype(font_path, 24)
    except:
        font_main = ImageFont.load_default()
        font_sub = ImageFont.load_default()
    
    # Draw Emblem (Shield-like shape)
    shield_width = 80
    shield_height = 100
    shield_x = 20
    shield_y = (height - shield_height) // 2
    
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
    inner_margin = 5
    inner_points = [
        (shield_x + inner_margin, shield_y + inner_margin),
        (shield_x + shield_width - inner_margin, shield_y + inner_margin),
        (shield_x + shield_width - inner_margin, shield_y + shield_height * 0.7),
        (shield_x + shield_width // 2, shield_y + shield_height - inner_margin),
        (shield_x + inner_margin, shield_y + shield_height * 0.7)
    ]
    draw.polygon(inner_points, outline=COLOR_GOLD, width=3)
    
    # "FG" Monogram inside shield
    try:
        font_mono = ImageFont.truetype(font_path, 40)
    except:
        font_mono = ImageFont.load_default()
        
    draw.text((shield_x + shield_width//2, shield_y + shield_height//2 - 5), "FG", font=font_mono, fill=COLOR_WHITE, anchor="mm")
    
    # Draw Text
    text_x = shield_x + shield_width + 30
    
    # Main Text: FAIRPLAY GAMING
    draw.text((text_x, height//2 - 25), "FAIRPLAY GAMING", font=font_main, fill=COLOR_BLACK, anchor="lm")
    
    # Sub Text: COMMISSION
    draw.text((text_x, height//2 + 20), "COMMISSION", font=font_sub, fill=COLOR_BLACK, anchor="lm", spacing=10) # Increased spacing
    
    # Save
    output_path = os.path.join(OUTPUT_DIR, "site_logo.png")
    img.save(output_path)
    print(f"Generated official logo at {output_path}")

if __name__ == "__main__":
    create_official_logo()
