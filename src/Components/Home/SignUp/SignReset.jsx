import React, { useState } from 'react';
import LoginImg from '../../../Assets/img/Rectangle.png';
import Button from 'react-bootstrap/Button';

function SignReset({ otpHandler  }) {
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');

  const handleVerifyOTP = () => {
    // Validate OTP (for example, check if it is a 6-digit number)
    const isValidOTP = /^\d{6}$/.test(otp);

    if (isValidOTP) {
      // Reset previous OTP error
      setOtpError('');

      // Call the OTP handler
      otpHandler(otp);
    } 
    
    else {
      // Display an error if OTP is invalid
      setOtpError('Invalid OTP. Please enter a 6-digit number.');
    }
  };



  return (
    <div>
      <div className='flex flex-row items-start'>
        <div className='w-[400px] h-[430px] hidden md:block rounded-lg'>
          <img src={LoginImg} alt='login_img' className='w-full h-full rounded-lg' />
        </div>
        <div className='w-[400px] px-4 py-3'>
          <div className='my-3 text-center cursor-pointer hover:underline'>Resend OTP</div>
          <div className='mb-3'>
            <input
              type='Number'
              placeholder='OTP'
              className={`w-full outline-none text-[20px] border-[1px] border-slate-500 px-1 py-2 rounded-lg ${
                otpError ? 'border-red-500' : ''
              }`}
              onChange={(e) => setOtp(e.target.value)}
            />
            {otpError && <div className='text-red-500 text-sm mt-1'>{otpError}</div>}
          </div>
          <div className='w-full my-2'>
            <Button
              style={{ padding: '10px 18px', textAlign: 'center', backgroundColor: '#e3292d', border: 'none', borderRadius: '40px' }}
              className='w-full hover:opacity-80'
              onClick={handleVerifyOTP}
            >
              Verify OTP
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignReset;
