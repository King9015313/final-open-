import math
import subprocess

def create_image(W, H):
    pixels = bytearray(W * H * 3)
    def set_pixel(x, y, r, g, b, alpha=1.0):
        if 0 <= x < W and 0 <= y < H:
            idx = (y * W + x) * 3
            if alpha >= 1.0:
                pixels[idx] = max(0, min(255, int(r)))
                pixels[idx+1] = max(0, min(255, int(g)))
                pixels[idx+2] = max(0, min(255, int(b)))
            else:
                curr_r = pixels[idx]
                curr_g = pixels[idx+1]
                curr_b = pixels[idx+2]
                pixels[idx] = max(0, min(255, int(curr_r * (1 - alpha) + r * alpha)))
                pixels[idx+1] = max(0, min(255, int(curr_g * (1 - alpha) + g * alpha)))
                pixels[idx+2] = max(0, min(255, int(curr_b * (1 - alpha) + b * alpha)))
    return pixels, set_pixel

def save_webp(pixels, W, H, filename):
    ppm_name = filename.replace('.webp', '.ppm')
    header = f"P6\n{W} {H}\n255\n".encode('ascii')
    with open(ppm_name, 'wb') as f:
        f.write(header)
        f.write(pixels)
    subprocess.run(["convert", ppm_name, "-quality", "95", filename], check=True)
    subprocess.run(["rm", ppm_name], check=True)

# 1. Arjun Mehta (108332.webp)
# Indian man, close-up facing camera, blue collared shirt, friendly gentle smile, trimmed stubble
def render_arjun():
    W, H = 300, 300
    pixels, put = create_image(W, H)
    cx, cy = 150, 142
    
    # Background: modern bright workplace bokeh with soft window on left
    for y in range(H):
        for x in range(W):
            tx = x / W
            ty = y / H
            # soft bokeh gradient
            bg_r = int(140 + 40 * (1 - tx) - 20 * ty)
            bg_g = int(145 + 35 * (1 - tx) - 15 * ty)
            bg_b = int(150 + 30 * (1 - tx) - 10 * ty)
            # subtle warm blur spots
            d1 = (x - 60)**2 + (y - 70)**2
            if d1 < 3600:
                bg_r += int(15 * (1 - d1/3600))
                bg_g += int(15 * (1 - d1/3600))
            put(x, y, bg_r, bg_g, bg_b)

    # Blue shirt (chest & shoulders)
    for y in range(215, H):
        for x in range(W):
            dx = (x - cx) / 130.0
            dy = (y - 290) / 90.0
            if dx*dx + dy*dy <= 1.0 or y > 260:
                shade = 0.85 + 0.25 * math.cos((x - 130) / 60.0)
                sr = int(45 * shade)
                sg = int(95 * shade)
                sb = int(160 * shade)
                # placket / collar
                if abs(x - cx) < 12 and y > 240:
                    sr = int(sr * 0.8)
                    sg = int(sg * 0.8)
                    sb = int(sb * 0.8)
                put(x, y, sr, sg, sb)

    # Neck
    for y in range(180, 245):
        for x in range(cx - 26, cx + 26):
            nx = (x - cx) / 25.0
            if nx*nx <= 1.0:
                shade = 0.85 + 0.2 * math.cos(nx * 1.4)
                put(x, y, 205 * shade, 150 * shade, 110 * shade)

    # Face & Jaw (front-facing, close-up)
    for y in range(75, 225):
        for x in range(cx - 68, cx + 68):
            fx = (x - cx) / 58.0
            fy = (y - cy) / 70.0
            if fy > 0.35:
                fx *= (1.0 + (fy - 0.35) * 0.4)
            if fx*fx + fy*fy <= 1.0:
                light = 1.0 - 0.15 * fx - 0.1 * fy
                put(x, y, 218 * light, 162 * light, 122 * light)

    # Hair (dark, slight texture)
    for y in range(65, 145):
        for x in range(cx - 68, cx + 68):
            hx = (x - cx) / 62.0
            hy = (y - 105) / 44.0
            if hx*hx + hy*hy <= 1.0 and (hy < -0.15 or abs(hx) > 0.75):
                put(x, y, 32, 26, 22)

    # Eyebrows
    for x in range(112, 142):
        by = int(126 - 3 * math.sin((x - 112) / 30.0 * math.pi))
        for dy in range(-2, 3):
            put(x, by + dy, 30, 24, 20, 0.9)
    for x in range(158, 188):
        by = int(126 - 3 * math.sin((x - 158) / 30.0 * math.pi))
        for dy in range(-2, 3):
            put(x, by + dy, 30, 24, 20, 0.9)

    # Eyes (Direct camera gaze)
    for ey in range(134, 144):
        for ex in range(120, 138):
            if ((ex - 129)/7.5)**2 + ((ey - 138)/4.0)**2 <= 1.0:
                put(ex, ey, 240, 242, 244)
                if (ex - 130)**2 + (ey - 138)**2 <= 8:
                    put(ex, ey, 35, 26, 20)
                if ex == 130 and ey == 137:
                    put(ex, ey, 255, 255, 255)
        for ex in range(162, 180):
            if ((ex - 171)/7.5)**2 + ((ey - 138)/4.0)**2 <= 1.0:
                put(ex, ey, 240, 242, 244)
                if (ex - 170)**2 + (ey - 138)**2 <= 8:
                    put(ex, ey, 35, 26, 20)
                if ex == 170 and ey == 137:
                    put(ex, ey, 255, 255, 255)

    # Nose & gentle smile
    for ny in range(134, 172):
        put(150, ny, 185, 130, 95, 0.5)
        put(151, ny, 230, 175, 135, 0.6)
    for nx in range(144, 157):
        put(nx, 169, 175, 120, 85, 0.6)

    # Smile
    for lx in range(138, 164):
        t = (lx - 138) / 26.0
        ly = int(186 + 3.0 * math.sin(t * math.pi))
        put(lx, ly, 180, 85, 80, 0.8)

    # Light trimmed beard stubble
    for y in range(168, 215):
        for x in range(cx - 45, cx + 45):
            jx = (x - cx) / 44.0
            jy = (y - 190) / 26.0
            if 0.55 < jx*jx + jy*jy < 1.02 and (x + y * 2) % 2 == 0:
                put(x, y, 45, 36, 30, 0.35)

    save_webp(pixels, W, H, "public/108332.webp")
    save_webp(pixels, W, H, "public/images/108332.webp")

