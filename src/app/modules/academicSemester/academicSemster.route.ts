import express from "express";
import { academicSemesterControllers } from "./academicSemester.controller";
import validateRequest from "../../middlewares/validateRequest";
import { AcademicSemesterValidation } from "./academicSemester.validation";
import auth from "../../middlewares/auth";

const router = express.Router();

router.post(
  "/create-academic-semester",
  validateRequest(
    AcademicSemesterValidation.createAcademicSemesterValidationSchema,
  ),
  auth("admin"),
  academicSemesterControllers.createAcademicSemester,
);
router.get(
  "/",
  // auth("admin"),
  academicSemesterControllers.getAllAcademicSemester,
);
router.get("/:id", academicSemesterControllers.getSingleAcademicSemester);
router.patch(
  "/:id",
  validateRequest(
    AcademicSemesterValidation.updateAcademicSemesterValidationSchema,
  ),
  academicSemesterControllers.UpdateAcademicSemester,
);

export const AcademicSemesterRoutes = router;
