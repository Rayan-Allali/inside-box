"use client";
import Header from "@/components/Shared/Header";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
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

const AddTrainee = () => {
  const [viewPassword, setViewPassword] = useState(false);
const router=useRouter()
  const handleSubmit = (values: any, { setSubmitting }: any) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
      <div className="h-full pt-8 px-16">
        <Header
          title="Add a trainee"
          subtitle="You can control accounts of trainees !"
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
          validate={toFormikValidate(AddTraineeFormSchema) as any }
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="mt-16 py-6 pl-12 grid grid-rows-7 grid-cols-[50%_40%] gap-y-4 font-gilroy font-light bg-gray-light bg-opacity-10 rounded-md">
              {/* First Name Input */}
              <label htmlFor="">
                First Name <span className="text-red-600 mr-12">*</span>
                <Field
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="w-1/2 p-2 m-2 border-2 border-gray-400 rounded-md"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-400"
                />
              </label>

              {/* Last Name Input */}
              <label htmlFor="" className="col-start-1">
                Last Name <span className="text-red-600 mr-12">*</span>
                <Field
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-1/2 p-2 m-2 border-2 border-gray-400 rounded-md"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-red-400"
                />
              </label>

              {/* Email Input */}
              <label htmlFor="" className="row-start-1 col-start-2">
                Email <span className="text-red-600 mr-7">*</span>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-[60%] p-2 m-2 border-2 border-gray-400 rounded-md"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-400"
                />
              </label>

              {/* Password Input */}
              <label htmlFor="">
                Password <span className="text-red-600">*</span>
                <Field
                  type={viewPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="w-[60%] p-2 m-2 border-2 border-gray-400 rounded-md"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-400"
                />
              </label>

              {/* Gender Input (radio buttons for "male" and "female"): */}
              <label htmlFor="" className="flex items-center">
                Gender <span className="text-red-600 mr-24">*</span>
                <label className="mr-8 text-blue-text">
                  <Field
                    type="radio"
                    name="gender"
                    value="male"
                    className="mr-2"
                  />
                  Male
                </label>
                <label className="text-blue-text">
                  <Field
                    type="radio"
                    name="gender"
                    value="female"
                    className="mr-2"
                  />
                  Female
                </label>
              </label>

              {/* Age*/}
              <label htmlFor="" className="w-full col-start-1">
                Age <span className="text-red-600 mr-24">*</span>
                <Field
                  type="number"
                  name="age"
                  placeholder="Age"
                  className="w-1/2 p-2 m-2 border-2 border-gray-400 rounded-md"
                />
              </label>

              {/* Address */}
              <label htmlFor="" className="w-full col-start-1">
                Address <span className="text-red-600 mr-16">*</span>
                <Field
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="w-1/2 p-2 m-2 border-2 border-gray-400 rounded-md"
                />
              </label>

              {/* Phone Number */}
              <label htmlFor="" className="w-full col-start-1">
                Phone Number <span className="text-red-600 mr-4">*</span>
                <Field
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="w-1/2 p-2 m-2 border-2 border-gray-400 rounded-md"
                />
              </label>

              {/* Parent Number */}
              <label htmlFor="" className="w-full col-start-1">
                Parent Number <span className="text-red-600 mr-4">*</span>
                <Field
                  type="text"
                  name="parentNumber"
                  placeholder="Parent Number"
                  className="w-1/2 p-2 m-2 border-2 border-gray-400 rounded-md"
                />
              </label>

              <div className="flex justify-end gap-x-4 row-start-4 col-start-2 pr-[20%]">
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={()=>router.push('/Trainees')}
                  className="w-fit px-4 m-2 text-red-primary hover:text-white border border-red-primary hover:bg-red-primary transition-colors rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-fit px-4 m-2 bg-green-primary hover:bg-green-600  text-white rounded-md"
                >
                  Add
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
  );
};

export default AddTrainee;
