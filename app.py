"""
CoinSlosh Flask Server
Serves static assets and HTML template during development
"""
from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__, 
            template_folder='.',
            static_folder='static')

# Enable CORS for development
from flask_cors import CORS
CORS(app)

@app.route('/')
def index():
    """Serve the main game HTML page"""
    return render_template('index.html')

@app.route('/static/<path:filename>')
def serve_static(filename):
    """Serve static files (JS bundles, CSS)"""
    return send_from_directory('static', filename)

@app.route('/public/<path:filename>')
def serve_public(filename):
    """Serve public assets (images, fonts)"""
    return send_from_directory('public', filename)

@app.route('/health')
def health():
    """Health check endpoint"""
    return {'status': 'ok', 'version': '1.0.0'}, 200

if __name__ == '__main__':
    # Create directories if they don't exist
    os.makedirs('static', exist_ok=True)
    os.makedirs('public', exist_ok=True)
    os.makedirs('templates', exist_ok=True)
    
    print("🎰 CoinSlosh Server Starting...")
    print("📂 Static files: /static")
    print("🖼️  Public assets: /public")
    print("🎮 Game URL: http://localhost:5000")
    
    app.run(debug=True, host='0.0.0.0', port=5000)
