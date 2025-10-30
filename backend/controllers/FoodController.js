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
   try{
      const foods = await foodModel.find({});
      res.json({success:true,data:foods});
   }catch(error){
      console.log(error);
      res.json({success:false,message:"error"})
   }
}

 // remove food item 
 const removeFood = async (req,res)=>{
  try{
  const food = await foodModel.findById(req.body.id);
  fs.unlink(`uploads/${food.image}`,()=>{})

  await foodModel.findByIdAndDelete(req.body.id);
  res.json({success:true,message:"Food item removed successfully"});
  }catch(error){
    console.log(error);
    res.json({success:false,message:"error"})
  }

 }


export { addFood,listFood,removeFood };