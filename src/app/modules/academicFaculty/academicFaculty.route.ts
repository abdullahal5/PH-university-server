import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { academicFacultyController } from "./academicFaculty.controller";
import { academicFacultyValidation } from "./academicFaculty.validation";

const router = express.Router();

router.post(
  "/create-academic-faculty",
  validateRequest(
    academicFacultyValidation.createAcademicFacultyValidationSchema,
  ),
  academicFacultyController.createAcademicFaculty,
);

router.get("/", academicFacultyController.getAllAcademicFaculty);
router.get("/:facultyId", academicFacultyController.getSingleAcademicFaculty);
router.patch(
  "/:facultyId",
  validateRequest(
    academicFacultyValidation.updateAdemicFacultyValidationSchema,
  ),
  academicFacultyController.updateAcademicFaculty,
);

export const AcademicFacultyRoutes = router;
