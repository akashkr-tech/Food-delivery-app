import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://artist78887:Artist78887@cluster0.zbyvwca.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}