# 2. Pooja Nambiar (108333.webp)
# Indian woman, bun updo, beige linen blazer, bright smiling teeth, warm studio lighting
def render_pooja():
    W, H = 300, 300
    pixels, put = create_image(W, H)
    cx, cy = 150, 148

    # Background: soft warm grey studio bokeh
    for y in range(H):
        for x in range(W):
            dist_bg = math.sqrt((x - 150)**2 + (y - 100)**2)
            bg_val = int(165 - dist_bg * 0.15)
            put(x, y, bg_val + 5, bg_val + 2, bg_val - 2)

    # High hair bun on top
    for y in range(35, 85):
        for x in range(cx - 30, cx + 30):
            bx = (x - cx) / 26.0
            by = (y - 60) / 22.0
            if bx*bx + by*by <= 1.0:
                put(x, y, 28, 22, 18)

    # Beige blazer and white shirt
    for y in range(215, H):
        for x in range(W):
            dx = (x - cx) / 125.0
            dy = (y - 290) / 90.0
            if dx*dx + dy*dy <= 1.0 or y > 260:
                # Beige linen
                put(x, y, 215, 195, 172)
    # White t-shirt neckline
    for y in range(210, 260):
        for x in range(cx - 25, cx + 25):
            if ((x - cx)/22.0)**2 + ((y - 210)/45.0)**2 <= 1.0:
                put(x, y, 245, 245, 248)

    # Gold triangle necklace pendant
    put(cx, 224, 212, 175, 55)
    put(cx-1, 225, 212, 175, 55)
    put(cx+1, 225, 212, 175, 55)

    # Neck
    for y in range(180, 225):
        for x in range(cx - 22, cx + 22):
            nx = (x - cx) / 20.0
            if nx*nx <= 1.0:
                shade = 0.88 + 0.2 * math.cos(nx * 1.5)
                put(x, y, 215 * shade, 160 * shade, 120 * shade)

    # Face & Jaw (elegant oval, radiant smile)
    for y in range(80, 215):
        for x in range(cx - 56, cx + 56):
            fx = (x - cx) / 50.0
            fy = (y - cy) / 66.0
            if fy > 0.3:
                fx *= (1.0 + (fy - 0.3) * 0.45)
            if fx*fx + fy*fy <= 1.0:
                light = 1.02 - 0.1 * fx - 0.08 * fy
                put(x, y, 224 * light, 168 * light, 128 * light)

    # Loose hair strands around ears/bun
    for y in range(75, 140):
        for x in range(cx - 58, cx + 58):
            hx = (x - cx) / 54.0
            hy = (y - 110) / 40.0
            if hx*hx + hy*hy <= 1.0 and (hy < -0.25 or abs(hx) > 0.78):
                put(x, y, 28, 22, 18)

    # Arched neat eyebrows
    for x in range(115, 142):
        by = int(130 - 4 * math.sin((x - 115) / 27.0 * math.pi))
        for dy in range(-2, 2):
            put(x, by + dy, 32, 24, 20, 0.9)
    for x in range(158, 185):
        by = int(130 - 4 * math.sin((x - 158) / 27.0 * math.pi))
        for dy in range(-2, 2):
            put(x, by + dy, 32, 24, 20, 0.9)

    # Warm almond eyes
    for ey in range(138, 148):
        for ex in range(122, 138):
            if ((ex - 130)/7.0)**2 + ((ey - 142)/4.0)**2 <= 1.0:
                put(ex, ey, 245, 245, 246)
                if (ex - 130)**2 + (ey - 142)**2 <= 7:
                    put(ex, ey, 40, 26, 18)
                if ex == 130 and ey == 141:
                    put(ex, ey, 255, 255, 255)
        for ex in range(162, 178):
            if ((ex - 170)/7.0)**2 + ((ey - 142)/4.0)**2 <= 1.0:
                put(ex, ey, 245, 245, 246)
                if (ex - 170)**2 + (ey - 142)**2 <= 7:
                    put(ex, ey, 40, 26, 18)
                if ex == 170 and ey == 141:
                    put(ex, ey, 255, 255, 255)

    # Nose
    for ny in range(138, 170):
        put(150, ny, 195, 140, 100, 0.5)
        put(151, ny, 235, 180, 140, 0.6)

    # Radiant smile showing teeth
    for ly in range(180, 196):
        for lx in range(134, 168):
            ldx = (lx - 151) / 16.0
            ldy = (ly - 188) / 6.0
            if ldx*ldx + ldy*ldy <= 1.0:
                if ly >= 186 and abs(lx - 151) < 12:
                    put(lx, ly, 255, 255, 252) # teeth
                else:
                    put(lx, ly, 190, 80, 75, 0.85)

    save_webp(pixels, W, H, "public/108333.webp")
    save_webp(pixels, W, H, "public/images/108333.webp")

