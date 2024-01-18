import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import URLAPI from "../API/URLAPI.js";
import HorizontalStepper from "./HorizontalStepper.jsx"

const AddDomain=()=> {

  const [domainList, setDomainList] = useState(null);
  const [data, setData] = useState([]);
  const [length,setlength]=useState('');
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("domainList", domainList);
    try {
      const config = {
        headers: {
          "Content-Type": undefined,
        },
      };
      const response = await axios.post(
        `${URLAPI}/api/domain`,
        formData,
        config
      );
      console.log(response.data.domains);
      setData(response.data.domains);
      setlength(response.data.domains.length);
      // Send response to another API endpoint
      // const otherApiConfig = {
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // };
      // const otherApiResponse = await axios.post(
      //   `${URLAPI}/domains`,
      //   response.data,
      //   otherApiConfig
      // );
      // console.log(otherApiResponse.data);
    } catch (error) {
      console.error(error);
    }
  }

  const EmailSand = () => {
    navigate.push("/DomainCountry");
  };
  return (
    <>
    <HorizontalStepper/>
      
    </>
  );
}
export default AddDomain;
