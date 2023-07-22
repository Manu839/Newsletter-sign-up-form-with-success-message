import React from 'react'
import tick2 from '../assets/tick2.jpg'
function Thanks() {

  return (<div className='md:bg-slate-800 pt-32 h-screen'><div className='bg-white mr-auto h-fit rounded-2xl ml-auto p-6 w-96'>
    <div className='font-Roboto text-lg font-bold'>
   <img className='pb-4' src={tick2} alt='manu'></img>
        Thanks for subscribing!
    </div>
    <div className='text-sm pt-4 pb-4'>
    a confirmation email sent to your email-address. Please open it and click the button inside to confirm your subscription.
        <div className='pt-6'>
        <button className='w-full text-white p-3 rounded-lg border-2 bg-slate-800' type='submit'><a href ='/'>Dismiss</a></button></div></div>
    </div>
    </div>
  )
}

export default Thanks