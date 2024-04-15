import { storePaymentDetails } from "../DB/index.js";
import asyncHandler from "../Utils/asyncHandler.js";
import crypto from "crypto";

export const paymentVerification = asyncHandler(async (req, res) => {
  const response = req.body;

  await storePaymentDetails(response);

  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
    response;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthenticated = expectedSignature === razorpay_signature;

  if (isAuthenticated) {
    res.redirect(
      `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
    );
  } else {
    res.redirect(`http://localhost:3000/paymentfail`);
  }
});
