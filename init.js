const fs = require('fs');
const path = require('path');

const projectStructure = [
    'app',
    'db',
    'middleware',
    'models',
    'public',
    'routes',
    'views',
];

function createDirectories(baseDir, directories) {
    directories.forEach((dir) => {
        const dirPath = path.join(baseDir, dir);
        fs.mkdirSync(dirPath);
    });
}

function createFile(fileName, content) {
    fs.writeFileSync(fileName, content);
}

function initProject() {
    // Create directories
    createDirectories(__dirname, projectStructure);

    // Create server.js
    createFile('server.js', 'const express = require("express");\nconst app = express();\n\napp.get("/", (req, res) => {\n  res.send("Hello, World!");\n});\n\nconst PORT = process.env.PORT || 3000;\napp.listen(PORT, () => {\n  console.log(`Server is running on port ${PORT}`);\n});\n');

    // Create .gitignore
    createFile('.gitignore', 'node_modules\n.env');

    // Create .env
    createFile('.env', 'DATABASE_URL=your_database_url_here');

    console.log('Project structure initialized successfully!');
}

initProject();
