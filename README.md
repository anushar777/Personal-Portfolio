# 🎮 Pixel Portfolio Website

A retro-inspired personal portfolio website combining nostalgic 8-bit aesthetics with modern web development. Built by a Computer Engineering student at Rutgers University.

## 🖥️ About This Project

This portfolio website showcases my projects, skills, and journey as a developer through a pixel art lens. I chose a retro gaming theme because it represents the roots of computing while demonstrating modern web development capabilities.

**Why pixel art?** It shows attention to detail, creativity within constraints, and bridges the gap between computing's history and its future.

## 🚀 Live Demo

[View Portfolio](your-portfolio-url.com)

## ✨ Features

- **Pixel Art Design**: Custom 8-bit styled components and animations
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile
- **Interactive Elements**: Smooth hover effects and micro-animations
- **Project Showcase**: Detailed cards displaying my development work
- **Skills Visualization**: Progress bars and icons in pixel style
- **Contact Form**: Functional form with retro styling
- **Resume Download**: Direct access to my latest resume

## 🛠️ Tech Stack

### Frontend
- **React** - Component-based UI library
- **JavaScript (ES6+)** - Modern JavaScript features
- **CSS3** - Custom pixel art styling and animations
- **HTML5** - Semantic markup

### Backend
- **Node.js** - Server runtime
- **Express.js** - Web framework
- **Nodemailer** - Contact form email handling

### Tools
- **Create React App** - Project setup and build tools
- **Git** - Version control
- **Netlify/Vercel** - Frontend hosting
- **Heroku** - Backend hosting

## 🚦 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/pixel-portfolio.git
   cd pixel-portfolio
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

4. **Set up environment variables**
   
   Create `.env` in the backend folder:
   ```env
   PORT=5000
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   FRONTEND_URL=http://localhost:3000
   ```

5. **Start the development servers**
   
   Backend:
   ```bash
   cd backend
   npm run dev
   ```
   
   Frontend (new terminal):
   ```bash
   cd frontend
   npm start
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
pixel-portfolio/
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   └── resume.pdf
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header/
│   │   │   ├── Hero/
│   │   │   ├── About/
│   │   │   ├── Projects/
│   │   │   ├── Skills/
│   │   │   ├── Contact/
│   │   │   └── Footer/
│   │   ├── styles/
│   │   │   ├── globals.css
│   │   │   └── pixel.css
│   │   ├── data/
│   │   │   ├── projects.js
│   │   │   └── skills.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── backend/
│   ├── routes/
│   │   └── contact.js
│   ├── server.js
│   └── package.json
└── README.md
```

## 🎨 Pixel Design Elements

### Color Scheme
- **Primary Green**: #00ff41 (classic terminal green)
- **Accent Orange**: #ff6b35 (retro gaming orange)
- **Dark Background**: #0d1117 (modern dark theme)
- **Light Text**: #f0f6fc (high contrast)

### Typography
- **Headers**: "Press Start 2P" font for authentic pixel feel
- **Body Text**: Clean sans-serif for readability
- **Monospace**: Used for code snippets and technical details

### Visual Elements
- 8-bit style buttons with hover animations
- Pixelated borders and containers
- Retro-inspired progress bars for skills
- Subtle scanline effects for authentic CRT monitor feel

## 🚀 Deployment

### Frontend (Netlify)
1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify
3. Configure environment variables in Netlify dashboard

### Backend (Heroku)
1. Create Heroku app: `heroku create your-app-name`
2. Set environment variables: `heroku config:set EMAIL_USER=your-email`
3. Deploy: `git push heroku main`

## 📝 Content Customization

### Personal Information
- `src/data/personalInfo.js` - Basic information
- `src/data/projects.js` -project portfolio
- `src/data/skills.js` - Technical skills and proficiency levels
- `public/resume.pdf` -resume

### Projects Section
Each project should include:
- Project name and description
- Technologies used
- Live demo link (if available)
- GitHub repository link
- Screenshot or demo image

### Skills Section
Organize skills by category:
- Frontend Technologies
- Backend Technologies
- Tools & Frameworks
- Programming Languages

## 🎯 Portfolio Sections

### Hero Section
- Animated pixel character avatar
- Brief introduction and current status
- Call-to-action buttons

### About Me
- Personal background and interests
- Why I chose Computer Engineering
- Connection to pixel art and retro gaming

### Projects
- Featured development projects
- Technology stack for each project
- Links to live demos and source code

### Skills
- Visual representation of technical abilities
- Progress indicators in pixel style
- Categories: Frontend, Backend, Tools

### Experience
- Academic background at Rutgers University
- Internships and work experience
- Relevant coursework and achievements

### Contact
- Functional contact form
- Social media links
- Professional email

## 🔧 Development Scripts

### Frontend
- `npm start` - Run development server
- `npm run build` - Build for production
- `npm test` - Run tests

### Backend
- `npm start` - Run production server
- `npm run dev` - Run with nodemon for development

## 📱 Responsive Design

The site is optimized for:
- **Desktop**: Full pixel art experience with animations
- **Tablet**: Adapted layout maintaining pixel aesthetic
- **Mobile**: Streamlined design with touch-friendly interactions

## 🤝 About Me

**Computer Engineering Student | Rutgers University**

I'm passionate about AI/ML as well as creating immersive experiences to make the hardest of tasks simpler. 

**What drives me:**
- Problem-solving through code
- Attention to visual and technical detail
- Bridging past and present in technology
- Creating memorable user experiences

## 📞 Contact

- **Email**: anusha.ratra@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/anusha-ratra-455865305/
- **GitHub**: https://github.com/anushar777
- **Portfolio**: (https://portfolio.com)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---