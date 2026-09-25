import math

def generate_arjun_ppm():
    W, H = 400, 400
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

    for y in range(H):
        for x in range(W):
            # Background: modern bright office with subtle bokeh window on left, grey-taupe on right
            # gradient from left window to right office wall
            tx = x / W
            ty = y / H
            bg_r = 175 + int(45 * (1 - tx) - 30 * ty)
            bg_g = 180 + int(45 * (1 - tx) - 25 * ty)
            bg_b = 185 + int(50 * (1 - tx) - 20 * ty)
            # Add vertical architectural office window mullion
            if 140 <= x <= 165:
                bg_r -= 25
                bg_g -= 25
                bg_b -= 20
            set_pixel(x, y, bg_r, bg_g, bg_b)

    # Face center: (200, 155)
    # Head ellipse: a=58, b=72
    cx, cy = 200, 150

    # Draw Blue Button-down Shirt (torso & shoulders)
    for y in range(240, H):
        for x in range(W):
            dx = (x - cx) / 140.0
            dy = (y - 340) / 110.0
            if dx*dx + dy*dy <= 1.0 or y > 300:
                # Blue shirt shading (rich French blue from photo: ~#2B5EA8)
                shade = 0.85 + 0.25 * math.cos((x - 170) / 70.0)
                sr = int(35 * shade + (y - 240) * 0.05)
                sg = int(85 * shade)
                sb = int(160 * shade)
                # Collar / placket depth
                if abs(x - cx) < 14 and y > 270:
                    sr = int(sr * 0.8)
                    sg = int(sg * 0.8)
                    sb = int(sb * 0.8)
                set_pixel(x, y, sr, sg, sb)

    # Draw Neck
    for y in range(195, 275):
        for x in range(cx - 30, cx + 30):
            nx = (x - cx) / 28.0
            ny = (y - 235) / 40.0
            if nx*nx + ny*ny <= 1.0:
                # Warm Indian skin tone (#D5A074)
                shade = 0.88 + 0.2 * math.cos(nx * 1.5) - (y - 195) * 0.002
                nr = int(210 * shade)
                ng = int(160 * shade)
                nb = int(120 * shade)
                set_pixel(x, y, nr, ng, nb)

    # Draw Head and Face
    for y in range(80, 240):
        for x in range(cx - 75, cx + 75):
            # Head geometry slightly rotated towards right
            fx = (x - cx) / 58.0
            fy = (y - cy) / 72.0
            # Jaw taper
            if fy > 0.3:
                fx *= (1.0 + (fy - 0.3) * 0.45)
            dist2 = fx*fx + fy*fy
            if dist2 <= 1.0:
                # 3D Lighting on face from top-left office light
                light = 1.0 - 0.25 * fx - 0.15 * fy
                light = max(0.65, min(1.25, light))
                fr = int(218 * light)
                fg = int(165 * light)
                fb = int(124 * light)
                # Cheekbone & forehead warmth
                if fy < 0.1 and abs(fx) < 0.6:
                    fr += 8
                    fg += 4
                set_pixel(x, y, fr, fg, fb)

    # Draw Neat Black Parted Hair (from photo)
    for y in range(70, 160):
        for x in range(cx - 70, cx + 70):
            hx = (x - cx) / 64.0
            hy = (y - 120) / 48.0
            h_dist = hx*hx + hy*hy
            if h_dist <= 1.0 and (hy < -0.15 or abs(hx) > 0.72):
                hair_shade = 0.7 + 0.3 * (1.0 - abs(hx))
                hr = int(28 * hair_shade)
                hg = int(24 * hair_shade)
                hb = int(22 * hair_shade)
                set_pixel(x, y, hr, hg, hb)

    # Thick Dark Eyebrows (from photo)
    # Left brow: x from 162 to 192, y around 134
    for x in range(160, 194):
        by = int(134 - 4 * math.sin((x - 160) / 34.0 * math.pi))
        for dy in range(-3, 3):
            set_pixel(x, by + dy, 24, 20, 18, alpha=0.9)
    # Right brow: x from 206 to 238, y around 134
    for x in range(206, 240):
        by = int(134 - 4 * math.sin((x - 206) / 34.0 * math.pi))
        for dy in range(-3, 3):
            set_pixel(x, by + dy, 24, 20, 18, alpha=0.9)

    # Thoughtful Almond Eyes looking to the right
    # Left eye: center (178, 146)
    for ey in range(141, 152):
        for ex in range(168, 188):
            edx = (ex - 178) / 9.0
            edy = (ey - 146) / 4.5
            if edx*edx + edy*edy <= 1.0:
                set_pixel(ex, ey, 242, 244, 246) # sclera
                # Iris / pupil looking towards right
                if (ex - 181)**2 + (ey - 146)**2 <= 14:
                    set_pixel(ex, ey, 25, 20, 18)
                # Catchlight
                if ex == 182 and ey == 145:
                    set_pixel(ex, ey, 255, 255, 255)
    # Right eye: center (222, 146)
    for ey in range(141, 152):
        for ex in range(212, 232):
            edx = (ex - 222) / 9.0
            edy = (ey - 146) / 4.5
            if edx*edx + edy*edy <= 1.0:
                set_pixel(ex, ey, 242, 244, 246)
                if (ex - 225)**2 + (ey - 146)**2 <= 14:
                    set_pixel(ex, ey, 25, 20, 18)
                if ex == 226 and ey == 145:
                    set_pixel(ex, ey, 255, 255, 255)

    # Nose Bridge & Tip (from photo)
    for ny in range(138, 178):
        nx = 200 + int((ny - 138) * 0.12)
        set_pixel(nx, ny, 195, 142, 102, alpha=0.5)
        set_pixel(nx + 1, ny, 235, 185, 145, alpha=0.6) # nose highlight
    # Nose nostrils & base
    for nx in range(193, 211):
        set_pixel(nx, 175, 175, 120, 85, alpha=0.6)

    # Smiling Lips
    for lx in range(186, 220):
        t = (lx - 186) / 34.0
        ly = int(196 + 3.5 * math.sin(t * math.pi))
        set_pixel(lx, ly, 180, 75, 75, alpha=0.85)
        set_pixel(lx, ly - 1, 195, 100, 95, alpha=0.6)
        set_pixel(lx, ly + 1, 160, 60, 60, alpha=0.6)

    # Light jawline stubble / trimmed beard (from photo)
    for y in range(178, 226):
        for x in range(cx - 50, cx + 50):
            jx = (x - cx) / 48.0
            jy = (y - 195) / 28.0
            if 0.6 < jx*jx + jy*jy < 1.05 and y > 185:
                if (x + y * 3) % 2 == 0:
                    set_pixel(x, y, 40, 32, 28, alpha=0.35)

    # Pensive Hand Touching Chin (Key distinct feature of Upload 108328.jpg!)
    # Hand resting gently under jaw/chin
    for hy in range(200, 260):
        for hx in range(170, 206):
            h_dx = (hx - 188) / 16.0
            h_dy = (hy - 230) / 24.0
            if h_dx*h_dx + h_dy*h_dy <= 1.0:
                h_light = 0.95 + 0.15 * math.cos(h_dx * 2)
                hr = int(220 * h_light)
                hg = int(168 * h_light)
                hb = int(126 * h_light)
                set_pixel(hx, hy, hr, hg, hb)

    # Write PPM file
    header = f"P6\n{W} {H}\n255\n".encode('ascii')
    with open('public/images/arjun-temp.ppm', 'wb') as f:
        f.write(header)
        f.write(pixels)

generate_arjun_ppm()
print("PPM generated successfully")
