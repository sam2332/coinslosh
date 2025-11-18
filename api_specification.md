# API Specification: CoinSlosh

## Overview
CoinSlosh is primarily a **client-side application** with minimal server interaction. The Flask backend serves static assets during development. This document outlines the current API surface (minimal) and future expansion points.

---

## Current API (v1.0 - Development)

### Base URL
```
http://localhost:5000
```

### Authentication
None required (single-player, client-side game)

---

## 1. Static Asset Endpoints

### GET /
**Description:** Serves the main game HTML page

**Request:**
```http
GET / HTTP/1.1
Host: localhost:5000
```

**Response:**
```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8

<!DOCTYPE html>
<html>
  <head>
    <title>CoinSlosh - 3D Coin Pusher</title>
    <link rel="stylesheet" href="/static/styles.css">
  </head>
  <body>
    <canvas id="gameCanvas"></canvas>
    <div id="ui-overlay">...</div>
    <script src="/static/bundle.js"></script>
  </body>
</html>
```

---

### GET /static/<path:filename>
**Description:** Serves compiled JavaScript, CSS, and bundled assets

**Examples:**
```http
GET /static/bundle.js HTTP/1.1
GET /static/styles.css HTTP/1.1
GET /static/assets/font.woff2 HTTP/1.1
```

**Response:**
```http
HTTP/1.1 200 OK
Content-Type: application/javascript
Cache-Control: no-cache (development)

[compiled JavaScript bundle]
```

**Error Response:**
```http
HTTP/1.1 404 Not Found
Content-Type: text/html

File not found
```

---

### GET /public/<path:filename>
**Description:** Serves public assets (images, fonts, textures)

**Examples:**
```http
GET /public/placeholder-bg.png HTTP/1.1
GET /public/fonts/retro-font.woff2 HTTP/1.1
```

**Response:**
```http
HTTP/1.1 200 OK
Content-Type: image/png

[binary image data]
```

---

## 2. Health Check Endpoint (Optional)

### GET /health
**Description:** Simple health check for monitoring (future production use)

**Request:**
```http
GET /health HTTP/1.1
Host: localhost:5000
```

**Response:**
```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "status": "ok",
  "timestamp": 1700179200000,
  "version": "1.0.0"
}
```

---

## Future API Endpoints (Post-MVP)

The following endpoints are **not implemented** but represent future expansion plans.

---

## 3. Game State Sync (Future - Optional)

### POST /api/v1/state/save
**Description:** Save game state to server (cloud save)

**Request:**
```http
POST /api/v1/state/save HTTP/1.1
Host: api.coinslosh.com
Content-Type: application/json
Authorization: Bearer <jwt_token>

{
  "coinBalance": 1500,
  "timestamp": 1700179200000,
  "version": "1.0.0",
  "statistics": {
    "totalCoinsDropped": 250,
    "totalCoinsWon": 3000
  }
}
```

**Response (Success):**
```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "success": true,
  "savedAt": 1700179200000,
  "backupId": "bkp_abc123xyz"
}
```

**Response (Error):**
```http
HTTP/1.1 400 Bad Request
Content-Type: application/json

{
  "success": false,
  "error": {
    "code": "INVALID_BALANCE",
    "message": "Coin balance exceeds maximum allowed"
  }
}
```

---

### GET /api/v1/state/load
**Description:** Load game state from server

**Request:**
```http
GET /api/v1/state/load HTTP/1.1
Host: api.coinslosh.com
Authorization: Bearer <jwt_token>
```

**Response:**
```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "success": true,
  "state": {
    "coinBalance": 1500,
    "timestamp": 1700179200000,
    "version": "1.0.0",
    "statistics": { ... }
  }
}
```

---

## 4. Leaderboard Endpoints (Future)

### GET /api/v1/leaderboard
**Description:** Retrieve global leaderboard

**Query Parameters:**
- `metric`: `highest_balance` | `total_coins_won` | `win_streak`
- `timeframe`: `daily` | `weekly` | `all_time`
- `limit`: Number of entries (default: 100, max: 1000)
- `offset`: Pagination offset (default: 0)

**Request:**
```http
GET /api/v1/leaderboard?metric=highest_balance&timeframe=all_time&limit=10 HTTP/1.1
Host: api.coinslosh.com
```

**Response:**
```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "success": true,
  "leaderboard": [
    {
      "rank": 1,
      "username": "CoinMaster99",
      "value": 85000,
      "timestamp": 1700179200000
    },
    {
      "rank": 2,
      "username": "PusherPro",
      "value": 72000,
      "timestamp": 1700179100000
    }
  ],
  "total": 5432,
  "userRank": 127
}
```

---

### POST /api/v1/leaderboard/submit
**Description:** Submit score to leaderboard

**Request:**
```http
POST /api/v1/leaderboard/submit HTTP/1.1
Host: api.coinslosh.com
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
  "metric": "highest_balance",
  "value": 85000,
  "timestamp": 1700179200000,
  "proof": "<signature_or_hash>"
}
```

