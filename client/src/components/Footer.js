import React from 'react'

const Footer = () => {
    return (
        <div className='md:px-16 sm:px-10 mx-auto bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,1.0)] py-5  bottom-0 flex md:justify-between flex-col gap-6 md:flex-row items-center'>
            <div className='text-black flex md:flex-col md:gap-2 gap-16 items-center'>
                <h1 className='text-3xl'>Travel</h1>
                <p>&copy; anouhi footer</p>
            </div>

            <div className='flex gap-6'>
                <a className='hover:bg-gray-100 py-0.5 px-2 rounded' >Home</a>
                <a className='hover:bg-gray-200 py-0.5 px-2 rounded' >Contact</a>
                <a className='hover:bg-gray-200 py-0.5 px-2 rounded' >About Us</a>
            </div>

            <div className='flex gap-12 md:gap-4'>
                <img className='w-6 h-6' src={require("../assets/icons/linkedin.png")} alt="/"></img>
                <img className='w-6 h-6' src={require("../assets/icons/instagram.png")} alt="/"></img>
                <img className='w-6 h-6' src={require("../assets/icons/facebook.png")} alt="/"></img>
                <img className='w-6 h-6' src={require("../assets/icons/twitter(1).png")} alt="/"></img>
            </div>
        </div>
    )
}

export default Footer