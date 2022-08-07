import React, { useState } from 'react'
import axios from 'axios'

const Form = (props) => {
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [otpShow, setOtpShow] = useState(false);
    const [status, setStatus] = useState(false)
    const [name, setName] = useState('')
    const [petType, setPetType] = useState('')
    const [location, setLocation] = useState('')
    const [charge, setCharge] = useState(0)

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
        <div className="m-4 p-2 flex flex-col items-start justify-center">
            <label className='flex flex-col'>
                Enter your Name -
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="rounded-md bg-[#D9D9D9] focus:outline-none p-2 m-2" placeholder="eg: Nawed Ali" />
            </label>
            <label className='flex flex-col'>
                Enter your Pet Type -
                <input type="text" value={petType} onChange={(e) => setPetType(e.target.value)} className="rounded-md bg-[#D9D9D9] focus:outline-none p-2 m-2" placeholder="eg: Dogs" />
            </label>
            <label className='flex flex-col'>
                Enter your Location -
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="rounded-md bg-[#D9D9D9] focus:outline-none p-2 m-2" placeholder="eg: New Delhi" />
            </label>
            {props.charge &&
                <label className='flex flex-col'>
                    Enter your charges -
                    <input type="number" value={charge} onChange={(e) => setCharge(e.target.value)} className="rounded-md bg-[#D9D9D9] focus:outline-none p-2 m-2" placeholder="eg: 250" />
                </label>
            }
            {!otpShow ?
                <label className='flex flex-col'>
                    Enter your Phone Number in E. 164 format -
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="rounded-md bg-[#D9D9D9] focus:outline-none p-2 m-2" required placeholder="eg: 91-725-029-1234" />
                </label>
                :
                <label className='flex flex-col'>
                    Enter OTP -
                    <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} className="rounded-md bg-[#D9D9D9] focus:outline-none p-2 m-2" placeholder="eg: 322454" />
                </label>

            }
            <button type="submit" className="bg-apnacolor rounded-full w-32 p-1 mx-auto my-2" onClick={() => {
                if (otpShow) {
                    verifyCode();
                } else {
                    getCode();
                    setOtpShow(true);
                }
            }}>Verify</button>
            {otpShow && <><p className="text-xs m-2">An OTP has been sent on {phone}</p>
            </>}<p className="text-xs m-2">By tapping Verify an SMS may be sent. Message & data rates may apply.</p>
        </div>

    )
}

export default Form