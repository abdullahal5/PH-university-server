/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { OfferedCourseModel } from "../offeredCourse/offeredCourse.model";
import { TEnrolledCourse } from "./enrollCourse.interface";
import EnrolledCourseModel from "./enrollCourse.model";
import { StudentModel } from "../student/student.model";
import mongoose from "mongoose";
import { SemesterRegistrationModel } from "../semesterRegistration/semesterRegistration.model";

const createEnrolledCourseIntoDB = async (
  userId: string,
  payload: TEnrolledCourse,
) => {
  const { offeredCourse } = payload;

  const isOfferedCourseExists =
    await OfferedCourseModel.findById(offeredCourse);

  if (!isOfferedCourseExists) {
    throw new AppError(httpStatus.NOT_FOUND, "Offered Course does not exist");
  }

  const student = await StudentModel.findOne({ id: userId }, { _id: 1 });

  if (!student) {
    throw new AppError(httpStatus.NOT_FOUND, "Student does not exist");
  }

  const isStudentAlreadyEnrolled = await EnrolledCourseModel.findOne({
    semesterRegistration: isOfferedCourseExists?.semesterRegistration,
    offeredCourse,
    student: student._id,
  });

  if (isStudentAlreadyEnrolled) {
    throw new AppError(httpStatus.CONFLICT, "Student is already enrolled");
  }

  if (isOfferedCourseExists.maxCapacity <= 0) {
    throw new AppError(httpStatus.BAD_REQUEST, "Room is full");
  }

  const semesterRegistration = await SemesterRegistrationModel.findById(
    isOfferedCourseExists.semesterRegistration,
  ).select("maxCredit");

  const enrolledCourses = EnrolledCourseModel.aggregate([
    {
      $match: {
        semesterRegistration: isOfferedCourseExists.semesterRegistration,
        student: student._id,
      },
    },
  ]);


  // const session = await mongoose.startSession();
  // try {
  //   session.startTransaction();

  //   const result = await EnrolledCourseModel.create(
  //     [
  //       {
  //         semesterRegistration: isOfferedCourseExists.semesterRegistration,
  //         academicSemester: isOfferedCourseExists.academicSemester,
  //         academicFaculty: isOfferedCourseExists.academicFaculty,
  //         academicDepartment: isOfferedCourseExists.academicDepartment,
  //         offeredCourse: offeredCourse,
  //         course: isOfferedCourseExists.course,
  //         student: student._id,
  //         faculty: isOfferedCourseExists.faculty,
  //         isEnrolled: true,
  //       },
  //     ],
  //     { session },
  //   );

  //   if (!result) {
  //     throw new AppError(httpStatus.BAD_REQUEST, "Failed to enroll student");
  //   }

  //   const maxCapacity = isOfferedCourseExists.maxCapacity;

  //   await OfferedCourseModel.findByIdAndUpdate(
  //     offeredCourse,
  //     {
  //       maxCapacity: maxCapacity - 1,
  //     },
  //     {
  //       new: true,
  //     },
  //   );

  //   await session.commitTransaction();
  //   await session.endSession();

  //   return result;
  // } catch (error: any) {
  //   await session.abortTransaction();
  //   await session.endSession();
  //   throw new Error(error);
  // }
};

const updateEnrolledCourseMarksIntoDB = async (
  facultyId: string,
  payload: Partial<TEnrolledCourse>,
) => {};

export const EnrolledCourseServices = {
  createEnrolledCourseIntoDB,
  updateEnrolledCourseMarksIntoDB,
};