# 3. Rohan Deshmukh (108334.webp)
# Indian man, round wireframe glasses, trimmed beard, olive green shirt, golden hour sunset halo
def render_rohan():
    W, H = 300, 300
    pixels, put = create_image(W, H)
    cx, cy = 150, 146

    # Background: Golden hour sunset bokeh (warm amber, gold, dark foliage)
    for y in range(H):
        for x in range(W):
            # Sun glow from top right corner (250, 30)
            dist_sun = math.sqrt((x - 260)**2 + (y - 30)**2)
            sun_glow = max(0.0, 1.0 - dist_sun / 280.0)
            r = int(60 + 175 * sun_glow)
            g = int(50 + 120 * sun_glow)
            b = int(35 + 40 * sun_glow)
            put(x, y, r, g, b)

    # Olive green shirt
    for y in range(220, H):
        for x in range(W):
            dx = (x - cx) / 125.0
            dy = (y - 290) / 90.0
            if dx*dx + dy*dy <= 1.0 or y > 260:
                shade = 0.85 + 0.2 * math.cos((x - 120) / 60.0)
                # Golden sun rim light on left & right shoulders
                if x > 210:
                    put(x, y, 145, 140, 75)
                else:
                    put(x, y, 78 * shade, 98 * shade, 58 * shade)

    # Neck
    for y in range(185, 245):
        for x in range(cx - 26, cx + 26):
            nx = (x - cx) / 24.0
            if nx*nx <= 1.0:
                shade = 0.88 + 0.2 * math.cos(nx * 1.5)
                put(x, y, 210 * shade, 155 * shade, 115 * shade)

    # Face & Jaw
    for y in range(80, 220):
        for x in range(cx - 62, cx + 62):
            fx = (x - cx) / 54.0
            fy = (y - cy) / 68.0
            if fy > 0.35:
                fx *= (1.0 + (fy - 0.35) * 0.4)
            if fx*fx + fy*fy <= 1.0:
                # Golden rim light on right side
                rim = 1.0 + 0.25 * max(0.0, fx)
                put(x, y, 220 * rim, 165 * rim, 125 * rim)

    # Hair (golden rim on top/right)
    for y in range(70, 145):
        for x in range(cx - 64, cx + 64):
            hx = (x - cx) / 58.0
            hy = (y - 110) / 44.0
            if hx*hx + hy*hy <= 1.0 and (hy < -0.15 or abs(hx) > 0.74):
                if hx > 0.4 and hy < 0.1:
                    put(x, y, 160, 110, 50) # sun rim
                else:
                    put(x, y, 30, 24, 20)

    # Eyebrows
    for x in range(116, 142):
        by = int(127 - 3 * math.sin((x - 116) / 26.0 * math.pi))
        for dy in range(-2, 2):
            put(x, by + dy, 32, 24, 20, 0.9)
    for x in range(158, 184):
        by = int(127 - 3 * math.sin((x - 158) / 26.0 * math.pi))
        for dy in range(-2, 2):
            put(x, by + dy, 32, 24, 20, 0.9)

    # Eyes
    for ey in range(137, 147):
        for ex in range(122, 138):
            if ((ex - 130)/7.0)**2 + ((ey - 142)/4.0)**2 <= 1.0:
                put(ex, ey, 242, 242, 244)
                if (ex - 130)**2 + (ey - 142)**2 <= 7:
                    put(ex, ey, 38, 28, 22)
                if ex == 130 and ey == 141:
                    put(ex, ey, 255, 255, 255)
        for ex in range(162, 178):
            if ((ex - 170)/7.0)**2 + ((ey - 142)/4.0)**2 <= 1.0:
                put(ex, ey, 242, 242, 244)
                if (ex - 170)**2 + (ey - 142)**2 <= 7:
                    put(ex, ey, 38, 28, 22)
                if ex == 170 and ey == 141:
                    put(ex, ey, 255, 255, 255)

    # Distinctive Round Thin Wireframe Glasses
    # Left ring (center 129, 142, radius 14)
    for deg in range(360):
        rad = math.radians(deg)
        gx = int(129 + 14 * math.cos(rad))
        gy = int(142 + 14 * math.sin(rad))
        put(gx, gy, 195, 165, 110) # gold wireframe
        put(gx, gy+1, 150, 120, 80, 0.7)
    # Right ring (center 171, 142, radius 14)
    for deg in range(360):
        rad = math.radians(deg)
        gx = int(171 + 14 * math.cos(rad))
        gy = int(142 + 14 * math.sin(rad))
        put(gx, gy, 195, 165, 110)
        put(gx, gy+1, 150, 120, 80, 0.7)
    # Bridge
    for bx in range(143, 158):
        put(bx, 141, 195, 165, 110)

    # Nose & gentle smile
    for ny in range(142, 172):
        put(150, ny, 190, 135, 95, 0.5)
    # Full trimmed beard & mustache
    for y in range(166, 218):
        for x in range(cx - 48, cx + 48):
            jx = (x - cx) / 46.0
            jy = (y - 192) / 26.0
            if 0.5 < jx*jx + jy*jy < 1.04:
                put(x, y, 32, 26, 22, 0.7)
            # mustache
            if 174 <= y <= 184 and abs(x - cx) < 22:
                put(x, y, 32, 26, 22, 0.8)

    # Lips smiling inside beard
    for lx in range(140, 160):
        put(lx, 188, 185, 95, 90, 0.8)

    save_webp(pixels, W, H, "public/108334.webp")
    save_webp(pixels, W, H, "public/images/108334.webp")

