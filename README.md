# Next.js Portfolio Website

A modern, mobile-first, and highly optimized portfolio website built with Next.js 15, React 19, TypeScript, and Tailwind CSS. Designed for performance, accessibility, and developer experience.

---

## 🚀 Features

- Fully responsive, mobile-first design
- Modern UI/UX with accessible components
- Custom calendar, card, and section components
- SEO and performance best practices
- Linting and formatting with ESLint + Prettier
- TypeScript for type safety
- Easy theming with Tailwind CSS
- Modular, scalable code structure

## 🛠️ Tech Stack

- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Zod](https://zod.dev/)
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)

## 📦 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/maximaker/ionutmaximcom.git
cd ionutmaximcom
```

### 2. Install dependencies

```bash
npm install
# or
pnpm install
```

### 3. Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

## 🧰 Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm start` – Start production server
- `npm run lint` – Run ESLint
- `npm run format` – Format code with Prettier

## 🧹 Linting & Formatting

- ESLint and Prettier are fully integrated.
- Run `npm run lint` to check code quality.
- Run `npm run format` to auto-format the codebase.
- Linting ignores build and dependency directories by default.

## 🤝 Contributing

1. Fork the repo
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## 📄 License

[MIT](LICENSE)

## 🗂️ Project Structure

```
.
├── app/                # Next.js app directory (pages, layouts, sections)
│   ├── components/     # Page-specific and shared components
│   └── about/          # About page and related components
├── components/         # Global UI components (buttons, cards, etc.)
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and libraries
├── public/             # Static assets (images, favicon, etc.)
├── styles/             # Global and component styles
├── .husky/             # Husky git hooks
├── .next/              # Next.js build output (auto-generated)
├── ...                 # Config and root files
```

- **`app/`**: Main application logic, layouts, and page sections
- **`components/`**: Reusable UI components
- **`hooks/`**: Custom hooks for state and effects
- **`lib/`**: Utility functions
- **`public/`**: Static files
- **`styles/`**: Tailwind and global CSS

## 🧑‍💻 Code Style & Workflow

- **TypeScript**: All code is strongly typed
- **ESLint & Prettier**: Enforced via pre-commit hooks (Husky + lint-staged)
- **Conventional Commits**: Use clear, descriptive commit messages
- **Testing**: Jest + React Testing Library for unit/component tests

## 🚦 Contribution Workflow

1. Fork the repo and clone locally
2. Create a new branch for your feature or fix
3. Run `npm run lint` and `npm run test` before committing
4. Commit with a clear message
5. Push and open a Pull Request

---

> Built with ❤️ using Next.js, React, and Tailwind CSS.
