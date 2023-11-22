import mongoose from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB Connected Success');
        })

        connection.on('error', (err) => {
            console.log('MongoDB Error Connecting' + err);
            process.exit(1);
        })
    } catch (error) {
        console.log('Something Went Wrong!');
        console.log(error);
    }
};