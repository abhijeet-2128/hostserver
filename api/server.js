const express = require('express');
const bodyParser = require('body-parser');
const componentRoutes = require('./routes/componentRoutes');

const app = express();
app.use(bodyParser.json());


// API routes
app.use('/api', componentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
