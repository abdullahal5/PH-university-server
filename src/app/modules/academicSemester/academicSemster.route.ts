import express from "express";
import { academicSemesterControllers } from "./academicSemester.controller";
import validateRequest from "../../middlewares/validateRequest";
import { AcademicSemesterValidation } from "./academicSemester.validation";

const router = express.Router();

router.post(
  "/create-academic-semester",
  validateRequest(
    AcademicSemesterValidation.createAcademicSemesterValidationSchema,
  ),
  academicSemesterControllers.createAcademicSemester,
);
router.get("/", academicSemesterControllers.getAllAcademicSemester);
router.get("/:id", academicSemesterControllers.getSingleAcademicSemester);
router.patch(
  "/:id",
  validateRequest(
    AcademicSemesterValidation.updateAcademicSemesterValidationSchema,
  ),
  academicSemesterControllers.UpdateAcademicSemester,
);

export const AcademicSemesterRoutes = router;
