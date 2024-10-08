const express = require('express');
const bodyParser = require('body-parser');
const componentRoutes = require('./routes/componentRoutes');

const app = express();
app.use(bodyParser.json());

app.get("/", (req,res)=>{
  res.send("Hello from server")
})
// API routes
app.use('/api', componentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
