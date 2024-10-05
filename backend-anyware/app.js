const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const DBconnection = require('./config/database');
const quizRoutes = require('./routes/quizRoute');
const announcementRoutes = require('./routes/announcementRoute');
const globalError = require('./middleware/errorMiddleware');

// Load environment variables
dotenv.config({ path: './config.env' });

// Connect to the database
DBconnection();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/quizzes', quizRoutes);
app.use('/api/announcements', announcementRoutes);

// Global Error Handler
app.use(globalError);

// Start the server
app.listen(port, (error) => {
    if (!error) {
        console.log(`Server is successfully running on port ${port}`);
    } else {
        console.log("Error occurred, server can't start", error);
    }
});

