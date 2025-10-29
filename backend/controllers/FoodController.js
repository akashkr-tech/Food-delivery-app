import foodModel from "../models/Foodmodel.js";
import fs from "fs";

const addFood = async (req, res) => {
    try {
        
        console.log("=== Request Details ===");
        console.log("Body:", req.body);
        console.log("File:", req.file);
        console.log("=====================");

        
        if (!req.file) {
            return res.json({ 
                success: false, 
                message: "Image file is required" 
            });
        }

        let image_filename = req.file.filename;

        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: image_filename,
        });

        await food.save();
        res.json({ success: true, message: "Food item added successfully" });
        
    } catch (error) {
        console.error("=== ERROR DETAILS ===");
        console.error("Error:", error);
        console.error("Error Message:", error.message);
        console.error("====================");
        res.json({ success: false, message: error.message });
    }
};

//all food list
const listFood = async(req,res)=>{

}

export { addFood,listFood };