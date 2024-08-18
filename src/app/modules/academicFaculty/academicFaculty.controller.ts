import httpStatus from "http-status";
import SendResponse from "../../utils/sendResponse";
import { AcademicFacultyService } from "./academicFaculty.service";
import catchAsync from "../../utils/catchAsync";

const createAcademicFaculty = catchAsync(async (req, res) => {
  const result = await AcademicFacultyService.createAcademicFacultyIntoDB(
    req.body,
  );

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Academic faculty is Created Successfully",
    data: result,
  });
});

const getAllAcademicFaculty = catchAsync(async (req, res) => {
  const result = await AcademicFacultyService.getAllSAcademicFacultyFromDB(
    req.query,
  );

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Academic faculty is fetched Successfully",
    data: result,
  });
});

const getSingleAcademicFaculty = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result =
    await AcademicFacultyService.getSingleAcademicFacultiesFromDB(id);

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Academic faculty is fetched Successfully",
    data: result,
  });
});

const updateAcademicFaculty = catchAsync(async (req, res) => {
  const id = req.params.id;
  const updatedContent = req.body;
  const result = await AcademicFacultyService.updateAcademicFacultyFromDB(
    id,
    updatedContent,
  );

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Academic faculty is fetched Successfully",
    data: result,
  });
});

export const academicFacultyController = {
  createAcademicFaculty,
  getAllAcademicFaculty,
  getSingleAcademicFaculty,
  updateAcademicFaculty,
};
