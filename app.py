"""
CoinSlosh Flask Server
Serves static assets and HTML template during development
"""
from flask import Flask, send_from_directory
import os
import mimetypes

# Add proper MIME types
mimetypes.add_type('application/javascript', '.js')
mimetypes.add_type('text/css', '.css')
mimetypes.add_type('application/wasm', '.wasm')

app = Flask(__name__, static_folder='static', static_url_path='')

# Enable CORS for development
from flask_cors import CORS
CORS(app)

@app.route('/')
def index():
    """Serve the main game HTML page"""
    return send_from_directory('static', 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    """Serve all static files"""
    return send_from_directory('static', path)

@app.route('/health')
def health():
    """Health check endpoint"""
    return {'status': 'ok', 'version': '1.0.0'}, 200

if __name__ == '__main__':
    # Create directories if they don't exist
    os.makedirs('static', exist_ok=True)
    os.makedirs('public', exist_ok=True)
    
    print("🎰 CoinSlosh Server Starting...")
    print("📂 Static files: /static")
    print("🖼️  Public assets: /public")
    print("🎮 Game URL: http://localhost:5000")
    
    app.run(debug=True, host='0.0.0.0', port=5000)
