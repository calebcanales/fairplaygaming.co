from PIL import Image, ImageDraw, ImageFont
import os

def create_cancelled_graphic():
    # Paths
    input_path = "/home/ubuntu/betonline-prelander/owners_original.webp"
    output_path = "/home/ubuntu/betonline-prelander/client/public/images/owners_cancelled.png"
    
    # Load image
    try:
        img = Image.open(input_path).convert("RGBA")
    except Exception as e:
        print(f"Error loading image: {e}")
        return

    # Create a drawing context for the stamp
    # Make a separate layer for the stamp to handle rotation
    stamp_layer = Image.new("RGBA", img.size, (255, 255, 255, 0))
    draw = ImageDraw.Draw(stamp_layer)

    # Font settings
    try:
        # DejaVuSans-Bold is usually available on Linux
        font_path = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
        if not os.path.exists(font_path):
             font = ImageFont.load_default()
             font_size = 40
        else:
            # Reduce font size to be less obstructive (was /6)
            font_size = int(img.width / 8)
            font = ImageFont.truetype(font_path, font_size)
    except:
        font = ImageFont.load_default()
        font_size = 40

    text = "CANCELLED"
    
    # Calculate text size
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    # Stamp dimensions
    padding_x = int(text_width * 0.1)
    padding_y = int(text_height * 0.1)
    stamp_w = text_width + 2 * padding_x
    stamp_h = text_height + 2 * padding_y
    
    # Center position
    center_x = img.width / 2
    center_y = img.height / 2
    
    # Top-left of the stamp rectangle (before rotation)
    rect_x1 = center_x - stamp_w / 2
    rect_y1 = center_y - stamp_h / 2
    rect_x2 = center_x + stamp_w / 2
    rect_y2 = center_y + stamp_h / 2

    # Colors - More transparent red
    # Was (220, 20, 60, 230)
    stamp_color = (200, 0, 0, 160) 
    
    # Draw the rectangle border
    border_width = int(font_size / 8)
    draw.rectangle([rect_x1, rect_y1, rect_x2, rect_y2], outline=stamp_color, width=border_width)
    
    # Draw the text inside
    text_x = center_x - text_width / 2
    text_y = center_y - text_height / 2 - (bbox[3] - bbox[1]) * 0.1
    
    draw.text((text_x, text_y), text, font=font, fill=stamp_color)

    # Rotate the stamp layer
    rotated_stamp = stamp_layer.rotate(15, resample=Image.BICUBIC, center=(center_x, center_y))

    # Composite
    final_img = Image.alpha_composite(img, rotated_stamp)

    # Save
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    final_img.save(output_path, "PNG")
    print(f"Generated cancelled graphic at {output_path}")

if __name__ == "__main__":
    create_cancelled_graphic()
