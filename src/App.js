import { useEffect } from "react";
import "./App.css";
import Routing from "./Routing/Routing";
import { app } from "./Firebase/FirebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { UserUidaction } from "./Redux/SliceOfRedux/UserUid";

function App() {
  const checkStatus = getAuth(app);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(checkStatus, (user) => {
      if (user) {
        dispatch(UserUidaction(user.uid));
      } else {
        console.log("User has signout");
      }
    });
  }, []);
  return (
    <>
      <Routing />
    </>
  );
}

export default App;
