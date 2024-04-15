import mongoose from 'mongoose';

const paymentDetailsSchema=new mongoose.Schema({

razorpay_payment_id:{
   type:String,
}
, razorpay_order_id:{
   type:String,

}
,razorpay_signature:{
   type:String,
},
paymentOwner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Form",
}
 
})


export const Payment=mongoose.model("Payment",paymentDetailsSchema);