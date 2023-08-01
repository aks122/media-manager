import React, {useState} from "react";
import "../Style/Auth.css";
import { useFormik } from "formik";
import { singup } from "../Utils/Images";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../Firebase/FirebaseConfig";
import { toaster } from "evergreen-ui";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SignupSchema } from "../Validation/SIgnUpvalidation";
const SignUp = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      try {
        const signUp = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );

        toaster.success("Form has been Submit now we will gone to login page", {
          duration: 2,
        });
        setTimeout(() => {
          navigate("/Login");
        }, 2000);
        console.log(signUp, "confirmationnow");
      } catch (e) {
        console.log(e, "error in signup now");
        toaster.danger("Email Already Exists");
      }
    },
  });
  const [isLoading, setIsLoading] = useState(false);

const handleLoginClick = () => {
  setIsLoading(true);
  setTimeout(() => {
    navigate('/Login')
    setIsLoading(false);
    
  }, 2000);
};
  return (
    <>
      <div className="Wrapper">
        <div className="innerWrapper">
          <div className="leftDiv">
            <div className="innerDivsign">
              <div className="innerDeep">
                <div className="Login">Signup</div>
                <div className="formContent">
                  <form onSubmit={formik.handleSubmit}>
                    <div>
                      <div>Name</div>

                      <input
                        id="email"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        placeholder="Gurman Kanda"
                        onBlur={formik.handleBlur}
                        className="Email"
                      />
                      {formik.touched.name && formik.errors.name ? (
                        <span className="error">{formik.errors.name}</span>
                      ) : null}
                    </div>
                    <div>
                      <div>Email</div>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="ABC@gmail.com"
                        value={formik.values.email}
                        className="Email"
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <span className="error">{formik.errors.email}</span>
                      ) : null}
                    </div>
                    <div>
                      <div>Password</div>

                      <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                        placeholder="*******************"
                        className="Email"
                      />
                      {formik.touched.password && formik.errors.password ? (
                        <span className="error">{formik.errors.password}</span>
                      ) : null}
                    </div>

                    {/* <div className="btn" type="submit">
                      <button>Sign up</button>
                    </div> */}
                    <div className="btn" type="submit">
      <button onClick={handleLoginClick} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Sign up'}
      </button>
    </div>
                    <div className="lastConten">
                      Already have an account?{" "}
                      <span
                        className="singup"
                        onClick={() => navigate("/login")}
                      >
                        {" "}
                        Login{" "}
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="rightdiv">
            <img src={singup} alt="something wrong" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
