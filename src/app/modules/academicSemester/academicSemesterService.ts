import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import {
  TAcademicSemester,
  TAcademicSemesterNameCodeMapper,
} from "./academicSemester.interface";
import { AcademicSemesterModel } from "./academicSemester.model";

const CreateAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  const academicSemesterNameCodeMapper: TAcademicSemesterNameCodeMapper = {
    Autumn: "01",
    Summar: "02",
    Fall: "03",
  };

  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Invalid academic semester name and code mapping",
    );
  }
  const result = await AcademicSemesterModel.create(payload);
  return result;
};

const GetAllAcademicSemesterFromDB = async () => {
  const result = await AcademicSemesterModel.find();
  return result;
};

const GetSingleAcademicSemesterFromDB = async (id: string) => {
  const result = await AcademicSemesterModel.findOne({ _id: id });
  return result;
};

const UpdateAcademicSemesterIntoDB = async (
  id: string,
  payload: Partial<TAcademicSemester>,
) => {
  const result = await AcademicSemesterModel.findByIdAndUpdate(id, payload);
  return result;
};

export const AcademicSemesterServices = {
  CreateAcademicSemesterIntoDB,
  GetAllAcademicSemesterFromDB,
  GetSingleAcademicSemesterFromDB,
  UpdateAcademicSemesterIntoDB,
};
