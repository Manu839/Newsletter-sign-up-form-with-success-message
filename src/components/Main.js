import React from 'react'
import mobile from '../assets/mobile.jpg'
import tick from '../assets/tick.jpg'
import desktop from '../assets/desktop.jpg'
import { useState } from 'react'
function Main() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [address, setaddress] = useState("");

    const emailValidation = () => {
      const emailtest = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
      if (emailtest.test(email)) {
        setMessage("");
        setaddress("/thanks")
      } else if (!emailtest.test(email) && email !== "") {
        setMessage("valid email required");
      } else {
        setMessage("");
      }
    };
    const handleOnChange = (e) => {
        setEmail(e.target.value);
      };

  return (
    <div>

<div className='sm:bg-slate-800 h-screen sm:py-24 w-full'>
      <div className='sm:flex bg-white flex-row-reverse sm:rounded-2xl xl:mx-96 lg:mx-24 flex-1'>

        <div>
          <img src={mobile} className='sm:hidden' alt='mobile'></img>
          <img src={desktop} className='hidden sm:block p-4' alt='desktop'></img>
        </div>


        <div>
          <div className='font-Roboto font-bold text-lg p-4 text-Charcoal Grey: hsl(235, 18%, 26%)'>
            Stay Updated!
          </div>
          <div className='font-normal text-sm'>
            <div className='pl-4 pr-5 pb-4'>Join 60,000+ product managers receiving monthly updates on:</div>
            <div className='p-1.5 mx-2 flex'>
              <img src={tick} className='h-5' alt='image1'></img><p className='mx-3'>Products discovery and building what matters</p>
            </div>
            <div className='p-1.5 mx-2 flex'>
              <img src={tick} className='h-5' alt='image2'></img>  <p className='mx-3'>Measuring to ensure updates are a success</p>
            </div>
            <div className='p-1.5 mx-2 flex'>
              <img src={tick} className='h-5' alt='image3'></img> <p className='mx-3'> And much more!</p>
            </div>
          </div>
          <form className='p-4'>
            <label className='text-Charcoal Grey: hsl(235, 18%, 26%) text-smm font-bold w-full'>Email address</label> <span className='text-red-700 font-bold mx-20 font-Roboto text-smm'>{message}</span><br></br>
            <input value={email} onChange={handleOnChange} placeholder='email@company.com' className='border-2  w-full p-3 border-Grey: hsl(231, 7%, 60%) rounded-lg' type='email'></input><br></br>
            <div className='pt-4 pb-4'>
              <button onClick={emailValidation} className='w-full text-white p-3 rounded-lg border-2 bg-slate-800'  type='submit'> <a href={address} >Subscribe to monthly newsletter </a></button></div>
          </form>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Main