# QuickEmoji 🔎

> A lightweight React app with autocomplete that helps you quickly find emojis by name and copy them to your clipboard in one click.

- See [Live demo](https://react-emoji-finder-mu.vercel.app)
- See [Repository](https://github.com/rolandjlevy/react-emoji-finder)

## What it does

- Searches emoji names in real time using `node-emoji`.
- Provides autocomplete suggestions while you type.
- Displays matching results as you type.
- Copies an emoji to the clipboard on click.
- Shows a toast notification confirming the copy action.
- Autofocuses the search input when the page loads.

## Tech stack

- React (Create React App)
- `node-emoji` for emoji search data
- `copy-text-to-clipboard` for clipboard interactions
- `react-hot-toast` for in-app notifications

## Getting started

### 1) Install dependencies

```bash
npm install
```

### 2) Start the development server

```bash
npm start
```

Then open `http://localhost:3000`.

## Available scripts

- `npm start` - Runs the app in development mode.
- `npm run build` - Builds an optimized production bundle.
- `npm test` - Runs tests in watch mode.
- `npm run eject` - Ejects CRA configuration (irreversible).

## Project structure

```text
src/
	App.js            # Root app component
	SearchEmojis.js   # Search UI and copy-to-clipboard behavior
	Footer.js         # Footer section
	toastOptions.js   # Toast configuration helper
	index.css         # App styling
	index.js          # React entry point
```

## How search works

1. User input updates the `query` state in `SearchEmojis`.
2. The app calls `emoji.search(query)` from `node-emoji`.
3. Matching results render as a list.
4. Clicking a result copies the emoji character and shows a toast.

## Credits

- Autofocus approach reference: https://blog.maisie.ink/react-ref-autofocus/
