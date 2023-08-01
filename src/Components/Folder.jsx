import React from "react";
import { useParams } from "react-router-dom";

function Folder() {
  const { folderName } = useParams();

  return (
    <div>
      <h2>Folder: {folderName}</h2>
    </div>
  );
}

export default Folder;
