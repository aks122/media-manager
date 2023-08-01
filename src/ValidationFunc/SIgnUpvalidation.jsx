import * as Yup from "yup";
export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name at least in 3 Words")
    .max(50, "Name can't exceed than 50 words")
    .required("Required"),
  password: Yup.string()
    .min(6, "Password must be atleat in 6 letters")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});
export const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be atleat in 6 letters")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});
export const PasswordValidation = Yup.object({
  newpassword: Yup.string().required("Password is required"),
  confirmpass: Yup.string().oneOf(
    [Yup.ref("newpassword"), null],
    "Passwords must match"
  ),
});
