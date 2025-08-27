# 🔥 NEX-TURF 🔥

> **A lightning-fast, no-bullshit static web server that just fucking works.**

[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://javascript.info/)

---

## 🚀 What the hell is this?

**NEX-TURF** is a dead-simple Express.js server that serves your static files from the `/public` directory with zero configuration bullshit. Just run it and go.

### ✨ Features that don't suck:

- 🚀 **Blazing Fast** - Serves static files faster than your ex left you
- 🛠️ **Zero Config** - No webpack, no build steps, no headaches
- 📱 **Mobile Ready** - Responsive out of the box
- 🎨 **Clean AF** - Minimal, modern CSS that actually looks good
- 🔧 **Developer Friendly** - Hot reload? Who needs it when it's this simple
- 🌐 **Cross Platform** - Works on Windows, Mac, Linux, and probably your smart fridge

---

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js (obviously)
- A functioning brain (optional)

### Installation & Run

```bash
# Clone this bad boy
git clone <your-repo-url>
cd nex-turf

# Install dependencies (just Express, we're not animals)
npm install

# Fire it up! 🔥
npm start
```

**Boom!** Your server is now running at `http://localhost:3000`

---

## 📁 Project Structure

```
nex-turf/
├── 📂 public/              # Your static files live here
│   ├── 🏠 index.html       # Main HTML file
│   └── 🎨 styles.css       # Clean CSS styling
├── 🚀 server.js            # Express server magic
├── 📦 package.json         # Dependencies and scripts
├── 🚫 .gitignore          # Keeps the garbage out
└── 📖 README.md           # You are here
```

---

## 🛠️ Available Scripts

| Command | What it does |
|---------|-------------|
| `npm start` | Starts the server in production mode |
| `npm run dev` | Starts the server (same as start, we keep it simple) |
| `npm test` | Reminds you to write tests (coming soon™️) |

---

## 🎯 Usage

### Adding Your Own Files

Just drop your HTML, CSS, JS, images, or whatever the fuck you want into the `public/` directory:

```
public/
├── index.html          # Homepage
├── about.html          # About page
├── styles.css          # Global styles
├── app.js             # Your JavaScript
├── images/            # Your sick images
│   ├── logo.png
│   └── hero.jpg
└── assets/            # Other assets
    ├── fonts/
    └── icons/
```

### Custom Port

Want to run on a different port? Easy:

```bash
PORT=8080 npm start
```

Or set the `PORT` environment variable however you want.

---

## 🎨 Styling

The included CSS is clean, modern, and doesn't look like it was designed in 1995:

- **Responsive Design** - Works on all screen sizes
- **Modern Typography** - Easy on the eyes
- **Flexbox Layout** - No float hacks here
- **Clean Variables** - Easy to customize colors and spacing

Want to customize? Edit `public/styles.css` and make it your own.

---

## 🚀 Deployment

### Local Development
```bash
npm start
```

### Production Deployment

**Heroku:**
```bash
heroku create your-app-name
git push heroku main
```

**Vercel:**
```bash
npm i -g vercel
vercel
```

**Railway:**
```bash
railway deploy
```

**DigitalOcean/AWS/Whatever:**
- Upload your files
- Run `npm install`
- Run `npm start`
- Point your domain to port 3000
- Profit 💰

---

## 🤝 Contributing

Found a bug? Want to add something cool? 

1. Fork this repo
2. Create a feature branch: `git checkout -b sick-new-feature`
3. Commit your changes: `git commit -am 'Add some sick feature'`
4. Push to the branch: `git push origin sick-new-feature`
5. Submit a pull request

---

## 📝 License

This project is licensed under the **"Do Whatever The Fuck You Want"** license (also known as ISC).

Use it, abuse it, sell it, whatever. Just don't blame me if it breaks something.

---

## ❤️ Support

If this saved you time or made your life easier, consider:

- ⭐ Starring this repo
- 🍕 Buying me a pizza
- 🐦 Telling your friends about it
- 💻 Contributing some code

---

## 🔥 Made with Love and Lots of Coffee

Built by developers, for developers who are tired of overcomplicated bullshit.

---

<div align="center">
  <h3>🚀 Ready to launch? Let's fucking go! 🚀</h3>
  
  ```bash
  npm start
  ```
</div>
