import React from "react";
import { Flex, Margin } from "../Style/CommonStyled";
import { docFold, uplbtn } from "../Utils/Icons";

const EmptyData = ({ showFolder}) => {
  return (
    <>
      <div className="folderCreated">
        <Flex Direction="column" className="inFold" width="25%">
          <div>
            <img src={docFold} alt="Something wrong" />
          </div>
          <Margin margin="30px" fontSize="25px">
            No Folder
          </Margin>
          <Margin margin="12px" fontSize="14px">
            You have not created any folder
          </Margin>
          <Margin
            margin="12px"
            className="btnUpload"
            onClick={() => showFolder()}
          >
            <button>
              <Flex className="flexstate" color="white ">
                <div>
                  <img src={uplbtn} alt="Something wrong" />
                </div>
                <div>Create Folder</div>
              </Flex>
            </button>
          </Margin>
        </Flex>
      </div>
    </>
  );
};

export default EmptyData;
