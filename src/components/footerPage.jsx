import React from 'react';

function FooterPage () {
    return (
<div className="pt-24 pb-20" style={{backgroundColor:"#EAE7DC"}}>
    <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center">
            <div className="flex-row flex items-center">
                <svg fill="none" className="h-20 w-auto text-red-500" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#E85A4F" d="M15.258 26.865a4.043 4.043 0 01-1.133 2.917A4.006 4.006 0 0111.253 31a3.992 3.992 0 01-2.872-1.218 4.028 4.028 0 01-1.133-2.917 3.97 3.97 0 012.027-3.414c-.024.109.09-.055 0 0l1.86-1.652a8.495 8.495 0 002.304-5.793c0-2.926-1.711-5.901-4.17-7.457.094.055-.036-.094 0 0A3.952 3.952 0 017.8 7.116a3.975 3.975 0 01-.557-1.98 4.042 4.042 0 011.133-2.918A4.006 4.006 0 0111.247 1a3.99 3.99 0 012.872 1.218 4.025 4.025 0 011.133 2.917 8.521 8.521 0 002.347 5.832l.817.8c.326.285.668.551 1.024.798.621.33 1.142.826 1.504 1.431a3.902 3.902 0 01-1.504 5.442c.033-.067-.063.036 0 0a8.968 8.968 0 00-3.024 3.183 9.016 9.016 0 00-1.158 4.244zm4.483-21.742c0 .796.235 1.575.676 2.237a4.01 4.01 0 001.798 1.482 3.99 3.99 0 004.366-.873 4.042 4.042 0 00.869-4.386 4.02 4.02 0 00-1.476-1.806 3.994 3.994 0 00-5.058.501 4.038 4.038 0 00-1.175 2.845zm4.007 17.717c-.792 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.806 4.042 4.042 0 00.869 4.387 3.99 3.99 0 004.366.873A4.01 4.01 0 0027.08 29.1a4.039 4.039 0 00-.5-5.082 4 4 0 00-2.832-1.18zM34 15.994a4.04 4.04 0 00-.675-2.236 4.01 4.01 0 00-1.798-1.483 3.99 3.99 0 00-4.367.873 4.042 4.042 0 00-.869 4.387 4.02 4.02 0 001.476 1.806 3.993 3.993 0 002.226.678 4.003 4.003 0 002.832-1.18A4.04 4.04 0 0034 15.993z"/><path fill="#5850EC" d="M5.007 11.969c-.793 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.807 4.042 4.042 0 00.869 4.386 4.001 4.001 0 004.366.873 4.011 4.011 0 001.798-1.483 4.038 4.038 0 00-.5-5.08 4.004 4.004 0 00-2.831-1.181z"/>
                </svg>
                <div className="ml-8 font-bold text-lg text-gray-700">Free Access Education.</div>
            </div>
            <div className="flex flex-row ml-32">
                <div>
                    <div className="flex flex-row items-center">
                        <div className=" bg-red-500 inline-block rounded-md p-1 align-middle">
                            <svg className="h-6" xmlns="http://www.w3.org/2000/svg" fill="#E85A4F" viewBox="0 0 24 24" stroke="#FBFAF5">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                        </div>
                        <div className="ml-5 font-bold">+256 779 813 256</div>
                    </div>
                </div>
                <div className="ml-24">
                    <div className="flex flex-row items-center">
                        <div className=" bg-red-500 inline-block rounded-md p-1 align-middle">
                            <svg className="h-6" xmlns="http://www.w3.org/2000/svg" fill="#E85A4F" viewBox="0 0 24 24" stroke="#FBFAF5">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                        </div>
                        <div className="ml-5 align-middle font-bold">info@freeaccesseducation.org</div>
                    </div>
                </div>
                <div  style={{width:"180px"}}></div>
            </div>
        </div>
        <div>
            <div className="flex flex-row justify-between mt-20 ml-5">
                <div className="flex flex-row">
                <div className="flex-col flex">
                    <a href="/" className="font-bold mb-8 text-lg text-black hover:text-red-500 transition duration-150 ease-in-out">Courses</a>
                    <a href="/" className="font-bold mb-8 text-lg  text-black hover:text-red-500 transition duration-150 ease-in-out">Events</a>
                    <a href="/" className="font-bold mb-8 text-lg  text-black hover:text-red-500 transition duration-150 ease-in-out">About</a>
                    <a href="/" className="font-bold mb-8 text-lg  text-black hover:text-red-500 transition duration-150 ease-in-out">Contact</a>
                </div>
                <div className="flex flex-col ml-32">
                    <a href="/" className="font-bold mb-8 text-lg text-black hover:text-red-500 transition duration-150 ease-in-out">Blog</a>
                    <a href="/" className="font-bold mb-8 text-lg text-black hover:text-red-500 transition duration-150 ease-in-out">Account</a>
                    <a href="/" className="font-bold mb-8 text-lg text-black hover:text-red-500 transition duration-150 ease-in-out">Help</a>
                    <a href="/" className="font-bold mb-8 text-lg text-black hover:text-red-500 transition duration-150 ease-in-out">Privacy Policy</a>
                </div>
                </div>
                <div className="ml-48">
                    <div className="font-bold text-lg">
                        Subscribe for Course Updates
                    </div>
                    <div className="mt-5" style={{width:"450px"}}>
                    <input type="text" placeholder="Enter email address" className=" rounded-md appearance-none h-12 outline-none bg-transparent border-2 border-gray-400 pl-5 p-5 hover:border-red-500" style={{width:"450px"}}/>  
                    <div class="absolute mr-4 text-red-500 flex flex-row items-center align-middle">                        
                        
                            <div className="relative bg-red-500 p-1 rounded-md right-0" style={{top:"-43px", left:"405px"}}>                                
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#FBFAF5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>                                
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-xs mt-5 text-red-500 font-semibold ml-5 border-t border-gray-400 pt-3">@ 2020 by Tamale Simon Peter</div>
        </div>
    </div>
</div>


    )
}

export default FooterPage; 
