import { user } from "./model.js";

export const putUser= async (req,res)=>{
    try{
        const {email,password}= req.body;

        const user = new User({ email,password,country,firstName,name,displayName, }); 
    await user.save();   
    res.status(201).json({ success: true, data: user });

    } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};


