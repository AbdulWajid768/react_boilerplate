<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f0c29,45:302b63,100:24243e&height=200&section=header&text=React%20Boilerplate&fontSize=40&fontColor=61DAFB&animation=twinkling&desc=Redux+%7C+Router+%7C+Formik+%7C+Bootstrap+5&descSize=16&descAlignY=72&descAlign=62"/>

<a href="https://git.io/typing-svg">
  <img src="https://readme-typing-svg.demolab.com?font=Orbitron&weight=700&size=17&duration=2700&pause=850&color=61DAFB&center=true&vCenter=true&multiline=true&repeat=true&width=650&height=90&lines=Clone+%E2%86%92+configure+%E2%86%92+ship;Protected+routes+%2B+Redux+Toolkit;Axios+API+layer+pre-wired;Google+OAuth+hook+ready" alt="Typing animation"/>
</a>

<br/>

### ⟡ Live telemetry ⟡

[![GitHub stars](https://img.shields.io/github/stars/AbdulWajid768/react_boilerplate?style=for-the-badge&logo=starship&logoColor=white&labelColor=0f172a&color=61DAFB)](https://github.com/AbdulWajid768/react_boilerplate/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/AbdulWajid768/react_boilerplate?style=for-the-badge&logo=git&logoColor=white&labelColor=0f172a&color=764ABC)](https://github.com/AbdulWajid768/react_boilerplate/network/members)
[![GitHub watchers](https://img.shields.io/github/watchers/AbdulWajid768/react_boilerplate?style=for-the-badge&logo=eye&logoColor=white&labelColor=0f172a&color=00d4aa)](https://github.com/AbdulWajid768/react_boilerplate/watchers)
[![Open issues](https://img.shields.io/github/issues/AbdulWajid768/react_boilerplate?style=for-the-badge&logo=githubissues&logoColor=white&labelColor=0f172a&color=f472b6)](https://github.com/AbdulWajid768/react_boilerplate/issues)

[![Last commit](https://img.shields.io/github/last-commit/AbdulWajid768/react_boilerplate?style=for-the-badge&logo=git&logoColor=white&labelColor=0f172a&color=61DAFB)](https://github.com/AbdulWajid768/react_boilerplate/commits/main)
[![Commit activity](https://img.shields.io/github/commit-activity/m/AbdulWajid768/react_boilerplate?style=for-the-badge&logo=pulse&logoColor=white&labelColor=0f172a&color=764ABC)](https://github.com/AbdulWajid768/react_boilerplate/graphs/commit-activity)
[![Repo size](https://img.shields.io/github/repo-size/AbdulWajid768/react_boilerplate?style=for-the-badge&logo=database&logoColor=white&labelColor=0f172a&color=00d4aa)](https://github.com/AbdulWajid768/react_boilerplate)

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=0f172a)](https://react.dev/)
[![Redux](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![Node](https://img.shields.io/badge/Node-21-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

<br/>

<img src="https://github-readme-stats.vercel.app/api/pin/?username=AbdulWajid768&repo=react_boilerplate&theme=react&hide_border=true&bg_color=0d1117&title_color=61DAFB&icon_color=764ABC&text_color=c9d1d9&border_radius=12" width="48%"/>
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=AbdulWajid768&theme=react&hide_border=true&bg_color=0d1117&title_color=61DAFB&text_color=c9d1d9&layout=compact&border_radius=12" width="48%"/>

<br/><br/>

[🧬 Prerequisites](#-prerequisites) · [▶ Run](#-run) · [🗂 Structure](#-structure)

<img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=10,11,12&height=2&section=footer" width="100%"/>

</div>

---

## ◈ Transmission

Skip the **scaffolding tax**. This is **Create React App 18** with a product-grade layout: Axios API layer, Redux store, auth-gated routes, Formik + Yup, Bootstrap + Sass tokens, Google OAuth slot, and toast UX—ready for your domain logic on day one.

```text
  Browser
     │
     ▼
  React Router v6 ──► RequireAuth ──► Layout / Pages
     │                      │
     ▼                      ▼
  Redux Toolkit          api/endpoints.js
     │                      │
     └────────── Axios ─────┘
```

---

## ◈ Prerequisites

| Tool | Version |
| --- | --- |
| **Node.js** | **v21** |
| **Yarn** | 1.x or 3.x |

---

## ◈ Run

```bash
git clone https://github.com/AbdulWajid768/react_boilerplate.git
cd react_boilerplate

yarn install
yarn start      # http://localhost:3000
yarn build
yarn test
```

---

## ◈ Structure

```text
src/
├── api/              endpoints · calls · helpers
├── common/           routes · hooks · Yup schemas
├── components/       Layout shell
├── pages/            route views
├── reduxStore/       store + rootReducer
├── scss/             _colors · _mixins · variables
├── App.js            Router + RequireAuth + toasts
└── sample.config.js  → copy for env config
```

**Bundled:** `react-router-dom` · `@reduxjs/toolkit` · `formik` + `yup` · `axios` · `bootstrap` / `react-bootstrap` · `sass` · `@react-oauth/google` · `react-toastify`

---

## ◈ Auth gate

```mermaid
%%{init: {'theme':'dark'}}%%
flowchart LR
    A[Route request] --> B{isUserLoggedIn?}
    B -->|yes| C[Render Outlet]
    B -->|no| D[Navigate /login]
```

---

<div align="center">

<a href="https://star-history.com/#AbdulWajid768/react_boilerplate&Date">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=AbdulWajid768/react_boilerplate&type=Date&theme=dark"/>
    <img alt="Star history" src="https://api.star-history.com/svg?repos=AbdulWajid768/react_boilerplate&type=Date"/>
  </picture>
</a>

<br/>

<img src="https://github-readme-activity-graph.vercel.app/graph?username=AbdulWajid768&theme=react&hide_border=true&bg_color=0d1117&color=61DAFB&line=764ABC&point=00d4aa&area=true&height=260" alt="Activity graph"/>

<br/><br/>

**[Abdul Wajid](https://github.com/AbdulWajid768)** · Software Engineer · Lahore, PK

[![GitHub](https://img.shields.io/badge/@AbdulWajid768-181717?style=flat&logo=github)](https://github.com/AbdulWajid768)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/abdul-wajid-amin/)

<img src="https://komarev.com/ghpvc/?username=AbdulWajid768-react_boilerplate&label=NEURAL%20VIEWS&color=61DAFB&style=for-the-badge" alt="views"/>

<sub>Boot the UI · Iterate at lightspeed.</sub>

</div>
