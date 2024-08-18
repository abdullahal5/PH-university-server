import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import {
  TAcademicSemester,
  TAcademicSemesterNameCodeMapper,
} from "./academicSemester.interface";
import { AcademicSemesterModel } from "./academicSemester.model";
import QueryBuilder from "../../builder/Querybuilder";
import { AcademicSemesterSearchableFields } from "./academicSemesterConstant";

const CreateAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  const academicSemesterNameCodeMapper: TAcademicSemesterNameCodeMapper = {
    Autumn: "01",
    Summer: "02",
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

const GetAllAcademicSemesterFromDB = async (query: Record<string, unknown>) => {
  const academicSemesterQuery = new QueryBuilder(
    AcademicSemesterModel.find(),
    query,
  )
    .search(AcademicSemesterSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await academicSemesterQuery.modelQuery;
  const meta = await academicSemesterQuery.countTotal();

  return {
    meta,
    result,
  };
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
