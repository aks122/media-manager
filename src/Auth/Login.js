import React, { useState } from "react";
import { useFormik } from "formik";
import { login } from "../Utils/Images";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { app } from "../Firebase/FirebaseConfig";
import { toaster } from "evergreen-ui";
import { useDispatch } from "react-redux";
import { Name, ValidUser } from "../Redux/SliceOfRedux/LoginSlice";
import { LoginSchema } from "../Validation/SIgnUpvalidation";
import { ValueAction } from "../Redux/SliceOfRedux/ValueName";
import { styled } from "styled-components";
const Login = () => {
  const dispatch = useDispatch();
  const loginAuth = getAuth(app);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      try {
        const loginOp = await signInWithEmailAndPassword(
          loginAuth,
          values.email,
          values.password
        );
        toaster.success("Validation has complete");
        dispatch(ValidUser(loginOp.user.accessToken));
        dispatch(Name(values.email));
        dispatch(ValueAction(""));
      } catch (e) {
        toaster.danger("OOPs Something wrong you did't please check!");
      }
    },
  });

  const handleForgotPassword = async () => {
    try {
      const email = formik.values.email;
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toaster.success("Password reset email sent. Please check your inbox.");
    } catch (error) {
      toaster.danger("Failed to send password reset email. Please try again.");
    }
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleLoginClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/home')
    }, 2000);
  };
  return (
    <>
      <StyledAuth>
        <div className="Wrapper">
          <div className="innerWrapper">
            <div className="leftDiv">
              <div className="innerDiv">
                <div className="innerDeep">
                  <div className="Login">Login</div>
                  <div className="formContent">
                    <form onSubmit={formik.handleSubmit}>
                      <div>
                        <div>Email</div>

                        <input
                          id="email"
                          name="email"
                          type="email"
                          onChange={formik.handleChange}
                          value={formik.values.email}
                          className="Email"
                          placeholder="ABC@gmail.com"
                          onBlur={formik.handleBlur}
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
                          className="Email"
                          placeholder="****************"
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.password && formik.errors.password ? (
                          <span className="error">{formik.errors.password}</span>
                        ) : null}
                      </div>
                      <div className="forget">
                        <div onClick={handleForgotPassword}>Forget Password?</div>

                      </div>
                      <div className="btn">
                        <button>Login</button>
                      </div>
                      {/* <div className="btn">
      <button onClick={handleLoginClick} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Login'}
      </button>
    </div> */}
                      <div className="lastConten">
                        Don’t have an account?{" "}
                        <span className="singup" onClick={() => navigate("/signup")}>
                          {" "}
                          Sign up
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="rightdiv">
              <img src={login} alt="something wrong" />
            </div>
          </div>
        </div>
      </StyledAuth>
    </>
  );
};

export default Login;
export const StyledAuth = styled.div`
.Wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #0d6deb;
}

.innerWrapper {
    display: flex;
    width: 90%;
    height: 85%;
    border: 1px solid royalblue;
    border-radius: 32px;
    background: #FFFFFF;
}

.leftDiv {
    width: 45%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

}

.rightdiv {
    width: 55%;
    height: 100%;
    border-bottom-right-radius: 32px;
}

.rightdiv img {
    width: 100%;
    height: 100%;
}

.innerDiv {
    height: 75%;
    width: 70%;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.error {
    color: red;
}

.innerDivsign {
    height: 85%;
    width: 80%;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
}


.innerDeep {
    width: 80%;
    height: 90%;
}

.Login {
  color: #0057E0;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Playfair Display;
font-size: 60px;
font-style: normal;
font-weight: 700;
line-height: 70px; /* 116.667% */
letter-spacing: -1.34px;
}

.Email {
    width: 95%;
    height: 54px;
    background: #EFEFEF;
    border-radius: 14px;
    border: none;
    padding-left: 5%;
}

.formContent {
    margin-top: 20px;
}

.formContent div {
    margin-top: 10px;
}

.forget {
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
}

.btn {
    width: 100%;
    height: 43px;
    cursor: pointer;

}

.btn button {
    width: 100%;
    height: 100%;
    background: #0851B1;
    box-shadow: 0px 10px 17px 8px rgba(19, 98, 252, 0.2);
    border-radius: 10px;
    border: none;
    font-weight: 600;
    color: white;
    font-size: 15px;
    cursor: pointer;
}

.lastConten {
    text-align: center;
}

.singup {
    color: #0851B1;
    cursor: pointer;
}
`
