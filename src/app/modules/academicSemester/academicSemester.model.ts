import { Schema, model } from "mongoose";
import { TAcademicSemester } from "./academicSemester.interface";
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  months,
} from "./academicSemesterConstant";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";

const AcademicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      enum: AcademicSemesterName,
      required: true,
    },
    code: {
      type: String,
      enum: AcademicSemesterCode,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    startMonth: {
      type: String,
      enum: months,
    },
    endMonth: {
      type: String,
      enum: months,
    },
  },
  {
    timestamps: true,
  },
);

AcademicSemesterSchema.pre("save", async function (next) {
  const isSemesterExists = await AcademicSemesterModel.findOne({
    year: this.year,
    name: this.name,
  });

  if (isSemesterExists) {
    throw new AppError(httpStatus.NOT_FOUND, "Semester already exists");
  }
  next();
});

export const AcademicSemesterModel = model<TAcademicSemester>(
  "AcademicSemester",
  AcademicSemesterSchema,
);
