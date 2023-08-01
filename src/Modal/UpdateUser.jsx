import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Flex, FormModal, InnerForm } from "../Style/CommonStyled";
import { useFormik } from "formik";
import { admin } from "../Utils/Images";
import {
  collection,
  addDoc,
  getFirestore,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { app } from "../Firebase/FirebaseConfig";
import { toaster } from "evergreen-ui";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { useEffect } from "react";

const UpdateUser = ({ closeEdit }) => {
  const [folderPic, setFolderPic] = useState("");
  const [finalPic, setFinalPic] = useState("");
  const [picUpdate, setPicUpdate] = useState(false);
  const FolderNameDbfol = getFirestore(app);
  const dbOfStoragefol = getStorage(app);
  const userUIdnowfol = useSelector((state) => state.UserUid.Userid);

  const DisplayContent = (event) => {
    if (event.target.files && event.target.files[0]) {
      setFolderPic(URL.createObjectURL(event.target.files[0]));
      setFinalPic(event.target.files[0]);
    }
  };
  console.log(finalPic, "folderpic");

  

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: async (values) => {
      try {
        const imagereffol = ref(
          dbOfStoragefol,
          `description/Values/${Date.now()}-${finalPic.name}`
        );
        const updatepicnow = await uploadBytes(imagereffol, finalPic);
        const docnow = await addDoc(
          collection(FolderNameDbfol, "Description"),
          {
            name: values.name,
            userUIdnow: userUIdnowfol,
            img: updatepicnow.ref.fullPath,
          }
        );
        closeEdit();
      } catch (e) {
        toaster.danger("Something wrong in firebase");
      }
    },
  });

  return (
    <>
      <div className="wrapperOfModal">
        <div className="innnerModal">
          <div className="Cross" onClick={() => closeEdit()}>
            <button>
              <RxCross2 />
            </button>
          </div>
          <FormModal>
            <InnerForm>
              <div className="chng">Edit Profile</div>
              <div style={{ opacity: "0.5", fontSize: "14px" }}>
                Set your Profile Setting Below
              </div>
              <Flex width="100%">
                <div style={{ marginTop: "1rem" }}>
                  {folderPic ? (
                    <>
                      <div className="ModalImg">
                        <img src={folderPic} alt="something wrong" />
                      </div>
                    </>
                  ) : (
                    <>
                      <label htmlFor="UserFolder">
                        <div className="ModalImg">
                          <img src={admin} alt="Something wrong" />
                        </div>
                      </label>
                      <input
                        type="file"
                        id="UserFolder"
                        style={{ display: "none" }}
                        onChange={DisplayContent}
                      />
                    </>
                  )}
                </div>
              </Flex>
              <div className="innerForm">
                <form onSubmit={formik.handleSubmit}>
                  <div>
                    <div>Name</div>

                    <input
                      id="email"
                      name="name"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                      className="Email"
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.newpassword && formik.errors.newpassword ? (
                      <span className="error">{formik.errors.newpassword}</span>
                    ) : null}
                  </div>
                  <div>
                    <div>Email</div>

                    <input
                      id="password"
                      name="email"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      className="Email"
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.confirmpass && formik.errors.confirmpass ? (
                      <span className="error">{formik.errors.confirmpass}</span>
                    ) : null}
                  </div>

                  <div className="btn" type="submit">
                    <button>Save</button>
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

export default UpdateUser;
