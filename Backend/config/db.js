const mongoose = require('mongoose');

const uri = 'mongodb+srv://<ankityadav870401@gmail.com>:<jB76F^*&yuCF&f7y&u>@cluster0.9r1ntkq.mongodb.net/<database>?retryWrites=true&w=majority';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
