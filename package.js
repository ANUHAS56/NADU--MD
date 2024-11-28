{
  "name": "NADU MD",
  "version": "1.1.1",
  "description": "A WhatsApp bot created using Node.js",
  "main": "index.js",
  "scripts": {
    "start": "pm2 start index.js --deep-monitoring --attach --name NADU-MD",
    "stop": "pm2 stop NADU-MD",
    "restart": "pm2 restart NADU-MD"
  },
  "dependencies": {
    "@whiskeysockets/baileys": "6.6.0",
    "@adiwajshing/keyed-db": "^0.2.4",
    "pino": "^7.0.5",
    "pm2": "^5.2.0",
    "util": "^0.12.4",
    "express": "latest",
    "axios": "^1.2.5",
    "file_size_url": "^1.0.4",
    "fs-extra": "^11.1.0",
    "path": "^0.12.7",
    "node-fetch": "^2.6.1",
    "megajs": "^1.1.0",
    "vm": "^0.1.0",
    "qrcode-terminal": "^0.12.0"
  }
}
