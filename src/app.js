const express = require('express');
const cookieParser = require('cookie-parser');
const connectDB = require("./config/dbConfig");
const ServerConfig = require('./config/serverConfig');

const bookRoutes = require('./routes/bookRoutes')
const transactionRoutes = require('./routes/transactionRoutes');
const authRoutes = require('./routes/authRoutes');



const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended : true }));

// app.use('/', (req, res) =>{
//   res.send('Hello World');
//   console.log('Hello World');
// });

// Public Routes
app.use('/api/auth', authRoutes);

app.use('/api/books', bookRoutes);
app.use('/api/transactions', transactionRoutes);


app.listen(ServerConfig.PORT, async () => {
  await connectDB();
  console.log(`Server is running on port ${ServerConfig.PORT}`);
});