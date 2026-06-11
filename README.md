<h1 align="center">🪛 Hello World 🪛</h1>

<h2 align="center">A minimal TypeScript GNOME 50 app template</h2>

<p align="center">
    <img alt="hero" width="450" src="https://emoji-route.deno.dev/svg/🪛" />
</p>

> [!NOTE]
>
> This is a minimal GNOME 50 application template using TypeScript, GJS, GTK 4, and libadwaita.  
> Fast-iterating, easy-to-read, and developer-friendly, it helps you bootstrap new GNOME 50 projects with modern tooling and technology.

## 🌟 Features

> **Hello World** features intro:

- **TypeScript-first** – Source code written in TypeScript, providing type safety and modern language features.
- **GNOME 50 Ready** – Integrates with GJS, GTK 4, libadwaita and follows up-to-date GNOME 50 application architecture.
- **Bundled UI** – Uses GResource for UI templates and assets.
- **Hot-reloading Dev Setup** – Rapid development with auto-rebuild and restart on file changes.
- **Easy Distribution** – Meson integration for simple install, bundle, and packaging.

## 💻 Installation

> You can add **Hello World** by preparing your system and running:

###### Prerequisites

- [Bun](https://bun.sh)
- GJS (GNOME JavaScript runtime)
- Meson and Ninja
- GTK 4 and libadwaita development packages

On Fedora:

```bash
sudo dnf install gjs gtk4 libadwaita meson ninja-build
```

###### Setup

```bash
bun install
```

## 🏗️ Development

```bash
bun run dev
```

_`dev` compiles TypeScript, rebuilds GResource bundles, launches the app, and restarts it whenever `src/\*\*/_.ts`or`src/\*_/_.ui` files change.\*

## 🚀 Build and run (manual / no watch)

```bash
bun run run
```

## 📦 Install locally

```bash
bun run setup
bun run install-app
```

This will install to `~/.local`. Launch with `org.gnome.HelloWorld` or from the application menu.

## 🗂️ Project layout

- `src/` — TypeScript sources, UI templates, and GResource definitions
- `dist/` — compiled JavaScript output (via `tsc`)
- `build/` — development GResource bundles (generated)
- `data/` — desktop entry, metadata, icons, GSettings schemas
- `scripts/` — development launcher and resource build helpers

## 🛠️ How dev mode works

1. `tsc` compiles `src/*.ts` to `dist/*.js`
2. `glib-compile-resources` bundles JS and UI into `build/*.gresource`
3. `scripts/launcher.mjs` registers the bundles and imports `main.js` from the GResource
4. On file change, steps 1–3 rerun and the app restarts

Production installs use Meson, which compiles the same GResource XML files and installs the `org.gnome.HelloWorld` launcher.

## 📷 Screenshots

> Here's a working and expected screenshot of Hello World

| Landing Page                              |
| ----------------------------------------- |
| ![Demo](https://github.com/ArnavK-09.png) |

---

## 💻 Contributing

> [!TIP]  
> We welcome contributions to improve **Hello World**! If you have suggestions, bug fixes, or new feature ideas, follow these steps:

1. **Fork the Repository**  
   Click the **Fork** button at the top-right of the repo page.

2. **Clone Your Fork**  
   Clone the repo locally:

   ```bash
   git clone https://github.com/ArnavK-09/gnome-typescript-app-template.git
   ```

3. **Create a Branch**  
   Create a new branch for your changes:

   ```bash
   git checkout -b your-feature-branch
   ```

4. **Make Changes**  
   Implement your changes (bug fixes, features, etc.).

5. **Commit and Push**  
   Commit your changes and push the branch:

   ```bash
   git commit -m "feat(scope): description"
   git push origin your-feature-branch
   ```

6. **Open a Pull Request**  
   Open a PR with a detailed description of your changes.

7. **Collaborate and Merge**  
   The maintainers will review your PR, request changes if needed, and merge it once approved.

## 🙋‍♂️ Issues

Found a bug or need help? Please create an issue on the [GitHub repository](https://github.com/ArnavK-09/gnome-typescript-app-template/issues) with a detailed description.

## 👤 Author

<table>
  <tbody>
    <tr>
        <td align="center" valign="top" width="14.28%"><a href="https://github.com/ArnavK-09"><img src="https://github.com/ArnavK-09.png?s=100" width="130px;" alt="Arnav K"/></a><br /><a href="https://github.com/ArnavK-09"><h4><b>Arnav K</b></h3></a></td>
    </tr>
  </tbody>
</table>

---

<h2 align="center">📄 License</h2>

<p align="center">
<strong>Hello World</strong> is licensed under the <code>Unlicense</code> License. See the <a href="https://github.com/ArnavK-09/gnome-typescript-app-template/blob/main/LICENSE">LICENSE</a> file for more details.
</p>

---

<p align="center">
    <strong>🌟 If you find this project helpful, please give it a star on GitHub! 🌟</strong>
</p>
