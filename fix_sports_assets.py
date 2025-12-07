from PIL import Image, ImageDraw, ImageFont
import os

# Configuration
OUTPUT_DIR = "/home/ubuntu/betonline-prelander/client/public/images/text"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Colors
COLOR_WHITE = "#FFFFFF"
COLOR_LIGHT_GRAY = "#E5E7EB"

# Fonts
try:
    font_path = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
    font_large = ImageFont.truetype(font_path, 60)
    font_medium = ImageFont.truetype(font_path, 28)
except:
    font_large = ImageFont.load_default()
    font_medium = ImageFont.load_default()

def create_text_image(text, filename, color, font):
    # Calculate text size
    dummy_img = Image.new('RGBA', (1, 1))
    draw = ImageDraw.Draw(dummy_img)
    bbox = draw.textbbox((0, 0), text, font=font)
    width = bbox[2] - bbox[0]
    height = bbox[3] - bbox[1]
    
    # Add padding
    padding = 10
    img_width = width + (padding * 2)
    img_height = height + (padding * 2)

    img = Image.new('RGBA', (img_width, img_height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Draw text
    draw.text((padding, padding - bbox[1]), text, font=font, fill=color)
    
    # Save
    output_path = os.path.join(OUTPUT_DIR, filename)
    img.save(output_path)
    print(f"Generated: {output_path}")

# Generate White Assets for Sports Hero
create_text_image("BETONLINE SPORTSBOOK REVIEW", "h1_review.png", COLOR_WHITE, font_large)
create_text_image("Why professional handicappers have trusted this book for over 25 years.", "subhead_review.png", COLOR_LIGHT_GRAY, font_medium)
