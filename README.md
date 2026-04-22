```markdown
# Rob McKinney | Senior Web Developer Portfolio

A professional, modular portfolio built with **React**, **Tailwind CSS**, and **Vite**. This project showcases 15+ years of experience in web development, featuring a high-performance, dark-mode architecture with a focus on clean code and scalable data management.

## 🚀 Architecture Highlights

* **Modular Component Design:** Logic and presentation are strictly separated. 
* **Data-Driven UI:** Section content (Experience, Skills, Contact) is externalized into a dedicated `src/data/` directory for easy updates and future CMS integration.
* **Tactical UX:** Implements professional dark-mode aesthetics, custom cursor behaviors, and responsive navigation.
* **Performance First:** Built using Vite for near-instant HMR (Hot Module Replacement) and optimized production builds.

## 🛠️ Tech Stack

* **Framework:** React 18
* **Bundler:** Vite
* **Styling:** Tailwind CSS (v3+)
* **Icons:** React Icons (Font Awesome, Material Design)

## 📁 Project Structure

```text
portfolio/
├── public/              # Static assets (Resume PDF, Favicons)
├── src/
│   ├── components/      # Functional React components
│   ├── data/            # Centralized JS data objects (Experience, Skills, etc.)
│   ├── assets/          # Images and global styles
│   └── App.jsx          # Main layout engine
├── .gitignore           # Root-level ignore (configured for node_modules)
└── package.json         # Project manifest & dependencies
```

## 🛠️ Local Development

**Clone the repository:**
```bash
git clone [https://github.com/ramckinney86/portfolio.git](https://github.com/ramckinney86/portfolio.git)
```
Install dependencies:

```bash
npm install
```

Start the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```
## 📄 License

This project is open-source and available under the [MIT License](LICENSE).