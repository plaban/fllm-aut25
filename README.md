# This is the offciial webpage of "Foundation of Large Leanguage Models - AI60213" course webpage offered by Deapartment of AI, IIT Kharagpur.

# ------------

# Academic Course Website Template

A modern, responsive course website template built for academic institutions. Perfect for university courses, online classes, and educational programs.

![Course Website Preview](images/preview.png)

## 🌟 Features

- **📱 Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- **🎨 Modern Design** - Clean, professional academic styling
- **📊 Dynamic Announcements** - JSON-based announcement system
- **📅 Interactive Schedule** - Weekly course schedule with resources
- **📚 Resource Management** - Books, papers, and materials showcase
- **📝 Assignment Portal** - Complete assignment and project management
- **🔄 Easy Maintenance** - Simple to update and customize
- **⚡ Fast Loading** - Optimized performance with GitHub Pages

## 🚀 Live Demo

**[View Live Demo](https://yourusername.github.io/course-website-template/)**

## 📂 What's Included

```
course-website-template/
├── 📁 css/
│   └── style.css                 # Main stylesheet
├── 📁 images/
│   ├── 📁 logo/                  # Institution logo
│   ├── 📁 instructor/            # Instructor photos
│   └── 📁 ta/                    # TA/Staff photos
├── 📁 assignments/
│   ├── assignment1.pdf           # Assignment PDFs
│   ├── vlog-guidelines.pdf       # Video assignment guidelines
│   └── project-guidelines.pdf    # Project instructions
├── 📁 data/
│   └── announcements.json        # Dynamic announcements
├── 🌐 index.html                 # Home page
├── 🌐 schedule.html              # Course schedule
├── 🌐 resources.html             # Learning resources
├── 🌐 assignments.html           # Assignments & projects
└── 📖 README.md                  # This file
```

## 🎯 Pages Overview

### 🏠 **Home Page (`index.html`)**
- Course introduction and description
- Instructor and staff information with contact details
- Course objectives and prerequisites
- Dynamic announcements system
- Grading policy breakdown
- General course information

### 📅 **Schedule Page (`schedule.html`)**
- Weekly course schedule in table format
- Date, Topic, Resources, and Extra Reading columns
- Two classes per week structure
- Downloadable materials and resources
- Assignment due dates and exam notifications

### 📚 **Resources Page (`resources.html`)**
- Recommended textbooks with covers and ratings
- Essential research papers
- Online learning resources
- Development tools and platforms
- Categorized resource sections

### 📝 **Assignments Page (`assignments.html`)**
- Programming assignments with PDFs and submission links
- Video log (Vlog) requirements and guidelines
- Final project specifications and timeline
- Progress tracking and deliverables
- Quick navigation between sections

## 🛠️ Quick Setup

### **1. Fork/Download Template**
```bash
# Clone this repository
git clone https://github.com/yourusername/course-website-template.git
cd course-website-template
```

### **2. Customize Course Information**
Edit the following files with your course details:

**📝 `index.html`** - Update:
- Course title and description
- Instructor information and photos
- Course objectives and prerequisites
- Grading policy percentages

**📝 `schedule.html`** - Update:
- Weekly topics and dates
- Assignment due dates
- Resource links and materials

**📝 `resources.html`** - Update:
- Recommended books
- Research papers
- Online resources

**📝 `assignments.html`** - Update:
- Assignment descriptions and PDFs
- Submission links
- Project requirements

### **3. Upload Your Content**

**🖼️ Replace Images:**
```
images/logo/iitkgp.png           → your-institution-logo.png
images/instructor/Pkb2.jpg       → instructor-photo.jpg
images/ta/staff1.jpg             → ta-photos.jpg
```

**📄 Upload Assignment Files:**
```
assignments/assignment1.pdf      → your-assignment-files.pdf
assignments/vlog-guidelines.pdf  → your-guidelines.pdf
```

**📢 Update Announcements:**
Edit `data/announcements.json` with your announcements:
```json
{
  "id": 1,
  "date": "2025-01-20",
  "title": "Your Announcement Title",
  "content": "Your announcement content here",
  "type": "important",
  "pinned": true
}
```

### **4. Deploy to GitHub Pages**
1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings → Pages
4. Select "Deploy from a branch" → "main"
5. Your website will be live at `https://yourusername.github.io/repository-name/`

## 🎨 Customization Guide

### **🎨 Colors & Styling**
The website uses a consistent color scheme defined in `css/style.css`. Key color variables:

```css
/* Primary Colors */
--primary-blue: #3498db
--primary-dark: #2c3e50
--primary-green: #27ae60
--primary-red: #e74c3c

/* Background Gradients */
--hero-gradient: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)
--header-gradient: linear-gradient(135deg, #2c3e50 0%, #34495e 100%)
```

### **📝 Content Updates**

**Change Course Information:**
1. Update course title in all HTML files
2. Modify course description in `index.html`
3. Update contact information and office hours

**Add/Remove Navigation Pages:**
1. Create new HTML file
2. Add navigation link in all existing pages
3. Update footer links
4. Follow existing page structure

**Modify Grading Policy:**
Edit the grading breakdown in `index.html`:
```html
<div class="grade-percentage">30%</div> <!-- Change percentage -->
```

### **📢 Managing Announcements**

The announcement system uses `data/announcements.json`. To add announcements:

```json
{
  "id": 2,
  "date": "2025-01-22",
  "title": "Assignment 1 Released",
  "content": "Assignment 1 is now available for download.",
  "type": "important",    // "important" or "info"
  "pinned": true         // true for pinned announcements
}
```

**Announcement Types:**
- `"type": "important"` - Red accent, high priority
- `"type": "info"` - Blue accent, general information
- `"pinned": true` - Stays at top of announcements

## 📱 Responsive Design

The template is fully responsive with breakpoints:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px  
- **Mobile**: Below 768px

Key responsive features:
- Collapsible navigation
- Stacked content layouts
- Touch-friendly buttons
- Optimized text sizes

## 🔧 Technical Details

### **Technologies Used**
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox/grid
- **JavaScript** - Dynamic announcement loading
- **Font Awesome** - Icons and visual elements
- **Google Fonts** - Typography (Segoe UI fallback)

### **Browser Support**
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### **Performance Features**
- Optimized images
- Minimal JavaScript
- Efficient CSS
- Fast loading times

## 📊 Analytics & SEO

### **SEO Optimized**
- Semantic HTML structure
- Meta descriptions and titles
- Proper heading hierarchy
- Alt text for images

### **Analytics Ready**
Add Google Analytics by inserting tracking code before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## 🤝 Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch
3. Make your improvements
4. Submit a pull request

### **Ideas for Contributions**
- Additional page templates
- New color schemes
- Accessibility improvements
- Documentation enhancements
- Bug fixes and optimizations

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💡 Use Cases

Perfect for:
- **University Courses** - Computer Science, Engineering, Mathematics
- **Online Classes** - MOOCs, Bootcamps, Training Programs
- **Workshop Series** - Technical workshops, Seminars
- **Academic Conferences** - Course tracks, Tutorial sessions

## 🆘 Support & Documentation

### **Common Issues**

**Images not loading?**
- Check file paths are correct
- Ensure images are uploaded to GitHub
- Verify image file names match HTML references

**Announcements not appearing?**
- Check JSON syntax in `announcements.json`
- Ensure proper date format: "YYYY-MM-DD"
- Verify file is uploaded to `data/` folder

**Styling issues?**
- Clear browser cache
- Check CSS file path in HTML
- Ensure `style.css` is uploaded

### **Getting Help**
- 📧 Email: [your-email@domain.com](mailto:your-email@domain.com)
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/course-website-template/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/yourusername/course-website-template/discussions)

## 🙏 Acknowledgments

- Design inspiration from modern academic institutions
- Icons provided by [Font Awesome](https://fontawesome.com/)
- Template built for educational use

## 📈 Roadmap

**Upcoming Features:**
- [ ] Calendar integration
- [ ] Student submission portal
- [ ] Grade calculator
- [ ] Dark mode toggle
- [ ] Multi-language support

---

⭐ **If this template helped you, please give it a star!** ⭐

**Made with ❤️ for education**