const express = require('express');
const path = require('path');

const app = express();

// Set a static directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes TO DO

// Run server on PORT
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));