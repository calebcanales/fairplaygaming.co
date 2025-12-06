from PIL import Image, ImageDraw, ImageFont
import os

# Define colors
COLOR_RED = "#E31837"
COLOR_BLACK = "#1A1A1A"
COLOR_LIME = "#84BD00"
COLOR_WHITE = "#FFFFFF"

# Define output directory
OUTPUT_DIR = "/home/ubuntu/betonline-prelander/client/public/images/text"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Font path (using a system font as fallback if Oswald isn't available, but we'll try to load it)
# In a real scenario, we'd ensure the font file exists. For now, we'll use a default PIL font or a basic one.
# To make it look good, we really need a bold font.
try:
    font_path = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
    font_large = ImageFont.truetype(font_path, 60)
    font_medium = ImageFont.truetype(font_path, 40)
    font_small = ImageFont.truetype(font_path, 24)
except:
    font_large = ImageFont.load_default()
    font_medium = ImageFont.load_default()
    font_small = ImageFont.load_default()

def create_text_image(text, filename, color, bg_color=None, font=font_large, padding=20):
    # Calculate text size
    dummy_img = Image.new('RGBA', (1, 1))
    draw = ImageDraw.Draw(dummy_img)
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    # Create image
    width = text_width + (padding * 2)
    height = text_height + (padding * 2)
    
    if bg_color:
        img = Image.new('RGBA', (width, height), bg_color)
    else:
        img = Image.new('RGBA', (width, height), (0, 0, 0, 0)) # Transparent
        
    draw = ImageDraw.Draw(img)
    
    # Draw text
    draw.text((padding, padding - bbox[1]), text, font=font, fill=color)
    
    # Save
    img.save(os.path.join(OUTPUT_DIR, filename))
    print(f"Generated {filename}")

def create_button_image(text, filename, bg_color, text_color, font=font_medium, padding_x=40, padding_y=20, radius=10):
    # Calculate text size
    dummy_img = Image.new('RGBA', (1, 1))
    draw = ImageDraw.Draw(dummy_img)
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    width = text_width + (padding_x * 2)
    height = text_height + (padding_y * 2)
    
    img = Image.new('RGBA', (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Draw rounded rectangle
    draw.rounded_rectangle([(0, 0), (width, height)], radius=radius, fill=bg_color)
    
    # Draw text centered
    text_x = (width - text_width) / 2
    text_y = (height - text_height) / 2 - bbox[1]
    draw.text((text_x, text_y), text, font=font, fill=text_color)
    
    img.save(os.path.join(OUTPUT_DIR, filename))
    print(f"Generated {filename}")

# --- Generate Assets ---

# 1. Brand Name (Invisible to crawlers)
create_text_image("BetOnline", "brand_name.png", COLOR_BLACK)
create_text_image("BetOnline", "brand_name_white.png", COLOR_WHITE)

# 2. Key Selling Points (Invisible to crawlers)
create_text_image("NO HOUSE EDGE", "no_house_edge.png", COLOR_RED)
create_text_image("HIGH RTP SLOTS", "high_rtp.png", COLOR_RED)
create_text_image("SPORTSBOOK", "sportsbook.png", COLOR_RED)

# 3. Call to Action Buttons (Invisible to crawlers)
create_button_image("PLAY NOW", "btn_play_now.png", COLOR_LIME, COLOR_WHITE)
create_button_image("CLAIM BONUS", "btn_claim_bonus.png", COLOR_LIME, COLOR_WHITE)
create_button_image("VISIT SITE", "btn_visit.png", COLOR_LIME, COLOR_WHITE)

# 4. Bonus Text (Invisible to crawlers)
create_text_image("50% WELCOME BONUS", "bonus_title.png", COLOR_BLACK)
create_text_image("UP TO $1,000", "bonus_amount.png", COLOR_RED)
create_text_image("USE PROMO CODE: BOL1000", "promo_code.png", COLOR_BLACK, font=font_medium)

print("All text assets generated successfully.")
