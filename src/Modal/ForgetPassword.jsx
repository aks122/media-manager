import { useFormik } from "formik";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import { FormModal, InnerForm } from "../Style/CommonStyled";
import { PasswordValidation } from "../Validation/SIgnUpvalidation";
import {
  getAuth,
  updatePassword
} from "firebase/auth";
import { app } from "../Firebase/FirebaseConfig";
import { toaster } from "evergreen-ui";
const ForgetPassword = ({ openModal }) => {
  const authForForget = getAuth(app);
  const formik = useFormik({
    initialValues: {
      currentpassword: "",
      newpassword: "",
      confirmpass: "",
    },
    validationSchema: PasswordValidation,
    onSubmit: async (values) => {
      try {

        const user = authForForget.currentUser;

        const newPassword = values.confirmpass;

        const upd = await updatePassword(user, newPassword);
        toaster.success("Password has reset successfully");
        openModal();
      } catch (e) {
        toaster.danger(e, "error occur in firebase");
      }

    },
  });
  return (
    <>
      <div className="wrapperOfModal">
        <div className="innnerModal">
          <div className="Cross" onClick={() => openModal()}>
            <button>
              <RxCross2 />
            </button>
          </div>
          <FormModal>
            <InnerForm>
              <div className="chng">Change Password</div>
              <div style={{ opacity: "0.5", fontSize: "14px", marginTop:"10px" }}>
                Change Your Password Below
              </div>
              <div className="innerForm">
                <form onSubmit={formik.handleSubmit}>
                  <div>
                    <div>Current Password</div>

                    <input
                      id="name"
                      name="currentpassword"
                      type="password"
                      onChange={formik.handleChange}
                      value={formik.values.currentpassword}
                      className="Email"
                      placeholder="***********************"
                    />
                  </div>
                  <div>
                    <div>New Password</div>

                    <input
                      id="email"
                      name="newpassword"
                      type="password"
                      onChange={formik.handleChange}
                      value={formik.values.newpassword}
                      className="Email"
                      placeholder="*************************"
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.newpassword && formik.errors.newpassword ? (
                      <span className="error">{formik.errors.newpassword}</span>
                    ) : null}
                  </div>
                  <div>
                    <div>Confirm Password</div>

                    <input
                      id="password"
                      name="confirmpass"
                      type="password"
                      onChange={formik.handleChange}
                      value={formik.values.confirmpass}
                      placeholder="**************************"
                      className="Email"
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.confirmpass && formik.errors.confirmpass ? (
                      <span className="error">{formik.errors.confirmpass}</span>
                    ) : null}
                  </div>

                  <div className="btn" type="submit">
                    <button>Update </button>
                  </div>
                </form>
              </div>
            </InnerForm>
          </FormModal>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
