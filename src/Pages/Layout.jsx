import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import "../Style/layout.css";
import { Flex, FontFamily, Margin } from "../Style/CommonStyled";
import { createFol, layfol, uplbtn } from "../Utils/Icons";

import {
  collection,
  getDocs,
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  FieldValue,
  arrayRemove,
} from "firebase/firestore";
import Fade from "react-reveal/Fade";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { app } from "../Firebase/FirebaseConfig";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import { FolderNameUnit } from "../Redux/SliceOfRedux/FolderNameSlice";
import { Data } from "../Redux/SliceOfRedux/DataImage";
import Showimage from "../Modal/Showimage";
import { Modal } from "antd";
import ImageShowing from "../Components/ImageShowing";
import { ImagePathaction } from "../Redux/SliceOfRedux/ImagePath";
import { ImageUploadaction } from "../Redux/SliceOfRedux/ImageUpload";
import { ValueAction } from "../Redux/SliceOfRedux/ValueName";
import { nodata } from "../Utils/Images";
import { ImageNowaction } from "../Redux/SliceOfRedux/ImageNow";
import { toaster } from "evergreen-ui";

const Layout = ({ showFolder, folderShow }) => {
  const dispatch = useDispatch();
  const idSelector = useSelector((state) => state.FolderNameSlice.foldername);
  const nameSelector = useSelector((state) => state.ValueName.headerName);
  const dataImagenow = useSelector((state) => state.DataImage.data);
  const ImagePath = useSelector((state) => state.ImageNow.ImgNow);
  const dbOfStorage = getStorage(app);
  const GetCollection = getFirestore(app);
  const [showFoldercontent, setShowFolder] = useState("");
  const [dataid, setDataid] = useState("");
  const [downloadImag, setDownloadImg] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [indexField, setIndexField] = useState("");
  const UserUid = useSelector((state) => state.UserUid.Userid);
  const imageUpload = useSelector((state) => state.ImageUpload.ImgUpload);
  useEffect(() => {
    const Fetchdata = async () => {
      const querySnapshot = await getDocs(collection(GetCollection, "folder"));
      const values = querySnapshot.docs.map((data) => data.data());
      const valueid = querySnapshot.docs.map((data) => data.id);
      for (let i = 0; i < values.length; i++) {
        values[i].id = valueid[i];
      }
      console.log(querySnapshot);
      setDataid(valueid);
      let newArr = values.filter((ele) => ele.userUIdnow === UserUid);
      setShowFolder(newArr);
    };
    Fetchdata();
  }, [folderShow]);
  const showIdHere = async (id, name) => {
    dispatch(FolderNameUnit(id));
    dispatch(ValueAction(name));
    for (let i = 0; i < dataid.length; i++) {
      if (id === dataid[i]) {
        const docRef = doc(GetCollection, "folder", id);
        const finalOutput = await getDoc(docRef);
        dispatch(Data(finalOutput.data()));
        const imagePath = finalOutput.data().imageurl;
        dispatch(ImageNowaction(imagePath));
        // console.log(imagePath, "imagepathnow");

        if (imagePath.length >= 1) {
          await downloadImage(imagePath);
        }
      }
    }
  };
  const downloadImage = async (imagepath) => {
    setDownloadImg([]);
    for (let i = 0; i < imagepath.length; i++) {
      const imageRef = ref(dbOfStorage, `${imagepath[i]}`);
      const downloadimage = await getDownloadURL(imageRef);
      setDownloadImg((prev) => {
        return [...prev, downloadimage];
      });
    }
  };

  // const uploadimage = async (e) => {
  //   await updatefunction(e);
  //   toaster.success("Data will upload right now ");
  // };
  const [uploadImage, setUploadImage] = useState(null);
  const updatefunction = async (e) => {
    console.log(updatefunction);
    setUploadImage(e.target.files[0])
    const imageref = ref(
      dbOfStorage,
      `uploads/images/${Date.now()}-${e.target.files[0].name}`
    );
    const updatepicnow = await uploadBytes(imageref, e.target.files[0]);

    console.log(GetCollection , "===============================");

    const Updatedone = await updateDoc(
      doc(GetCollection, "folder", idSelector),
      {
        imageurl: arrayUnion(updatepicnow.ref.fullPath),
      }
    );
    console.log('ppppppppppppppp' , Updatedone);
    toaster.success("Data will shown right now");
    await showIdHere(idSelector, nameSelector);
  };

  const [imagshow, setImageshow] = useState("");
  const showModal = (img, index) => {
    setImageshow(img);
    setIndexField(index);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(null);
  };
  const handleCancel = () => {
    setIsModalOpen(null);
  };
  const DelterImag = async (imagepath) => {
    try {
      const imageRef = doc(GetCollection, "folder", idSelector);
      const fileUpdate = await updateDoc(imageRef, {
        imageurl: arrayRemove(imagepath),
      });
      setIsModalOpen(false);
      console.log(fileUpdate, "file deleted now");
    } catch (e) {
      console.log(e, "error in delete file");
    }
    await showIdHere(idSelector, nameSelector);
  };

  return (
    <>
      <Fade bottom>
        <div className="wrapperLayout">
          <div className="leftContent">
            <div className="leftInnerCont">
              {showFoldercontent &&
                showFoldercontent.map((data) => {
                  return (
                    <>
                      <Flex
                        width="100%"
                        alignItem="none"
                        content="none"
                        className="leftCreatia"
                      >
                        <div>
                          <img src={layfol} alt="Something wrong" />
                        </div>
                        <FontFamily
                          color="#0057E0"
                          onClick={() => showIdHere(data.id, data.name)}
                        >
                          {data.name}
                        </FontFamily>
                      </Flex>
                    </>
                  );
                })}
            </div>
            <Margin
              margin="12px"
              className="btnUpload"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => showFolder()}
            >
              <button>
                <Flex className="flexstate" color="white">
                  <div>
                    <img src={uplbtn} alt="Something wrong" />
                  </div>
                  <div>Create Folder</div>
                </Flex>
              </button>
            </Margin>
          </div>
          <div className="rightContent">
            <div className="innerGridR">
              {ImagePath.length >= 1 ? (
                <>
                  <div className="grid">
                    {downloadImag.map((ele, indexnow) => {
                      return (
                        <>
                          <ImageShowing
                            showModal={showModal}
                            ele={ele}
                            index={indexnow}
                          />
                        </>
                      );
                    })}
                  </div>
                </>
              ) : (
                <>
                  <div className="NoDatacontent">
                    <Flex Direction="column">
                      <div>
                        <img src={nodata} alt="Something wrogn" />
                      </div>
                      <Margin margin="30px" fontSize="25px">
                        No Document
                      </Margin>
                      <Margin margin="12px" fontSize="14px">
                        You have not uploaded any document file. Drag - Drop to
                        upload any document.
                      </Margin>
                    </Flex>
                  </div>
                </>
              )}
            </div>
            <div className="FooterContent">
              <label htmlFor="UploadImg" className="docBox">
                <p style={{display: "flex", justifyContent:"center", alignItems:"center", gap:"10px"}}>
                  <AiOutlineCloudUpload style={{ color: "blue", margin:"-2px" }} />
                 <p> Drop Files here to attach or</p>
                  <span style={{ color: "blue" }}>browse</span>
                </p>
              </label>
              <Flex>
                <div>
                  <input
                    type="file"
                    onChange={updatefunction}
                    id="UploadImg"
                    style={{ display: "none" }}
                  />
                  
                </div>
              </Flex>
            </div>
          </div>
        </div>
        <Modal
          title=""
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width={500}
          style={{
            borderRadius: "64px",
          }}
          footer={[""]}
        >
          <Showimage
            imagshow={imagshow}
            DelterImag={DelterImag}
            indexField={indexField}
            handleCancel={handleCancel}
          />
        </Modal>
      </Fade>
    </>
  );
};

export default Layout;
