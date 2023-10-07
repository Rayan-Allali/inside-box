import { z } from 'zod'

const AddTraineeFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  age: z.number().min(1, "Age is required"),
  gender: z.enum(["male", "female"]),
  address: z.string().min(1, "Address is required"),
  phoneNumber: z.string({required_error: 'Phone number is required'}).min(1, "Phone number is required"),
  parentNumber: z.string().optional()
}).refine((data) => data.age < 18, {
  message: "Parent number is required",
  path: ["parentNumber"],
});

export default AddTraineeFormSchema;