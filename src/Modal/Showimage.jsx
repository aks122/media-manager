import React from "react";
import { RxCross2 } from "react-icons/rx";
import { Button, Flex } from "../Style/CommonStyled";
import { deleteicon, download, shareicon } from "../Utils/Icons";
import { getStorage, ref, deleteObject } from "firebase/storage";
import { app } from "../Firebase/FirebaseConfig";
import { useSelector } from "react-redux";
import { arrayRemove, doc, getFirestore, updateDoc } from "firebase/firestore";

const Showimage = ({ imagshow, DelterImag, indexField }) => {
  const idSelector = useSelector((state) => state.FolderNameSlice.foldername);
  console.log(idSelector);
  const regeximage = /(?:jpg|png|jpeg|tiff)/;
  const regexvideo = /(?:mp4|wmv|avi|flv|f4v)/;
  const GetCollection = getFirestore(app);
  const dbOfStor = getStorage(app);
  const deleteObj = async (url) => {
    const refnow = ref(dbOfStor, url);
    let value = refnow.fullPath;
    try {
      const imageRef = doc(GetCollection, "folder", idSelector);
      await updateDoc(imageRef, {
        imageurl: arrayRemove(value),
      });
    } catch (e) {
      console.log(e, "Error in Image now");
    }
    await deleteObject(refnow);
  };

  return (
    <>
      <div className="iconsModal">
        <Flex content="flex-end" className="innerModalImg">
          <div>
            <Button borderRadius="100%" width="2rem" >
              <img src={shareicon} alt=""  />
            </Button>
          </div>
          <div>
            <img src={download} alt="" />
          </div>
          <div
            onClick={() => {
              deleteObj(imagshow);
              DelterImag(imagshow);
            }}
          >
            <Button borderRadius="100%" width="2rem" Bgcolor="#E75151" >
              <img src={deleteicon} alt="" />
            </Button>
          </div>
        </Flex>
      </div>
      {imagshow.match(regeximage) ? (
        <div className="imgModal">
          <img src={imagshow} alt="Something wrong" />
        </div>
      ) : imagshow.match(regexvideo) ? (
        <div className="imgModal">
          <video
            src={imagshow}
            alt="Something wrong"
            width="500"
            height="500"
            controls
            poster="https://img.freepik.com/free-vector/flat-clapperboard-icon_1063-38.jpg?w=740&t=st=1688107711~exp=1688108311~hmac=caa99158ed165099ad62d844ba2541da95c62743d97c800877dc72b895f870a2"
          />
        </div>
      ) : (
        "none"
      )}
    </>
  );
};

export default Showimage;
