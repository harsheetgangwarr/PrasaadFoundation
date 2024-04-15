import asyncHandler from "./../Utils/asyncHandler.js";
import apiResponse from "./../Utils/apiResponse.js";
import { storeFormData } from "./../DB/index.js";
import { instance } from "../../index.js";

export const formData = asyncHandler(async (req, res) => {
  const userFormData = req.body;

  await storeFormData(userFormData);

  const {prasadQuantity,prasadAmount,templeSelection}=userFormData;
  

  const options = {
    amount: Number(templeSelection.length*(prasadAmount*prasadQuantity)*100), // amount in the smallest currency unit
    currency: "INR",
  };

  const order = await instance.orders.create(options);

  return res.status(200).json(
    new apiResponse(
      200,
      {
        userFormData: userFormData,
        order:order,
      },
      "Details got successfully"
    )
  );
});
