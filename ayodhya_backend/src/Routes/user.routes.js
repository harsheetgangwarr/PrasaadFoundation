import { Router } from "express";
import { formData} from "../Controllers/form.controller.js";
import {   paymentVerification } from "../Controllers/payment.controller.js";


const router=Router();


router.route("/form-data").post(formData)
router.route("/payment").post(paymentVerification)

export default router;