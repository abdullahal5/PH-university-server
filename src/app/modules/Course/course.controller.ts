import httpStatus from "http-status";
import SendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";
import { CourseServices } from "./course.service";

const createCourse = catchAsync(async (req, res) => {
  const result = await CourseServices.createCouseIntoDB(req.body);

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Academic Semester is Created Successfully",
    data: result,
  });
});

const getAllCourse = catchAsync(async (req, res) => {
  const result = await CourseServices.getAllCoursesFromDB(req.query);

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Academic Semester is fetched Successfully",
    data: result,
  });
});

const getSingleCourse = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await CourseServices.getSingleCourseFromDB(id);

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Academic Semester is fetched Successfully",
    data: result,
  });
});

const updateCourse = catchAsync(async (req, res) => {
  const id = req.params.id;
  const updatedContent = req.body;
  const result = await CourseServices.updateCourseIntoDB(id, updatedContent);

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Academic Semester is updated Successfully",
    data: result,
  });
});

const deleteCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CourseServices.deleteCourseFromDB(id);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Course is deleted succesfully",
    data: result,
  });
});

const assignFaculties = catchAsync(async (req, res) => {
  const { courseId } = req.params;
  const { faculties } = req.body;
  const result = await CourseServices.assignFacultiesWithCourseIntoDB(
    courseId,
    faculties,
  );

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Faculty Assigned succesfully",
    data: result,
  });
});

const removeFacultiesFromCourse = catchAsync(async (req, res) => {
  const { courseId } = req.params;
  const { faculties } = req.body;
  const result = await CourseServices.revomeFacultiesFromCourseFromDB(
    courseId,
    faculties,
  );

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Faculty removed succesfully",
    data: result,
  });
});

const getFacultiesWithCourse = catchAsync(async (req, res) => {
  const { courseId } = req.params;

  const result = await CourseServices.getFacultiesWithCourseFromDB(courseId);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Faculties retrieved succesfully",
    data: result,
  });
});

export const CourseController = {
  createCourse,
  getAllCourse,
  getSingleCourse,
  updateCourse,
  deleteCourse,
  getFacultiesWithCourse,
  assignFaculties,
  removeFacultiesFromCourse,
};
