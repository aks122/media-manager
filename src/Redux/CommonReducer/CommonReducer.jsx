import { combineReducers } from "@reduxjs/toolkit";
import LoginSlice from "../SliceOfRedux/LoginSlice";
import FolderNameSlice from "../SliceOfRedux/FolderNameSlice";
import NameSlice from "../SliceOfRedux/Nameslice";
import DataImage from "../SliceOfRedux/DataImage";
import Download from "../SliceOfRedux/DownloadImage";
import UserUid from "../SliceOfRedux/UserUid";
import ImageUpload from "../SliceOfRedux/ImageUpload";
import ImagePath from "../SliceOfRedux/ImagePath";
import ValueName from "../SliceOfRedux/ValueName";
import ImageNow from "../SliceOfRedux/ImageNow";
const rootReducer = combineReducers({
  Download,
  UserUid,
  ImageUpload,
  ImagePath,
  ValueName,
  LoginSlice,
  FolderNameSlice,
  NameSlice,
  DataImage,
  ImageNow,
});
export default rootReducer;
