import React from "react";
import { jpg, png, video } from "../Utils/Icons";
import { useSelector } from "react-redux";
import Fade from "react-reveal/Fade";
import "../Style/layout.css";
const ImageShowing = ({ ele, showModal, index }) => {
  const nameSelectore = useSelector((state) => state.LoginSlice.name);
  const regeximage = /(?:jpg|png|jpeg|tiff)/;
  const regexJpg = /(?:jpg)/;
  const regexpng = /(?:png)/;
  const regexmp4 = /(?:mp4)/;
  const regexvideo = /(?:mp4|wmv|avi|flv|f4v)/;

  return (
    <>
      <Fade bottom>
        <div>
          <div className="mainImage">
            {ele.match(regeximage) ? (
              <div
                className="imagesource"
                onClick={() => showModal(ele, index)}
              >
                <img src={ele} alt="something wrong" />
              </div>
            ) : ele.match(regexvideo) ? (
              <div
                className="imagesourcevideo"
                onClick={() => showModal(ele, index)}
              >
                <video
                  src={ele}
                  alt="something wrong"
                  poster="https://img.freepik.com/free-vector/flat-clapperboard-icon_1063-38.jpg?w=740&t=st=1688107711~exp=1688108311~hmac=caa99158ed165099ad62d844ba2541da95c62743d97c800877dc72b895f870a2"
                />
              </div>
            ) : (
              "none"
            )}

            <div className="contentCreator">
              <div className="innerContent">
                <div>
                  {ele.match(regexJpg) ? (
                    <img src={jpg} alt="Something wrong" />
                  ) : ele.match(regexpng) ? (
                    <img src={png} alt="Something wrong" />
                  ) : ele.match(regexmp4) ? (
                    <img src={video} alt="Something wrong" />
                  ) : (
                    <img src={jpg} alt="something wrong" />
                  )}
                </div>
                <div className="uploadnow">
                  <div className="uploadinner">Upload by : {nameSelectore}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default ImageShowing;
