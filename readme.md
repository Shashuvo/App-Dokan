# 📱 App Dokan

A modern app discovery and management platform where users can browse, install, and manage their favorite apps — all in one place.

---

## 📖 Description

App Dokan is a React-based single-page application that simulates an app store experience. Users can explore a curated collection of apps, view detailed information including ratings and reviews, install apps to their personal list, and manage installations with sort and uninstall features. Installed apps are persisted via localStorage, so your collection is always saved across sessions.

---

## ✨ Features

- 🏠 **Home Page** — Banner with App Store & Play Store links, stats section, and top 8 featured apps
- 📱 **All Apps Page** — Browse all apps with live case-insensitive search
- 📊 **App Details Page** — Full app info, Recharts review chart, and install button with toast feedback
- 🗂️ **My Installation Page** — View, sort, and uninstall your installed apps
- 💾 **localStorage Persistence** — Installed apps saved across page refreshes
- 🔔 **Toast Notifications** — Success and warning feedback on install/uninstall
- ⚠️ **Custom Error Page** — Friendly 404 for invalid routes
- ⬆️ **Scroll To Top** — Automatically scrolls to top on route change

---

## 🛠️ Technologies

| Category | Technology |
|----------|------------|
| Framework | React 19 |
| Routing | React Router v7 |
| Styling | Tailwind CSS v4 + DaisyUI |
| Charts | Recharts |
| Icons | React Icons |
| Notifications | React Toastify |
| Data Persistence | localStorage |
| Build Tool | Vite |
| Deployment | Netlify |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/app-dokan.git

# Navigate into the project
cd app-dokan

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## 📁 Project Structure

```
src/
├── assets/
├── Components/
│   ├── AppCard/
│   │   └── AppCard.jsx
│   ├── Banner/
│   ├── Footer/
│   ├── InstallAppCard/
│   ├── Loader/
│   ├── Navbar/
│   ├── NoInstallApps/
│   ├── RatingChart/
│   ├── ScrollToTop/
│   ├── Stats/
│   └── TrendingApps/
│       └── TrendingApps.jsx
├── Pages/
│   ├── Apps/
│   ├── AppsDetails/
│   ├── Error/
│   ├── Home/
│   ├── Installation/
│   └── Root/
├── Routes/
│   └── Router.jsx
├── utilities/
│   └── AddtoDB/
│       └── AddToDB.js
└── main.jsx
```

---

## 🌐 Deployment

The app is deployed and accessible at: **[app-dokan.netlify.app](https://app-dokan.netlify.app/)**

> ⚠️ For client-side routing to work correctly after deployment, configure your hosting provider:
> - **Netlify**: Add a `_redirects` file with `/* /index.html 200`

---

## 👤 Author

**MD. Shahariat Hossen Shuvo**
- GitHub: [@Shashuvo](https://github.com/Shashuvo)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
