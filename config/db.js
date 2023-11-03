require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
            auth: {
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD
            },
            dbName: process.env.DB_NAME,
            UseNewURLParser: true,
            UseUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('MongoDB connected!');
    } catch (error) {
        console.error(error);
        console.log("MongoDB connection error, MongoDB is up and running.");
        process.exit(1);
    }
};

module.exports = connectDB;


// mongoose.connection.on('error', (err) => {
//     console.error(err);
//     console.log('MongoDB connection error. MongoDB is up and running.');
//     process.exit();
// });

// mongoose.connection.once('open', () => {
//     console.log('MongoDB connected!');
// });


// mongoose
//   .connect(`mongodb://${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`)
//   .then(() =>
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT} and mongodb is connected`);
//     })
//   );