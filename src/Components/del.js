import React, { useState } from "react";
import axios from "axios";

const fetchUserData = () => {
  const API = "https://randomuser.me/api";
  const data = axios.get(API).then((response) => {
    console.log(response.data);
  });
};

fetchUserData();
