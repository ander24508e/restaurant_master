const express = require('express');
const { connectDB } = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const businessRoutes = require('./routes/businessRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
const port = 4000;

connectDB();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/businesses', businessRoutes);
app.use('/api/products', productRoutes);

app.listen(port, () => {
  console.log('Puerto', port, 'activado'  );
});