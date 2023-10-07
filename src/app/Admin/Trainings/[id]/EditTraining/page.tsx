"use client";
import Header from "@/components/Shared/Header";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { z } from "zod";
import { toFormikValidate } from "zod-formik-adapter";

const AddTraineeFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  // gender will be either "male" or "female":
  gender: z.enum(["", "male", "female"]),
  trainingCourse: z.string().min(1, "Training course is required"),
});

const EditTraining = () => {
  const [viewPassword, setViewPassword] = useState(false);

  const handleSubmit = (
    values: any,
    { setSubmitting }: { setSubmitting: any }
  ) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
      <div className="h-full pt-8 px-16">
        <Header
          title="Edit a training"
          subtitle="You can control accounts of trainings !"
        />
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            gender: "",
            trainingCourse: "",
          }}
          validate={toFormikValidate(AddTraineeFormSchema) as any}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="mt-16 py-6 pl-12 grid grid-rows-6 grid-cols-[50%_40%] gap-y-4 font-gilroy font-light bg-gray-light bg-opacity-10 rounded-md">
              {/* Title Input */}
              <label htmlFor="" className="col-start-1">
                Title <span className="text-red-600 mr-16">*</span>
                <Field
                  type="text"
                  name="title"
                  placeholder="Title"
                  className="w-1/2 p-2 m-2 border-2 border-gray-400 rounded-md"
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-red-400"
                />
              </label>

              {/* Date Input */}
              <label htmlFor="" className="row-start-2 col-start-1">
                Date <span className="text-red-600 mr-[3.75rem]">*</span>
                <Field
                  type="date"
                  name="date"
                  placeholder="Date"
                  className="w-1/2 p-2 m-2 border-2 border-gray-400 rounded-md"
                />
                <ErrorMessage
                  name="date"
                  component="div"
                  className="text-red-400"
                />
              </label>

              {/* Duration Input */}
              <label htmlFor="" className="row-start-3 col-start-1">
                Duration <span className="text-red-600 mr-8">*</span>
                <Field
                  type="number"
                  name="duration"
                  placeholder="Duration"
                  className="w-1/2 p-2 m-2 border-2 border-gray-400 rounded-md"
                />
                <ErrorMessage
                  name="duration"
                  component="div"
                  className="text-red-400"
                />
              </label>

              {/* Prerequisites Input (string) */}
              <label htmlFor="" className="row-start-4 col-start-1">
                Prerequisites <span className="text-red-600">*</span>
                <Field
                  type="text"
                  name="prerequisites"
                  placeholder="Prerequisites"
                  className="w-1/2 p-2 m-2 border-2 border-gray-400 rounded-md"
                />
                <ErrorMessage
                  name="prerequisites"
                  component="div"
                  className="text-red-400"
                />
              </label>

              {/* Public (audience) Input (string) */}
              <label htmlFor="" className="row-start-5 col-start-1">
                Public <span className="text-red-600 mr-12">*</span>
                <Field
                  type="text"
                  name="public"
                  placeholder="Public"
                  className="w-1/2 p-2 m-2 border-2 border-gray-400 rounded-md"
                />
                <ErrorMessage
                  name="public"
                  component="div"
                  className="text-red-400"
                />
              </label>

              {/* List of students */}
              <label htmlFor="" className="row-start-6 col-start-1">
                <Field
                  as="select"
                  name="students"
                  className="w-1/2 p-2 m-2 border-2 border-gray-400 rounded-md"
                >
                  <option value="course">List of students</option>
                  <option value="course1">Course 1</option>
                  <option value="course2">Course 2</option>
                  <option value="course3">Course 3</option>
                </Field>
                <ErrorMessage
                  name="students"
                  component="div"
                  className="text-red-400"
                />
              </label>

              {/* Description Input (textarea) */}
              <label
                htmlFor=""
                className="row-start-1 col-start-2 row-span-3 flex justify-between"
              >
                Description <span className="text-red-600 mr-8">*</span>
                <Field
                  as="textarea"
                  name="description"
                  placeholder="Description"
                  className="w-full p-2 border-2 border-gray-400 rounded-md"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-400"
                />
              </label>

              {/* Image Upload Input */}
              <div className="flex items-center justify-center justify-self-end w-[65%] row-start-4 col-start-2 row-span-2">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full  border-2 border-gray-300 rounded-lg cursor-pointer bg-white hover:bg-gray-100 "
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-text"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-text">Image</p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    accept=".png, .jpeg, .jpg, .svg"
                    className="hidden"
                  />
                </label>
              </div>

              {/* Action Buttons */}
              <div className="flex juss justify-end gap-x-4 row-start-6 col-start-2">
                <button
                  type="button"
                  disabled={isSubmitting}
                  className="w-fit px-4 m-2 text-red-primary hover:text-white border border-red-primary hover:bg-red-primary transition-colors rounded-md"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-fit px-4 m-2 bg-green-primary hover:bg-green-600  text-white rounded-md"
                >
                  Save
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
  );
};

export default EditTraining;
