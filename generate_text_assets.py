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

def create_text_image(text, filename, color, bg_color=None, font=font_large, padding=20, font_path=None, font_size=None):
    # Use custom font if provided
    if font_path and font_size:
        try:
            font = ImageFont.truetype(font_path, font_size)
        except:
            pass

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

# 5. Editorial / Article Assets (New - Aggressive Exposé)
# Headlines
create_text_image("Is Stake.com Rigged? The 'RTP Scandal' Explained", "article_headline.png", COLOR_BLACK, font=font_large)
create_text_image("The 'Influencer' Trap: How You're Being Played", "article_subhead_1.png", COLOR_BLACK, font=font_medium)
create_text_image("The Safe Alternative: Why Pros Are Moving Here", "article_subhead_2.png", COLOR_BLACK, font=font_medium)
create_text_image("Final Verdict: Don't Risk Your Crypto", "article_subhead_3.png", COLOR_BLACK, font=font_medium)

# Meta Info
create_text_image("By Investigative Team  |  Updated: Dec 06, 2025", "article_meta.png", "#666666", font=font_small)
create_text_image("GAMING WATCHDOG", "site_logo.png", COLOR_BLACK, font=font_large)

# Body Paragraphs (As Images for total obfuscation)
# We need a helper for multi-line text
def create_paragraph_image(text, filename, color="#333333", font=font_small, width=800, font_path=None, font_size=None):
    # Use custom font if provided
    if font_path and font_size:
        try:
            font = ImageFont.truetype(font_path, font_size)
        except:
            pass

    # Simple word wrap
    lines = []
    words = text.split()
    current_line = []
    
    # Create a dummy draw to measure
    dummy_img = Image.new('RGBA', (1, 1))
    draw = ImageDraw.Draw(dummy_img)
    
    for word in words:
        test_line = ' '.join(current_line + [word])
        bbox = draw.textbbox((0, 0), test_line, font=font)
        if bbox[2] > width:
            lines.append(' '.join(current_line))
            current_line = [word]
        else:
            current_line.append(word)
    lines.append(' '.join(current_line))
    
    # Calculate height
    line_height = draw.textbbox((0, 0), "Hg", font=font)[3] + 10 # +10 for line spacing
    img_height = len(lines) * line_height
    
    img = Image.new('RGBA', (width + 20, img_height + 20), (0,0,0,0))
    draw = ImageDraw.Draw(img)
    
    y = 0
    for line in lines:
        draw.text((0, y), line, font=font, fill=color)
        y += line_height
        
    img.save(os.path.join(OUTPUT_DIR, filename))
    print(f"Generated paragraph: {filename}")

para1 = "Reports are flooding in from users claiming massive irregularities in Stake's 'original' games. From sudden RTP drops to 'glitched' withdrawals during winning streaks, the evidence is mounting. Is this just bad luck, or is the algorithm designed to drain your balance?"
create_paragraph_image(para1, "para_intro.png")

para2 = "While streamers seem to win millions on stream, regular players are reporting a very different experience. Our analysis suggests that 'sponsored' accounts may have boosted odds, creating a false sense of hope for the average user. It's a classic bait-and-switch."
create_paragraph_image(para2, "para_limbo.png")

para3 = "In contrast, we've audited this legacy platform and found zero evidence of manipulation. With 25+ years of history, they don't need to rig games to make money. They offer true, audited odds on Baccarat, Roulette, and Sports. No gimmicks, just fair play."
create_paragraph_image(para3, "para_live.png")

para4 = "The choice is clear. You can gamble on an unregulated 'crypto casino' that might disappear tomorrow, or play on a licensed, insured platform that has paid out billions since 2001. Don't be the next victim of the 'hype' machine."
create_paragraph_image(para4, "para_sports.png")

# 6. Related Articles & Comments (New)
# Related Headlines
create_text_image("User Loses $50k on Stake Plinko: 'It's Rigged'", "related_1.png", COLOR_BLACK, font=font_medium)
create_text_image("The Truth About Streamer 'Fake Money' Deals", "related_2.png", COLOR_BLACK, font=font_medium)
create_text_image("List of Verified 'Fair' Casinos for 2025", "related_3.png", COLOR_BLACK, font=font_medium)

# Comments
create_paragraph_image("JasonD: Stake banned me after I won $10k. Never again.", "comment_1.png", width=600)
create_paragraph_image("BetPro22: Switched to BetOnline last month. Withdrawals are instant.", "comment_2.png", width=600)
create_paragraph_image("AnonUser: The RTP on Stake is definitely lowered for normal accounts.", "comment_3.png", width=600)

# --- New Aggressive Content Sections ---

# 1. Billionaire Owners Exposed
create_text_image(
    "THE BILLIONAIRE SCAM: HOW STAKE'S OWNERS GET RICH OFF YOU",
    "article_subhead_owners.png",
    color="#E31837", # Red
    font_path=font_path,
    font_size=36
)

