# CoinSlosh 🎰

A web-based 3D coin pusher arcade game with 70s retro aesthetic.

## Tech Stack

- **Backend:** Flask (Python)
- **Frontend:** Three.js + TypeScript
- **Physics:** Rapier3D (WebAssembly)
- **Build:** Vite

## Setup Instructions

### Prerequisites

- Python 3.10+
- Node.js 18+
- npm or yarn

### Installation

1. **Install Python dependencies:**
```powershell
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

2. **Install Node.js dependencies:**
```powershell
npm install
```

### Running Locally

You need two terminal windows:

**Terminal 1 - Vite Dev Server (Frontend):**
```powershell
npm run dev
```

**Terminal 2 - Flask Server (Backend):**
```powershell
python app.py
```

Then open: http://localhost:5000

### Building for Production

```powershell
npm run build
```

Compiled files will be in `static/` directory.

## Project Structure

```
coinslosh/
├── src/               # TypeScript source files
│   ├── main.ts        # Entry point
│   ├── game/          # Game logic
│   ├── physics/       # Physics wrapper
│   ├── rendering/     # Three.js scene
│   └── ui/            # UI controllers
├── public/            # Static assets (images, fonts)
├── static/            # Build output (generated)
├── templates/         # HTML templates
├── app.py             # Flask server
├── index.html         # Main HTML file
└── package.json       # Node dependencies
```

## Development

- TypeScript files watch mode: `npm run dev`
- Type checking: `npm run type-check`
- Linting: `npm run lint`

## Documentation

See the project documentation files:
- `project_design_document.md` - Full specification
- `architecture_overview.md` - System architecture
- `technical_strategy.md` - Tech decisions
- `data_model_definitions.md` - Data structures
- `api_specification.md` - API endpoints
- `ux_research_and_flows.md` - UX design
- `testing_strategy.md` - Testing approach

## License

MIT
