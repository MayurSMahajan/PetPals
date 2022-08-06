import React, { useState } from "react";
import axios from 'axios'
import SelectPet from "./SelectPet";
import heroIllustration from "./heroIllustration.svg";

const Hero = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpShow, setOtpShow] = useState(false);
  const [status, setStatus] = useState(false)
  const [name, setName] = useState('')

  const getCode = async () => {

    await axios.get("http://localhost:8000/verify/getcode", {
      params: {
        phonenumber: phone,
        channel: 'sms'
      }
    })
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  const verifyCode = async () => {
    await axios.get("http://localhost:8000/verify/verifycode", {
      params: {
        phonenumber: phone,
        code: otp
      }
    })
      .then(data => {

        console.log(data)
        if (data.data.status === 'approved') {
          setStatus(true)
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="hero-container">
      <div className="flex flex-row justify-around mt-20">
        <div className="hero-headline flex flex-col pl-10">
          <h1 className="text-5xl font-bold  ">
            Find the best pet sitter for your furry friend!
          </h1>
          <p className="w-62 mt-4 text-lg">
            Are you looking for someone who can take good care of your pet?
            <br />
            We have you covered, search for verified Pet Sitters around your
            area now.
          </p>
          <div className="flex mt-28 ">
            {status ? <div className="flex flex-col">
              <h1>Welcome, {name ? name : "Unknown User"}</h1>
              <div className="m-2 p-1">
                <a href="/pet-sitter" className="bg-apnacolor hover:bg-apnacolor text-white font-bold m-2 p-2  rounded">
                  Find a Sitter
                </a>
                <a href="/pet-owner" className="ml-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold m-2 p-2 border border-apnacolor rounded shadow">
                  Become a Sitter
                </a>
              </div>
            </div>
              :
              <div className="m-1 p-1 flex flex-col items-start">
                <label>
                  Enter your Name -
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="rounded-md border focus:outline-none p-2 m-1" placeholder="eg: Nawed Ali" />
                </label>
                {!otpShow ?
                  <label>
                    Enter your Phone Number in E. 164 format -
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="rounded-md border focus:outline-none p-2 m-1 " required placeholder="eg: 91-725-029-1234" />
                  </label>
                  :
                  <label>
                    Enter OTP -
                    <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} className="rounded-md border focus:outline-none p-2 m-1" placeholder="eg: 322454" />
                  </label>

                }
                <button type="submit" className="bg-apnacolor rounded-full w-44 p-1" onClick={() => {
                  if (otpShow) {
                    verifyCode();
                  } else {
                    getCode();
                    setOtpShow(true);
                  }
                }}>Verify</button>
                {otpShow && <><p className="text-xs m-2">An OTP has been sent on {phone}</p>
                </>}<p className="text-xs m-2">By tapping Verify an SMS may be sent. Message & data rates may apply.</p>
              </div>}
          </div>
        </div>
        <div className="hero-illustration flex-2">
          <img src={heroIllustration} alt="hero" />
        </div>
      </div>
      <SelectPet />
    </div >
  );
};

export default Hero;
