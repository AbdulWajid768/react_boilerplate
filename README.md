<div align="center">

```
╔══════════════════════════════════════════════════════════════════╗
║  ░▒▓  REACT BOILERPLATE  ▓▒░                                    ║
║  SPA chassis · Redux Toolkit · Router · Formik · Bootstrap      ║
╚══════════════════════════════════════════════════════════════════╝
```

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Redux](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![Node](https://img.shields.io/badge/Node-21-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-7c3aed?style=for-the-badge)](LICENSE)

**A batteries-included React 18 starter—auth routes, API layer, and UI primitives pre-wired.**

[Prerequisites](#-prerequisites) · [Run](#-run) · [Structure](#-structure)

</div>

---

## ◈ Signal

Skip weeks of scaffolding. This repo ships **Create React App** with a production-minded folder layout: centralized API helpers, Redux store, protected routes, Formik + Yup validation, Bootstrap 5 + Sass theming, Google OAuth hook-in, and toast notifications.

Clone it. Rename it. Ship your product.

---

## ◈ Prerequisites

| Requirement | Version |
| --- | --- |
| **Node.js** | **v21** (recommended) |
| **Yarn** | classic or berry |

---

## ◈ Run

```bash
git clone https://github.com/AbdulWajid768/react_boilerplate.git
cd react_boilerplate

yarn install
yarn start      # dev server → http://localhost:3000
yarn build      # optimized production bundle
yarn test       # Jest + Testing Library
```

---

## ◈ Structure

```text
src/
├── api/              endpoints · axios calls · helpers
├── common/           routes · constants · hooks · schemas (Yup)
├── components/       shared UI shell (Layout)
├── pages/            route-level views
├── reduxStore/       store + rootReducer (auth slice ready)
├── scss/             design tokens (_colors, _mixins, _customVariables)
├── App.js            Router + RequireAuth guard + ToastContainer
└── sample.config.js  copy → config for env-specific values
```

**Included stack**

- **Routing:** `react-router-dom` v6 with auth-gated `<Outlet />`
- **State:** `@reduxjs/toolkit` + `react-redux`
- **Forms:** `formik` + `yup`
- **HTTP:** `axios`
- **UI:** `bootstrap`, `react-bootstrap`, `react-bootstrap-icons`, `sass`
- **Auth:** `@react-oauth/google` (wire client ID in config)
- **UX:** `react-toastify`

---

## ◈ Auth flow (starter)

```text
  User hits protected route
           │
           ▼
  RequireAuth reads redux auth.isUserLoggedIn
           │
     ┌─────┴─────┐
     │ yes       │ no
     ▼           ▼
  <Outlet/>   Navigate → /login
```

Extend `reduxStore` and `pages/` as your product grows.

---

## ◈ Maintainer

**[Abdul Wajid](https://github.com/AbdulWajid768)** · Software Engineer · Lahore, PK

[![GitHub](https://img.shields.io/badge/@AbdulWajid768-181717?style=flat&logo=github)](https://github.com/AbdulWajid768)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/abdul-wajid-amin/)

---

<div align="center">

<sub>Boot the UI. Iterate at lightspeed.</sub>

</div>
