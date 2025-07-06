### Requirements
- `Node.js` (recommended: v20+)
- `pnpm` (use one of the following options to install)
  - **Install via Node-Corepack**:
    1. Open a terminal as admin
    2. Enable corepack: 
    `corepack enable`
    3. Activate `pnpm`:
    `corepack prepare pnpm@10.12.4 --activate`
    To activate the lastest `pnpm` version, use `pnpm@latest` instead of `pnpm@10.12.4`. 
    Version `10.12.4` is recommended for this repo.
  - **Install globally via `npm`**:
  `npm install -g pnpm`

### Preparation
Run `pnpm install` in root dir.

### Start Express.js-server and React-frontend
Run `pnpm run dev` in root dir to start both frontend and backend.

### Access frontend
Open `http://localhost:5173/` in a browser.
