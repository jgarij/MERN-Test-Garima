


const mongoose =  require('mongoose')

require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://garimajain0809:gwHly4rqVIObSBo2@cluster0.47zzj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected Successfully');
    } catch (error) {
        console.error('MongoDB Connection Error:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