# 4. Sneha Kapoor (108335.webp)
# Indian woman, side-angle laughing happily, wavy hair, green shirt, creative cafe background
def render_sneha():
    W, H = 300, 300
    pixels, put = create_image(W, H)
    cx, cy = 160, 142

    # Background: modern bright cafe/studio with hints of green plant & desk
    for y in range(H):
        for x in range(W):
            tx = x / W
            ty = y / H
            bg_r = int(160 + 30 * tx - 20 * ty)
            bg_g = int(165 + 35 * tx - 25 * ty)
            bg_b = int(160 + 20 * tx - 30 * ty)
            # plant bokeh on left
            if x < 80 and y < 140:
                bg_g += 20
                bg_r -= 10
            put(x, y, bg_r, bg_g, bg_b)

    # Content Calendar spiral notebook hint on bottom right desk
    for y in range(250, H):
        for x in range(190, W):
            put(x, y, 245, 245, 240)
            if y == 260 and x > 200:
                put(x, y, 50, 50, 50, 0.5)

    # Olive green linen shirt (turned slightly 3/4 right)
    for y in range(215, H):
        for x in range(W):
            dx = (x - cx + 20) / 120.0
            dy = (y - 290) / 90.0
            if dx*dx + dy*dy <= 1.0 or y > 260:
                shade = 0.85 + 0.2 * math.cos((x - 140) / 60.0)
                put(x, y, 85 * shade, 105 * shade, 65 * shade)

    # Neck
    for y in range(180, 235):
        for x in range(cx - 24, cx + 22):
            nx = (x - cx) / 22.0
            if nx*nx <= 1.0:
                shade = 0.88 + 0.2 * math.cos(nx * 1.5)
                put(x, y, 220 * shade, 165 * shade, 125 * shade)

    # Face & Jaw (Profile laughing candidly facing slightly right)
    for y in range(75, 210):
        for x in range(cx - 52, cx + 58):
            fx = (x - cx) / 52.0
            fy = (y - cy) / 66.0
            if fy > 0.25:
                fx *= (1.0 + (fy - 0.25) * 0.4)
            if fx*fx + fy*fy <= 1.0:
                light = 1.02 - 0.08 * fx - 0.08 * fy
                put(x, y, 226 * light, 172 * light, 132 * light)

    # Freckles across nose and cheekbones (Distinct feature from photo!)
    freckles = [
        (148, 142), (152, 144), (156, 141), (162, 145), (145, 146),
        (168, 148), (172, 150), (142, 149), (176, 153), (150, 150)
    ]
    for fx, fy in freckles:
        put(fx, fy, 165, 105, 75, 0.7)
        put(fx+1, fy, 165, 105, 75, 0.4)

    # Long wavy dark hair cascading down back and over shoulder
    for y in range(70, 260):
        for x in range(95, 150):
            wave = 8 * math.sin((y - 70) / 25.0)
            if abs(x - (125 + wave)) < 24:
                put(x, y, 28, 22, 18)
    for y in range(65, 135):
        for x in range(cx - 50, cx + 50):
            hx = (x - cx) / 48.0
            hy = (y - 105) / 40.0
            if hx*hx + hy*hy <= 1.0 and hy < -0.2:
                put(x, y, 28, 22, 18)

    # Small gold hoop earring
    for r in range(4):
        put(134, 165 + r, 220, 180, 60)
        put(133, 165 + r, 220, 180, 60)

    # Smiling laughing eyes (crinkling with genuine joy)
    # Left eye: smiling crinkle
    for ex in range(145, 160):
        t = (ex - 145) / 15.0
        ey = int(136 - 3.5 * math.sin(t * math.pi))
        put(ex, ey, 35, 24, 20, 0.9)
        put(ex, ey+1, 35, 24, 20, 0.7)
    # Right eye
    for ex in range(174, 190):
        t = (ex - 174) / 16.0
        ey = int(136 - 3.5 * math.sin(t * math.pi))
        put(ex, ey, 35, 24, 20, 0.9)
        put(ex, ey+1, 35, 24, 20, 0.7)

    # Laughing Open Mouth with white teeth showing
    for my in range(168, 192):
        for mx in range(155, 196):
            mdx = (mx - 175) / 19.0
            mdy = (my - 180) / 10.0
            if mdx*mdx + mdy*mdy <= 1.0:
                if my < 178:
                    put(mx, my, 255, 255, 255) # upper teeth
                elif my > 185:
                    put(mx, my, 250, 250, 250) # lower teeth
                else:
                    put(mx, my, 90, 25, 25) # mouth interior
    # Lip contours
    for mx in range(150, 200):
        t = (mx - 150) / 50.0
        top_y = int(170 - 3 * math.sin(t * math.pi))
        put(mx, top_y, 185, 80, 75, 0.75)
        bot_y = int(189 + 3 * math.sin(t * math.pi))
        put(mx, bot_y, 185, 80, 75, 0.75)

    save_webp(pixels, W, H, "public/108335.webp")
    save_webp(pixels, W, H, "public/images/108335.webp")

print("Generating 4 avatars...")
render_arjun()
render_pooja()
render_rohan()
render_sneha()
print("All 4 avatars generated!")
