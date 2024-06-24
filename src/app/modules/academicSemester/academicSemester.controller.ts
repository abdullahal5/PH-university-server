import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import SendResponse from "../../utils/sendResponse";
import { AcademicSemesterServices } from "./academicSemesterService";

const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.CreateAcademicSemesterIntoDB(
    req.body,
  );

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Academic Semester is Created Successfully",
    data: result,
  });
});

const getAllAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.GetAllAcademicSemesterFromDB();

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Academic Semester is fetched Successfully",
    data: result,
  });
});

const getSingleAcademicSemester = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result =
    await AcademicSemesterServices.GetSingleAcademicSemesterFromDB(id);

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Academic Semester is fetched Successfully",
    data: result,
  });
});

const UpdateAcademicSemester = catchAsync(async (req, res) => {
  const id = req.params.id;
  const updatedContent = req.body;
  const result = await AcademicSemesterServices.UpdateAcademicSemesterIntoDB(
    id,
    updatedContent,
  );

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Academic Semester is fetched Successfully",
    data: result,
  });
});

export const academicSemesterControllers = {
  createAcademicSemester,
  getAllAcademicSemester,
  getSingleAcademicSemester,
  UpdateAcademicSemester,
};
