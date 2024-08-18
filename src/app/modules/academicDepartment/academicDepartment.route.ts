import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { academicDepartmentValidation } from "./academicDepartment.validation";
import { academicDepartmentController } from "./academicDepartment.controller";
const router = express.Router();

router.post(
  "/create-academic-department",
  validateRequest(
    academicDepartmentValidation.createAcademicDepartmentValidationSchema,
  ),
  academicDepartmentController.createAcademicDepartment,
);
router.get("/", academicDepartmentController.getAllAcademicDepartment);
router.get(
  "/:departmentId",
  academicDepartmentController.getSingleAcademicDepartment,
);
router.patch(
  "/:departmentId",
  validateRequest(
    academicDepartmentValidation.updateAdemicDepartmentValidationSchema,
  ),
  academicDepartmentController.updateAcademicDepartment,
);

export const AcademicDepartmentRoutes = router;
