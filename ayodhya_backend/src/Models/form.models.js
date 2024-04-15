import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  // name,fatherName,mobileNo,pinCode,address,prasadQuantity,prasadAmount,templeSelection
  name: {
    type: String,
    lowercase: true,
    trim: true,
  },
  fatherName:{
    type: String,
    lowercase: true,
    trim: true,
  },
  mobileNo:{
    type:Number,
  },
  pinCode:{
    type:Number,
  },
  address: {
    type: String,
    lowercase: true,
    trim: true,
  },
  prasadQuantity:{
    type:Number,
  },
  prasadAmount:{
    type:Number,
  },
  templeSelection:{
    type:Array,
  },

});


export const Form=mongoose.model("Form",formSchema);