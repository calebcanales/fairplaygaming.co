from PIL import Image
import os

# Define paths
INPUT_IMAGE = "/home/ubuntu/upload/Screenshot2025-12-07at12.30.42AM.png"
OUTPUT_DIR = "/home/ubuntu/betonline-prelander/client/public/images"

def process_banners():
    try:
        img = Image.open(INPUT_IMAGE)
        width, height = img.size
        
        # The image contains 3 distinct banners side-by-side
        # We'll split them into 3 equal parts (approximate based on visual inspection)
        banner_width = width // 3
        
        # Banner 1: NFL/Welcome Bonus
        banner1 = img.crop((0, 0, banner_width, height))
        banner1.save(os.path.join(OUTPUT_DIR, "banner_nfl_welcome.png"))
        print("Saved banner_nfl_welcome.png")
        
        # Banner 2: VIP Rewards
        banner2 = img.crop((banner_width, 0, banner_width * 2, height))
        banner2.save(os.path.join(OUTPUT_DIR, "banner_vip_rewards.png"))
        print("Saved banner_vip_rewards.png")
        
        # Banner 3: Crypto Deposit
        banner3 = img.crop((banner_width * 2, 0, width, height))
        banner3.save(os.path.join(OUTPUT_DIR, "banner_crypto_deposit.png"))
        print("Saved banner_crypto_deposit.png")
        
    except Exception as e:
        print(f"Error processing banners: {e}")

if __name__ == "__main__":
    process_banners()
