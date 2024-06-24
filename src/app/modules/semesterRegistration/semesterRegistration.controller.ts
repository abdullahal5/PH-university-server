import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import SendResponse from "../../utils/sendResponse";
import { SemesterRgistrationService } from "./semesterRegistration.service";

const createSemesterRegistrationIntoDB = catchAsync(async (req, res) => {
  const result =
    await SemesterRgistrationService.createSemesterRgistrationIntoDB(req.body);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Semester Registration is retrieved succesfully",
    data: result,
  });
});

const getAllSemesterRegistrationFromDB = catchAsync(async (req, res) => {
  const result =
    await SemesterRgistrationService.getAllSemesterRgistrationFromDB(req.query);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Semester Registration retrieved succesfully",
    data: result,
  });
});

const getSingleSemesterRegistrationFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result =
    await SemesterRgistrationService.getSingleSemesterRgistrationFromDB(id);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Semester Registration retrieved succesfully",
    data: result,
  });
});

const updateSemesterRegistrationIntoDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result =
    await SemesterRgistrationService.updateSemesterRgistrationIntoDB(
      id,
      req.body,
    );
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Semester Registration is updated succesfully",
    data: result,
  });
});

export const SemesterRegistrationController = {
  createSemesterRegistrationIntoDB,
  getAllSemesterRegistrationFromDB,
  getSingleSemesterRegistrationFromDB,
  updateSemesterRegistrationIntoDB,
};
