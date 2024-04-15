import mongoose from 'mongoose';
import { DB_NAME } from '../Utils/constants.js';
import { Form } from './../Models/form.models.js';
import { Payment } from '../Models/paymentDetails.models.js';


const connectDB=async()=>{
    try{
     const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}; `
    );
    
    console.log(`\n MongoDB conneted !! DB HOST: ${connectionInstance.connection.host}`);


    }catch(err){
      console.log("Database not connected"+err);
      process.exit(1);
    }
}

export const storeFormData=async(formData) =>{
  try {
    const newUser=new Form(formData);
    await newUser.save();
    console.log("New User form data saved successfully");
    return true;
  } catch (error) {
    console.log("Error saving user from data "+ error.message);
    return false;
  }
}

export const storePaymentDetails=async (razorpay_payment_id, razorpay_order_id,razorpay_signature)=>{
  try {
  const newPayment=new Payment(razorpay_payment_id, razorpay_order_id,razorpay_signature)
  await newPayment.save();
  console.log("Payment saved successfully");
  return true;
  } catch (error) {
    console.log("Error in saving payment details"+ error.message);
    return false;
  }
}




export default connectDB;