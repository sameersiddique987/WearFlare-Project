import React from 'react'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
function Success() {
    const navigate = useNavigate();

  useEffect(() => {
    Swal.fire({
      title: "Payment Successful!",
      text: "Thank you for your purchase.",
      icon: "success",
      confirmButtonColor: "#234e94",
      confirmButtonText: "OK",
    }).then(() => {
      navigate("/"); 
    });
  }, []);
  return (
    <div></div>
  )
}

export default Success