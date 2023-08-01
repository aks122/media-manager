import React, { useState } from "react";
import { createFol } from "../Utils/Icons";
import { Button, Flex, FormModal, Margin } from "../Style/CommonStyled";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { app } from "../Firebase/FirebaseConfig";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { useSelector } from "react-redux";

const CreateFolder = ({ CloseFol, folderShowing }) => {
  const storage = getStorage(app);
  const db = getFirestore(app);
  const [folderContent, setFolderContent] = useState("");
  const userUIdnow=useSelector((state)=>state.UserUid.Userid)
  const ReduxDispatch = async () => {
    console.log(ReduxDispatch);
    const docnow = await addDoc(collection(db, "folder"), {
      name: folderContent,
      imageurl: [],
      userUIdnow:userUIdnow
    });
    console.log(docnow);
  };

  return (
    <>
      <div className="wrapperOfModal">
        <div className="innnerModalcreate">
          <FormModal height="85%" marginTop="2rem">
            <div className="innerForm1Fol">
              <div className="center">
                <img src={createFol} alt="Something Wrong" />
              </div>
              <Margin fontSize="12px" color="gray" className="center">
                Please Enter name of folder you want to create
              </Margin>
              <div>
                <div>
                  <span style={{ color: "gray" }}>Name</span>
                  <input
                    type="text"
                    placeholder="New folder"
                    className="Email"
                    value={folderContent}
                    onChange={(e) => setFolderContent(e.target.value)}
                  />
                </div>
              </div>
              <Flex width="100%" height="3rem">
                <Button
                  Bgcolor=" #0057E0"
                  width="65%"
                  height="100%"
                  fontSize="15px"
                  onClick={() => {
                    ReduxDispatch();
                    CloseFol();
                    folderShowing();
                  }}
                >
                  Add
                </Button>
              </Flex>

              <Margin
                color="gray"
                fontSize="15px"
                className="center"
                cursor="pointer"
                onClick={() => CloseFol()}
              >
                Cancel
              </Margin>
            </div>
          </FormModal>
        </div>
      </div>
    </>
  );
};

export default CreateFolder;