create_paragraph_image(
    "Meet the youngest billionaires in Australia: the owners of Stake.com. How did they get so rich so fast? By systematically increasing the house edge on their 'original' games without notifying players. While you're losing your hard-earned money on rigged plinko balls, they're buying $50 million mansions and laughing all the way to the bank.",
    "para_owners.png",
    width=800,
    font_path=font_path,
    font_size=20
)

# 2. Targeting the Youth
create_text_image(
    "PREDATORY TACTICS: TARGETING THE NEXT GENERATION",
    "article_subhead_youth.png",
    color="#E31837", # Red
    font_path=font_path,
    font_size=36
)

create_paragraph_image(
    "Stake isn't just a casino; it's a predatory machine designed to hook the younger generation. By paying millions to streamers and influencers, they've turned gambling into a video game for Gen Z. But unlike a video game, when you lose here, you lose real money. They know exactly what they're doing: creating a generation of addicts to fund their billionaire lifestyles.",
    "para_youth.png",
    width=800,
    font_path=font_path,
    font_size=20
)

# 3. The Hidden House Edge
create_text_image(
    "THE SILENT THEFT: CRANKING UP THE HOUSE EDGE",
    "article_subhead_edge.png",
    color="#E31837", # Red
    font_path=font_path,
    font_size=36
)

create_paragraph_image(
    "Think you have a fair shot? Think again. Insider reports suggest that Stake has quietly adjusted the RTP (Return to Player) on their most popular games, effectively increasing the house edge without any public announcement. This means your chances of winning are mathematically lower today than they were yesterday. It's not bad luck; it's a rigged system.",
    "para_edge.png",
    width=800,
    font_path=font_path,
    font_size=20
)

# 7. Savage Hero Composite
def create_savage_hero():
    try:
        # Load the background
        bg_path = os.path.join(OUTPUT_DIR, "../hero_vs_bg.png")
        if not os.path.exists(bg_path):
            print("Hero BG not found, skipping composite.")
            return
            
        img = Image.open(bg_path).convert("RGBA")
        width, height = img.size
        draw = ImageDraw.Draw(img)
        
        # Fonts
        font_huge = ImageFont.truetype(font_path, 120)
        font_massive = ImageFont.truetype(font_path, 200)
        
        # Load Logos (User Provided)
        stake_logo_path = os.path.join(OUTPUT_DIR, "../stake_logo_user.jpg")
        bol_logo_path = os.path.join(OUTPUT_DIR, "../betlogo.webp")
        
        # Process Stake Logo (Resize and center)
        if os.path.exists(stake_logo_path):
            stake_logo = Image.open(stake_logo_path).convert("RGBA")
            # Remove white background if needed (simple threshold)
            datas = stake_logo.getdata()
            newData = []
            for item in datas:
                if item[0] > 200 and item[1] > 200 and item[2] > 200:
                    newData.append((255, 255, 255, 0))
                else:
                    newData.append(item)
            stake_logo.putdata(newData)
            
            # Resize to width 500
            ratio = 500 / stake_logo.width
            new_height = int(stake_logo.height * ratio)
            stake_logo = stake_logo.resize((500, new_height), Image.Resampling.LANCZOS)
            # Paste centered on left side
            logo_x = int(width*0.25 - stake_logo.width/2)
            logo_y = int(height*0.5 - stake_logo.height/2)
            img.paste(stake_logo, (logo_x, logo_y), stake_logo)
        else:
            draw.text((width*0.25, height*0.5), "STAKE", font=font_huge, fill="white", anchor="mm")

        # Process BetOnline Logo (Resize and center)
        if os.path.exists(bol_logo_path):
            bol_logo = Image.open(bol_logo_path).convert("RGBA")
            # Resize to width 600
            ratio = 600 / bol_logo.width
            new_height = int(bol_logo.height * ratio)
            bol_logo = bol_logo.resize((600, new_height), Image.Resampling.LANCZOS)
            # Paste centered on right side
            logo_x = int(width*0.75 - bol_logo.width/2)
            logo_y = int(height*0.5 - bol_logo.height/2)
            img.paste(bol_logo, (logo_x, logo_y), bol_logo)
        else:
            draw.text((width*0.75, height*0.5), "BETONLINE", font=font_huge, fill="white", anchor="mm")

        # Center VS
        # Draw a black circle behind VS for contrast
        circle_radius = 120
        center_x, center_y = width//2, height//2
        draw.ellipse((center_x-circle_radius, center_y-circle_radius, center_x+circle_radius, center_y+circle_radius), fill="black", outline="white", width=5)
        draw.text((center_x, center_y), "VS", font=font_huge, fill="white", anchor="mm")
        
        # Save
        img.save(os.path.join(OUTPUT_DIR, "hero_savage_final.png"))
        print("Generated savage hero composite.")
        
    except Exception as e:
        print(f"Error creating hero composite: {e}")

create_savage_hero()

print("All text assets generated successfully.")
