const express = require('express');

const {logger} = require('./middleware/log.middleware.cjs');

const app = express();
const PORT = 3000;

// Middleware untuk parsing JSON
app.use(express.json());
app.use(logger);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
