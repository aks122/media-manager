import React, { useEffect, useState } from "react";
import {
  downarrow,
  logo,
  pasreset,
  logoutuser,
  user,
  docFold,
  uplbtn,
  useIcon,
  exclamption,
  share,
} from "../Utils/Icons";
import "../Style/Home.css";
import { admin, foldName } from "../Utils/Images";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import ForgetPassword from "../Modal/ForgetPassword";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../Redux/SliceOfRedux/LoginSlice";
import { Flex, FontFamily, Margin } from "../Style/CommonStyled";
import CreateFolder from "../Modal/CreateFolder";
import { signOut, getAuth } from "firebase/auth";
import { app } from "../Firebase/FirebaseConfig";
import EmptyData from "../Components/EmptyData";
import Layout from "./Layout";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ShareComponent from "../Components/ShareComponent";
import UpdateUser from "../Modal/UpdateUser";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 10,
    marginTop: theme.spacing(1),
    minWidth: 250,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
    },
  },
}));

const Home = () => {
  const GetCollection = getFirestore(app);
  const [showvaluesnow, setValuesnow] = useState("");
  const valuesName = useSelector((state) => state.ValueName.headerName);
  const UserUid = useSelector((state) => state.UserUid.Userid);
  const [folderShow, setFolderShow] = useState(false);
  const [showShare, setShare] = useState("layout");
  const [editOpen, setEditOpen] = useState(false);
  const [picShowing, setPicShowing] = useState([]);
  const dbOfStorage = getStorage(app);

  useEffect(() => {
    async function getData() {
      const querySnapshot = await getDocs(
        collection(GetCollection, "Description")
      );
      console.log(querySnapshot, "snapshot");
    }

    getData();
  }, []);
  useEffect(() => {
    const Fetchdata = async () => {
      const querySnapshot = await getDocs(collection(GetCollection, "folder"));
      const values = querySnapshot.docs.map((data) => data.data());
      const valueid = querySnapshot.docs.map((data) => data);
      const EmptyFinal = values.filter((ele) => ele.userUIdnow === UserUid);

      setValuesnow(EmptyFinal);
    };
    Fetchdata();
  }, [folderShow]);
  const signout = getAuth(app);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(!modalOpen);
  };
  const logout = async () => {
    try {
      const signoutValue = await signOut(signout);
    } catch (e) {
      console.log(e, "signout error");
    }

    dispatch(Logout());
  };
  const nameSelectore = useSelector((state) => state.LoginSlice.name);
  const [createFol, setCreateFol] = useState(false);
  const showFolder = () => {
    setCreateFol(true);
  };
  const CloseFol = () => {
    setCreateFol(false);
  };
  const folderShowing = () => {
    setFolderShow(!folderShow);
  };
  const openEdit = () => {
    setEditOpen(true);
  };
  const closeEdit = () => {
    setEditOpen(false);
  };
  return (
    <>
      {modalOpen && <ForgetPassword openModal={openModal} />}
      {createFol && (
        <CreateFolder CloseFol={CloseFol} folderShowing={folderShowing} />
      )}
      {editOpen && <UpdateUser closeEdit={closeEdit} />}
      <div className="Navbar">
        <div className="innerNav">
          <div>
            <img src={logo} alt="Something wrong" />
          </div>
          <div className="flex">
            <div className="admin">
              <img src={admin} alt="something wrong" />
              {/* <input type="file" onChange={(e) => console.log(e)} />/ */}
            </div>
            <div>
              <span className="uName">{nameSelectore}</span>
              <div
                style={{
                  color: "#C4C4C4",
                  fontSize: "14px",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Super admin
              </div>
            </div>
            <div
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              style={{ cursor: "pointer" }}
            >
              <img src={downarrow} alt="Something wrong" />
            </div>

            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  openEdit();
                }}
              >
                <div className="flex">
                  <div>
                    <img src={user} alt="Something wrong" />
                  </div>
                  <div className="menuSec"> Edit Profile</div>
                </div>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  openModal();
                }}
              >
                <div className="flex">
                  <div>
                    <img src={pasreset} alt="Something wrong" />
                  </div>
                  <div className="menuSec">Change Password</div>
                </div>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  logout();
                }}
              >
                <div className="flex">
                  <div>
                    <img src={logoutuser} alt="Something wrong" />
                  </div>
                  <div className="menuSec"> Logout</div>
                </div>
              </MenuItem>
            </StyledMenu>
          </div>
        </div>
      </div>
      {showvaluesnow.length !== 0 ? (
        <>
          <Flex width="100%">
            <div className="innerFlex">
              <div className="flex">
                <Flex
                  width="152px"
                  height="57px"
                  bg="#0057E0"
                  color="white"
                  onClick={() => setShare("layout")}
                >
                  <div>
                    <img src={foldName} alt="Something wrong" />
                  </div>
                  <FontFamily margin="0.2rem" fontSize="16px">
                    My Folders
                  </FontFamily>
                </Flex>
                <Flex
                  width="160px"
                  height="57px"
                  bg="rgb(221 234 253)"
                  onClick={() => setShare("share")}
                >
                  <div>
                    <img src={useIcon} alt="Something wrong" />
                  </div>
                  <FontFamily margin="0" fontSize="12px">
                    Shared With me
                  </FontFamily>
                </Flex>
                <Flex>
                  <FontFamily fontSize="20px" Weight="900">
                    {valuesName}
                  </FontFamily>
                  <div>
                    <img src={exclamption} alt="Something Wrong " />
                  </div>
                </Flex>
              </div>
              <div className="share">
                <button>
                  <Flex color="white" alignItems="none">
                    <div>
                      <img src={share} alt="something wrong" />
                    </div>
                    <FontFamily>Share</FontFamily>
                  </Flex>
                </button>
              </div>
            </div>
          </Flex>
          {showShare === "layout" ? (
            <Layout showFolder={showFolder} folderShow={folderShow} />
          ) : showShare === "share" ? (
            <ShareComponent />
          ) : (
            ""
          )}
        </>
      ) : (
        <EmptyData showFolder={showFolder} />
      )}
      {/* //There is content which will show before add the items */}
    </>
  );
};

export default Home;
