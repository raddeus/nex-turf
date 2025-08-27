const express = require('express');
const path = require('path');
const browserSync = require('browser-sync');

const app = express();
const PORT = process.env.PORT || 3000;
const BROWSER_SYNC_PORT = 3001;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the Express server
const server = app.listen(PORT, () => {
    console.log(`🚀 Express server running on http://localhost:${PORT}`);
    
    // Initialize Browser Sync
    browserSync.init({
        proxy: `localhost:${PORT}`,
        port: BROWSER_SYNC_PORT,
        files: [
            'public/**/*.*',  // Watch all files in public directory
            'server.js',      // Watch server file for changes
            '*.js'            // Watch all JS files in root
        ],
        open: true,           // Auto-open browser
        notify: true,         // Show notifications
        logLevel: 'info',     // Show what's being reloaded
        ui: false             // Disable BrowserSync UI
    });
    
    console.log(`🔄 BrowserSync running on http://localhost:${BROWSER_SYNC_PORT}`);
    console.log(`✨ Live reload is active! Edit files in /public to see changes instantly.`);
});
