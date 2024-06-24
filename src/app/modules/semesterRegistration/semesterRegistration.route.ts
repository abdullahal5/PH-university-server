import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { SemesterRegistrationController } from "./semesterRegistration.controller";
import { SemesterRegistrationValidations } from "./semesterRegistration.validation";

const router = express.Router();

router.post(
  "/create-semester-registration",
  validateRequest(
    SemesterRegistrationValidations.createSemesterRegistrationValidationSchema,
  ),
  SemesterRegistrationController.createSemesterRegistrationIntoDB,
);

router.get(
  "/",
  SemesterRegistrationController.getAllSemesterRegistrationFromDB,
);

router.get(
  "/:id",
  SemesterRegistrationController.getSingleSemesterRegistrationFromDB,
);

router.patch(
  "/:id",
  validateRequest(
    SemesterRegistrationValidations.upadateSemesterRegistrationValidationSchema,
  ),
  SemesterRegistrationController.updateSemesterRegistrationIntoDB,
);

export const semesterRegistrationRoutes = router;
