import { TAcademicFaculty } from "./academicFaculty.interface";
import { AcademicFacultyModel } from "./academicFaculty.model";

const createAcademicFacultyIntoDB = async (payload: TAcademicFaculty) => {
  const result = await AcademicFacultyModel.create(payload);
  return result;
};

const getAllSAcademicFacultyFromDB = async () => {
  const result = await AcademicFacultyModel.find();
  return result;
};

const getSingleAcademicFacultiesFromDB = async (id: string) => {
  const result = await AcademicFacultyModel.findOne({ _id: id });
  return result;
};

const updateAcademicFacultyFromDB = async (
  id: string,
  payload: Partial<TAcademicFaculty>,
) => {
  const result = await AcademicFacultyModel.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};
export const AcademicFacultyService = {
  createAcademicFacultyIntoDB,
  getAllSAcademicFacultyFromDB,
  getSingleAcademicFacultiesFromDB,
  updateAcademicFacultyFromDB,
};
