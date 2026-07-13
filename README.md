# 🎂 Birthday Surprise for Mehjabin Alam Jeba

A beautiful single-page birthday website with smooth card-by-card navigation.

## How It Works

Open `index.html` in your browser. The site flows through **5 screens** on one page:

1. **Welcome Letter** — Tap the envelope to open a heartfelt letter
2. **Birthday Cards** — Flip 3 interactive wish cards
3. **Password Gate** — Enter Jeba's birthday (day + month) to unlock
4. **Main Surprise** — Cake, confetti, glowing "Happy Birthday Mehjabin"
5. **Memories** — Timeline, photos, and final message

## Setup Before Sharing

### 1. Set Her Birthday Password

Edit `script.js` at the top:

```javascript
const BIRTHDAY_CONFIG = {
  day: 15,    // ← Jeba's birthday day
  month: 7,   // ← Jeba's birthday month (1-12)
};
```

### 2. Add Photos

Place her photos in `assets/images/`:

- `photo1.jpg`
- `photo2.jpg`
- `photo3.jpg`
- `photo4.jpg`

### 3. Add Background Music (Optional)

Add a soft birthday or ukulele track at:

- `assets/music/birthday.mp3`

If no file is found, a gentle generated melody plays instead.

## Open the Website

Double-click `index.html` or run a local server:

```bash
# Python
python -m http.server 8080

# Then visit http://localhost:8080
```

## Files

| File | Purpose |
|------|---------|
| `index.html` | Main single-page website |
| `style.css` | All styling & animations |
| `script.js` | Navigation, games, effects |
| `assets/images/` | Photo placeholders |
| `assets/music/` | Background music (optional) |

Made with love 🤍
