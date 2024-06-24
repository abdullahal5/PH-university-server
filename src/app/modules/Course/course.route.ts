import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { CourseController } from "./course.controller";
import { CourseValidations } from "./course.validation";

const router = express.Router();

router.post(
  "/create-course",
  validateRequest(CourseValidations.createCourseValidationSchema),
  CourseController.createCourse,
);
router.get("/", CourseController.getAllCourse);
router.get("/:id", CourseController.getSingleCourse);
router.patch(
  "/:id",
  validateRequest(CourseValidations.updateCourseValidationSchema),
  CourseController.updateCourse,
);
router.put(
  "/:courseId/assign-faculties",
  validateRequest(CourseValidations.facultiesWithCourseValidationSchema),
  CourseController.assignFaculties,
);
router.delete(
  "/:courseId/remove-faculties",
  validateRequest(CourseValidations.facultiesWithCourseValidationSchema),
  CourseController.removeFacultiesFromCourse,
);

router.delete("/:id", CourseController.deleteCourse);

export const CourseRoutes = router;
