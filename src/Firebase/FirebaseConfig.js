import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAMUwBH4AuOzfcpNydk2qloiw1e4xLZeGI",
  authDomain: "media-manager-9366e.firebaseapp.com",
  projectId: "media-manager-9366e",
  storageBucket: "media-manager-9366e.appspot.com",
  messagingSenderId: "910903786410",
  appId: "1:910903786410:web:398dbc0719963a03c309d3",
  measurementId: "G-0LRPDD1WQG"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