**Response:**
```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "success": true,
  "newRank": 1,
  "previousRank": 5,
  "isPersonalBest": true
}
```

---

## 5. User Authentication (Future)

### POST /api/v1/auth/register
**Description:** Create new user account

**Request:**
```http
POST /api/v1/auth/register HTTP/1.1
Content-Type: application/json

{
  "username": "CoinMaster99",
  "email": "user@example.com",
  "password": "securePassword123"
}
```

**Response:**
```http
HTTP/1.1 201 Created
Content-Type: application/json

{
  "success": true,
  "userId": "usr_abc123",
  "username": "CoinMaster99",
  "token": "jwt_token_here"
}
```

---

### POST /api/v1/auth/login
**Description:** Authenticate existing user

**Request:**
```http
POST /api/v1/auth/login HTTP/1.1
Content-Type: application/json

{
  "username": "CoinMaster99",
  "password": "securePassword123"
}
```

**Response:**
```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "success": true,
  "token": "jwt_token_here",
  "expiresIn": 86400
}
```

---

## 6. Statistics & Analytics (Future)

### GET /api/v1/stats/user
**Description:** Get user statistics

**Request:**
```http
GET /api/v1/stats/user HTTP/1.1
Authorization: Bearer <jwt_token>
```

**Response:**
```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "success": true,
  "statistics": {
    "totalCoinsDropped": 5000,
    "totalCoinsWon": 50000,
    "totalCoinsLost": 1000,
    "gamesPlayed": 120,
    "longestWinStreak": 15,
    "averageCoinsPerDrop": 10,
    "highestBalance": 85000,
    "playtimeSeconds": 36000
  }
}
```

---

### POST /api/v1/analytics/event
**Description:** Track game events for analytics

**Request:**
```http
POST /api/v1/analytics/event HTTP/1.1
Content-Type: application/json
Authorization: Bearer <jwt_token>

{
  "eventType": "coin_dropped",
  "timestamp": 1700179200000,
  "data": {
    "slotId": 2,
    "remainingBalance": 490
  }
}
```

**Response:**
```http
HTTP/1.1 202 Accepted
Content-Type: application/json

{
  "success": true,
  "eventId": "evt_abc123"
}
```

---

## 7. Multiplayer WebSocket (Future)

### WebSocket: /ws/game
**Description:** Real-time multiplayer connection

**Connection:**
```javascript
const ws = new WebSocket('ws://localhost:5000/ws/game?token=jwt_token');
```

**Client → Server Messages:**

#### Join Room
```json
{
  "type": "join_room",
  "roomId": "room_123",
  "username": "CoinMaster99"
}
```

#### Drop Coin
```json
{
  "type": "drop_coin",
  "slotId": 2,
  "timestamp": 1700179200000
}
```

**Server → Client Messages:**

#### Room State
```json
{
  "type": "room_state",
  "players": [
    {
      "userId": "usr_abc123",
      "username": "CoinMaster99",
      "balance": 1500,
      "isReady": true
    }
  ],
  "gameState": "waiting"
}
```

#### Coin Dropped (Broadcast)
```json
{
  "type": "coin_dropped",
  "userId": "usr_abc123",
  "slotId": 2,
  "timestamp": 1700179200000
}
```

---

## Error Response Format

All API errors follow this structure:

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message",
    "details": { ... }
  }
}
```

### Common Error Codes
- `INVALID_REQUEST`: Malformed request body
- `UNAUTHORIZED`: Missing or invalid auth token
- `FORBIDDEN`: User doesn't have permission
- `NOT_FOUND`: Resource not found
- `RATE_LIMITED`: Too many requests
- `SERVER_ERROR`: Internal server error

---

## Rate Limiting (Future)

### Limits
- Anonymous: 100 requests/hour
- Authenticated: 1000 requests/hour
- WebSocket messages: 60/minute per connection

### Rate Limit Headers
```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1700179800
```

---

## CORS Policy (Production)

### Allowed Origins
```
https://coinslosh.com
https://www.coinslosh.com
```

### Allowed Methods
```
GET, POST, OPTIONS
```

### Allowed Headers
```
Content-Type, Authorization
```

---

## Versioning Strategy

- API version in URL path: `/api/v1/`
- Breaking changes require new version: `/api/v2/`
- Non-breaking changes maintain backward compatibility
- Deprecated endpoints include `X-Deprecated` header

---

## Development vs Production

### Development (Current)
- Base URL: `http://localhost:5000`
- No CORS restrictions
- Detailed error messages
- No rate limiting

### Production (Future)
- Base URL: `https://api.coinslosh.com`
- Strict CORS policy
- Generic error messages
- Rate limiting enabled
- HTTPS only
- CDN for static assets

---

## Current Implementation Status

✅ **Implemented:**
- Static asset serving (/, /static, /public)

❌ **Not Implemented (Future):**
- Game state sync API
- Leaderboard endpoints
- User authentication
- Statistics API
- Analytics tracking
- Multiplayer WebSocket
- Rate limiting
- Health checks
