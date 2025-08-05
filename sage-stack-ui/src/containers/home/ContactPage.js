import React, { useEffect, useState } from "react";
import axios from "axios";

function ContactPage() {
  const [clientName, setName] = useState("");
  const [clientMobileNo, setMobileNo] = useState("");
  const [clientEmail, setEmail] = useState("");
  const [submitClicked, setSubmitClicked] = useState(false);

console.log(submitClicked)
  useEffect(() => {
    if(submitClicked){
      console.log('running',clientEmail,clientMobileNo,clientName)
    axios
      .post("http://localhost:8080/client-info", {
        name: clientName,
        mobileNo: clientMobileNo,
        email: clientEmail,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
}}, [submitClicked]);
  return (
    <>
      <div class="flex justify-center items-center relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 glass-effect  lg:my-0 md:my-0 my-8">
        <div class="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-white/5 opacity-40"></div>
        <div class="relative z-10 lg:p-6 md:p-6 p-4 text-white w-[100%] flex flex-col justify-center items-center">
          <h2 className="text-center mb-6 lg:text-5xl md:text-5xl text-2xl font-semibold">Contact Us</h2>
          <input
            placeholder="Name"
            value={clientName}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className=" focus:outline-none bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-lg placeholder:text-lg text-lg font-light px-2 h-8 placeholder:font-light lg:w-[80%] md:w-[80%] w-[90%] mb-2"
          />
          <input
            placeholder="Mobile Number"
            value={clientMobileNo}
            onChange={(e) => {
              setMobileNo(e.target.value);
            }}
            className=" focus:outline-none bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-lg placeholder:text-lg text-lg font-light px-2 h-8 placeholder:font-light lg:w-[80%] md:w-[80%] w-[90%] mb-2"
          />
          <input
            placeholder="Email"
            value={clientEmail}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg focus:outline-none  rounded-lg placeholder:text-lg text-lg font-light px-2 h-8 placeholder:font-light lg:w-[80%] md:w-[80%] w-[90%] mb-2"
          />
          <button
            onClick={() => {
              setSubmitClicked(true);
            }}
            className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-lg font-extralight rounded-lg py-1 px-4"
          >
            Submit
          </button>
        </div>
      </div>
      {/* <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg h-96 w-full">

      </div> */}
    </>
  );
}

export default ContactPage;
