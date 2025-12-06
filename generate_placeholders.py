from PIL import Image, ImageDraw, ImageFont
import os

# Define output directory
OUTPUT_DIR = "/home/ubuntu/betonline-prelander/client/public/images"
os.makedirs(OUTPUT_DIR, exist_ok=True)

def create_placeholder(filename, text, color="#111827", text_color="#FFFFFF"):
    width = 800
    height = 450
    
    img = Image.new('RGB', (width, height), color)
    draw = ImageDraw.Draw(img)
    
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 48)
    except:
        font = ImageFont.load_default()
        
    draw.text((width/2, height/2), text, font=font, fill=text_color, anchor="mm")
    
    output_path = os.path.join(OUTPUT_DIR, filename)
    img.save(output_path)
    print(f"Generated placeholder: {output_path}")

if __name__ == "__main__":
    # Generate missing images identified in the audit
    create_placeholder("limbo_var08.png", "Limbo Gameplay", color="#1F2937")
    create_placeholder("baccarat_var08.png", "Live Baccarat", color="#064E3B")
