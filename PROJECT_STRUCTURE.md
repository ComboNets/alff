# Alff - Project Structure

## 📁 Directory Organization

```
hotel-alff/
├── index.html                      # Landing page (choose Hotel or Churrasqueria)
├── shared/                         # Shared resources
│   ├── css/
│   │   └── landing.css            # Landing page styles
│   ├── js/                         # Shared JavaScript utilities (future)
│   └── images/                     # Shared images (logos, etc.)
│
├── hotel/                          # Hotel website
│   ├── index.html
│   ├── hotel2.jpg, hotel3.jpg, hotel4.jpg
│   └── assets/
│       ├── css/
│       │   └── styles.css         # Hotel-specific styles
│       └── js/
│           ├── config.js          # Hotel content configuration
│           ├── navigation.js      # Navigation functionality
│           ├── slider.js          # Hero slider
│           ├── content.js         # Content rendering
│           └── main.js            # Utilities & interactions
│
├── churrasqueria/                  # Churrasqueria website
│   ├── index.html
│   └── assets/
│       ├── css/
│       │   └── styles.css         # Churrasqueria-specific styles
│       ├── js/
│       │   ├── config.js          # Churrasqueria content
│       │   ├── navigation.js      # Same as hotel
│       │   ├── slider.js          # Same as hotel
│       │   ├── content-churr.js   # Churrasqueria content rendering
│       │   └── main.js            # Same as hotel
│       └── images/                # Churrasqueria images
│
├── README.md                       # Main project README
└── PROJECT_STRUCTURE.md           # This file
```

## 🎯 Key Benefits of This Structure

### 1. **Separation of Concerns**
- Hotel and Churrasqueria are completely independent
- Changes to one don't affect the other
- Easy to maintain and update separately

### 2. **Shared Resources**
- Common CSS/JS utilities can be placed in `shared/`
- Reduces code duplication
- Consistent branding elements

### 3. **Scalability**
- Easy to add new business units (e.g., catering service)
- Clear folder hierarchy
- Simple to onboard new developers

### 4. **GitHub Pages Compatible**
- Root `index.html` as landing page
- `/hotel/` and `/churrasqueria/` as subdirectories
- Works perfectly with GitHub Pages routing

## 🚀 URLs Structure

- **Landing**: `https://combo4.github.io/hotel-alff/`
- **Hotel**: `https://combo4.github.io/hotel-alff/hotel/`
- **Churrasqueria**: `https://combo4.github.io/hotel-alff/churrasqueria/`

## 📝 How to Update Content

### Hotel Content
Edit: `hotel/assets/js/config.js`
- Navigation menu
- Hero slides
- Room information
- Amenities
- Contact details

### Churrasqueria Content
Edit: `churrasqueria/assets/js/config.js`
- Navigation menu
- Hero slides
- Menu items
- Drinks
- Hours & schedule
- Contact details

### Styling
- **Hotel**: `hotel/assets/css/styles.css`
- **Churrasqueria**: `churrasqueria/assets/css/styles.css`
- **Landing**: `shared/css/landing.css`

## 🔄 Adding New Features

### To Hotel Only
1. Add files to `hotel/assets/`
2. Update `hotel/assets/js/config.js`
3. Modify `hotel/index.html` if needed

### To Churrasqueria Only
1. Add files to `churrasqueria/assets/`
2. Update `churrasqueria/assets/js/config.js`
3. Modify `churrasqueria/index.html` if needed

### To Both (Shared Feature)
1. Create in `shared/` folder
2. Import in both websites
3. Ensures consistency across both sites

## 🎨 Design Theme

Both sites share the rustic wood theme:
- **Primary Brown**: `#8B4513`
- **Dark Brown**: `#654321`
- **Gold Accent**: `#D4AF37`
- **Wood Background**: From original Alff site

## 📦 Next Steps

1. **Copy JavaScript files**: Copy `navigation.js`, `slider.js`, and `main.js` from hotel to churrasqueria
2. **Create churrasqueria CSS**: Adapt hotel styles for restaurant theme
3. **Create content-churr.js**: Specific content renderer for menu/drinks sections
4. **Add real images**: Replace placeholders with actual photos
5. **Test thoroughly**: Verify all links work correctly
6. **Deploy**: Push to GitHub and test on GitHub Pages

## 🔧 Development Workflow

```bash
# Make changes to hotel
cd hotel/
# Edit files...
git add .
git commit -m "Update hotel: [description]"

# Make changes to churrasqueria
cd ../churrasqueria/
# Edit files...
git add .
git commit -m "Update churrasqueria: [description]"

# Push all changes
git push
```

## 📚 Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling, Grid, Flexbox
- **Vanilla JavaScript**: No frameworks
- **Google Fonts**: Playfair Display & Poppins
- **GitHub Pages**: Free hosting

---

**Created**: January 2026  
**Maintained by**: Combo4
