import React, { useEffect, useState } from "react";
import axios from "axios";

const GetUserData = () => {
  const API = "https://randomuser.me/api";
  let responseUserData = "";
  try {
    return (responseUserData = axios.get(API).then(({ data }) => {
      /* Destructured data object from response */
      return data;
    }));
  } catch (error) {
    console.log("The Error: " + error);
    return "Empty Data Set";
  }
};

const showUserInfo = (fetchedUserDataResults) => {
  const {
    name: { first, last, title },
    picture: { thumbnail },
  } = fetchedUserDataResults;

  return ` ${title} ${first} ${last}`;
};

const showUserUUID = (fetchedUserDataResults) => {
  const {
    login: { uuid },
  } = fetchedUserDataResults;

  return `${uuid}`;
};

const UserData = ({ userDataPrompt }) => {
  const [userData, setUserData] = useState("Empty Data Set");
  const [userInfos, setUserInfo] = useState([]);

  useEffect(() => {
    GetUserData().then((fetchedData) => {
      setUserData(JSON.stringify(fetchedData, null, 2) || "No Data Found!");
      setUserInfo(fetchedData.results);
    });
  }, []);

  return (
    <div style={userDataStyle}>
      {userInfos.map((userInfo) => {
        const uuid = showUserUUID(userInfo);
        console.log(uuid);

        return (
          <div key={uuid}>
            <p> {showUserInfo(userInfo)}</p>
          </div>
        );
      })}
      {/* <pre>{userData}</pre> */}
    </div>
  );
};

export default UserData;

const userDataStyle = {
  float: "left",
};
