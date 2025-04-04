const express = require('express');
const cors = require('cors');
const path = require('path');
const enhancementRoutes = require('./routes/enhancementRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/enhance', enhancementRoutes);

// Static files (if needed)
app.use('/processed', express.static(path.join(__dirname, 'processed')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});