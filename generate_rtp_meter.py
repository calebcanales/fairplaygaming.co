from PIL import Image, ImageDraw, ImageFont
import os
import math

# Define colors
COLOR_RED = "#EF4444"
COLOR_YELLOW = "#EAB308"
COLOR_GREEN = "#22C55E"
COLOR_TEXT = "#111827"
COLOR_BG = "#FFFFFF"

# Define output directory
OUTPUT_DIR = "/home/ubuntu/betonline-prelander/client/public/images"
os.makedirs(OUTPUT_DIR, exist_ok=True)

def create_rtp_meter():
    # Canvas size
    width = 600
    height = 300
    
    img = Image.new('RGBA', (width, height), (0,0,0,0))
    draw = ImageDraw.Draw(img)
    
    # Meter Arc
    center_x = 200
    center_y = 200
    radius = 150
    
    # Draw segments
    # Red (Low)
    draw.pieslice([center_x-radius, center_y-radius, center_x+radius, center_y+radius], 
                  start=180, end=240, fill=COLOR_RED)
    # Yellow (Medium)
    draw.pieslice([center_x-radius, center_y-radius, center_x+radius, center_y+radius], 
                  start=240, end=300, fill=COLOR_YELLOW)
    # Green (High)
    draw.pieslice([center_x-radius, center_y-radius, center_x+radius, center_y+radius], 
                  start=300, end=360, fill=COLOR_GREEN)
    
    # Inner circle to make it an arc (donut)
    inner_radius = 80
    draw.pieslice([center_x-inner_radius, center_y-inner_radius, center_x+inner_radius, center_y+inner_radius], 
                  start=180, end=360, fill=COLOR_BG) # Transparent/White cutout
                  
    # Needle
    # Pointing to Green (High) ~ 330 degrees
    angle = 330
    angle_rad = math.radians(angle)
    needle_len = 140
    end_x = center_x + needle_len * math.cos(angle_rad)
    end_y = center_y + needle_len * math.sin(angle_rad)
    
    draw.line([center_x, center_y, end_x, end_y], fill="#000000", width=8)
    # Needle center cap
    draw.ellipse([center_x-15, center_y-15, center_x+15, center_y+15], fill="#000000")
    
    # Text
    try:
        font_path = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
        font_label = ImageFont.truetype(font_path, 24)
        font_val = ImageFont.truetype(font_path, 48)
    except:
        font_label = ImageFont.load_default()
        font_val = ImageFont.load_default()
        
    # "Chance of Winning"
    draw.text((400, 100), "Chance of Winning", font=font_label, fill=COLOR_TEXT, anchor="mm")
    # "HIGH"
    draw.text((400, 150), "HIGH", font=font_val, fill=COLOR_GREEN, anchor="mm")
    
    # Save
    output_path = os.path.join(OUTPUT_DIR, "rtp_meter.png")
    img.save(output_path)
    print(f"Generated RTP meter at {output_path}")

if __name__ == "__main__":
    create_rtp_meter()
