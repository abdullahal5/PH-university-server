import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import SendResponse from "../../utils/sendResponse";
import { AcademicDepartmentService } from "./academicDepartment.service";

const createAcademicDepartment = catchAsync(async (req, res) => {
  const result = await AcademicDepartmentService.createAcademicDepartmentIntoDB(
    req.body,
  );

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Academic Department is Created Successfully",
    data: result,
  });
});

const getAllAcademicDepartment = catchAsync(async (req, res) => {
  const result =
    await AcademicDepartmentService.getAllSAcademicDepartmentFromDB();

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Academic Department is fetched Successfully",
    data: result,
  });
});

const getSingleAcademicDepartment = catchAsync(async (req, res) => {
  const id = req.params.departmentId;
  const result =
    await AcademicDepartmentService.getSingleAcademicDepartmentFromDB(id);

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Academic Department is fetched Successfully",
    data: result,
  });
});

const updateAcademicDepartment = catchAsync(async (req, res) => {
  const id = req.params.departmentId;
  const updatedContent = req.body;
  const result = await AcademicDepartmentService.updateAcademicDepartmentFromDB(
    id,
    updatedContent,
  );

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Academic Department is updated Successfully",
    data: result,
  });
});

export const academicDepartmentController = {
  createAcademicDepartment,
  getAllAcademicDepartment,
  getSingleAcademicDepartment,
  updateAcademicDepartment,
};
