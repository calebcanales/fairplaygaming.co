from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os

# Define colors
COLOR_DARK_BG = "#111111" # Matching the dark card background
COLOR_RED_GLOW = "#E31837"

# Define output directory
OUTPUT_DIR = "/home/ubuntu/betonline-prelander/client/public/images"
os.makedirs(OUTPUT_DIR, exist_ok=True)

def create_sidebar_promo():
    # Canvas size (Sidebar width approx 300-400px)
    width = 400
    height = 500
    
    img = Image.new('RGBA', (width, height), COLOR_DARK_BG)
    draw = ImageDraw.Draw(img)
    
    # Create a subtle red gradient/glow at the top
    # We'll do this by drawing a large red circle and blurring it heavily
    glow_layer = Image.new('RGBA', (width, height), (0,0,0,0))
    glow_draw = ImageDraw.Draw(glow_layer)
    
    # Draw red ellipse at top center
    glow_draw.ellipse([-100, -100, width+100, 200], fill=COLOR_RED_GLOW)
    
    # Blur it
    glow_layer = glow_layer.filter(ImageFilter.GaussianBlur(radius=50))
    
    # Reduce opacity of glow
    # Create an alpha mask with constant value
    alpha = glow_layer.split()[3]
    alpha = alpha.point(lambda p: p * 0.3)
    glow_layer.putalpha(alpha)
    
    # Composite glow onto background
    img.paste(glow_layer, (0,0), glow_layer)
    
    # Load and integrate the roulette image if available, but make it blend
    # Instead of a hard rectangle, we'll feather the edges
    roulette_path = "/home/ubuntu/betonline-prelander/client/public/images/roulette_banner.png"
    # If that doesn't exist, try the upload path or skip
    if not os.path.exists(roulette_path):
        # Try to find a suitable image from previous uploads
        # We'll use betonline_roulette_728x90.png as a fallback source if needed, but let's check common paths
        pass

    # Since the user mentioned "roulette_banner.png" in the code, let's try to generate a placeholder 
    # that looks like a high-quality integrated graphic if the file is missing or needs replacement.
    # But the user specifically pointed out an image in the screenshot that looked like a banner.
    # Let's create a new "integrated" promo image that includes the roulette wheel but fades into the dark bg.
    
    # Let's assume we want to create a "sidebar_promo_bg.png" that serves as the card background
    # and includes the visual elements directly, rather than stacking HTML elements.
    
    # Save the background
    output_path = os.path.join(OUTPUT_DIR, "sidebar_promo_bg.png")
    img.save(output_path)
    print(f"Generated sidebar background at {output_path}")

if __name__ == "__main__":
    create_sidebar_promo()
