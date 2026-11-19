# 🌙 Agatha's 18th Birthday Invitation Website (Moonlit Reverie)

An interactive, responsive one-page 18th birthday (debut) invitation website inspired by **Princess Serenity under the Moonlit Lake** ([`Inspiration.jfif`](file:///d:/Agatha/Inspiration.jfif)). Built with HTML5, CSS3, and modern JavaScript.

---

## ✨ Dreamy Theme & Features

1. **Luminous Crescent Moon**:
   - A glowing celestial crescent moon arches gracefully behind the debutante's portrait frame, radiating an ethereal ice-blue and white aura just like in the Princess Serenity artwork.
2. **Reflective Body of Water & Ripples**:
   - Shimmering moonlit lake water surface under the hero section with undulating caustic ripples and starlight reflections.
   - The interactive background canvas now also renders horizontal water surface glimmers across the lower part of the screen.
3. **Dreamy Celestial Sparkles**:
   - Twinkling 4-point diamond star sparkles (`✦`), floating iridescent stardust, and aqua moonlight highlights drifting through the night sky.
4. **Enchanting Fairytale Audio**:
   - Soft, dreamy celestial fairytale waltz (piano & ambient chimes) with a floating rotating music toggle button.
5. **💌 Direct RSVP Email Delivery**:
   - Every RSVP submitted on the site is sent directly to your email: **`johainakristel@gmail.com`**.
   - Includes full details: Guest Name, Mobile Number, Attendance Status, Number of Attendees, and Birthday Message.

---

## 📧 How to Change the RSVP Email Address

You can easily change the recipient email address anytime:
1. Open [`script.js`](file:///d:/Agatha/script.js#L17).
2. At the top (line 17), simply change:
   ```javascript
   rsvpEmail: "johainakristel@gmail.com",
   ```
   to your new email address:
   ```javascript
   rsvpEmail: "your-new-email@gmail.com",
   ```
3. Save the file. That's it! All future RSVPs will automatically be sent there.

---

## 📸 How to Add Agatha's Photos & Attire Illustrations

### 1. Agatha's Photoshoot
- Her debutante photoshoot has been placed directly in:
  ```
  images/agatha-hero.jpg
  ```
- It is featured as the editorial hero backdrop:
  - **Open Sky Area:** Features "Moonlit Reverie" and "A Decade and Eight".
  - **Middle Stage:** Agatha's portrait, face, dress, candles, and vintage lantern are 100% clear with zero obstruction.
  - **Beside Her (Cosmic Clouds):** "Agatha" script name and "TURNS 18".
  - **Lower Skirt Area:** Gently blended into the deep midnight background with the venue and live countdown.
  - **Interactive Stars:** 4-point diamond sparkles dance across her starry photoshoot sky in real time!

### 2. Attire Illustrations
- Save your attire PNG illustrations directly to:
  - `images/attire-ladies.png` (for Ladies gown illustration)
  - `images/attire-gentlemen.png` (for Gentlemen suit illustration)
  - `images/attire-guide.png` (optional formal theme guide illustration)

---

## 📝 How to Update the 18 Names

When you receive the list of names:
1. Open [`script.js`](file:///d:/Agatha/script.js#L23-L44).
2. Replace `"Name Name"` in `DEBUT_CONFIG.entourage` with the actual guest names.
3. The site will automatically format them as `01. Name`, `02. Name`, etc.

---

## 🚀 Free 1-Minute Netlify Deployment

1. Visit [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the whole `d:\Agatha` folder into the browser window.
3. You get an instant live shareable link to send to family and friends!
