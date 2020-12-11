import React from 'react';
//import Svg from './svg';

import './faq.css';

function FAQ() {
    return (
        <div className="pt-24 pb-20" style={{backgroundColor:"#EAE7DC"}}>
            <div className="container mx-auto">
                <div>
                    <h2 className=" text-4xl font-extrabold text-red-500 leading-10">
                    Frequently Asked Questions?
                    </h2>
                </div>
                <div className="align-middle">
                    <div className="mt-20"> 
                    <div className="w-1/2 rounded-sm mb-5 cursor-pointer flex justify-between px-4 py-2 bg-white"> 
                        <h2 className="text-xl font-semibold inline-block">How can i sign up for new content?</h2>                   
                        <div className=" svg-button inline-block align-middle rounded shadow-md">
                            <svg className="h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <div className="w-1/2 rounded-sm mb-5 flex justify-between px-4 py-2 bg-white"> 
                        <h2 className="text-xl font-semibold inline-block">How can i get access to past papers?</h2>                   
                        <div className=" svg-button inline-block align-middle rounded shadow-md">
                            <svg className="h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div> 
                    <div className="w-1/2 rounded-sm mb-5 flex justify-between px-4 py-2 bg-white"> 
                        <h2 className="text-xl font-semibold inline-block">How can I get in touch with the content teachers?</h2>                   
                        <div className=" svg-button inline-block align-middle rounded shadow-md">
                            <svg className="h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div> 
                    <div className="w-1/2 rounded-sm mb-5 flex justify-between px-4 py-2 bg-white"> 
                        <h2 className="text-xl font-semibold inline-block">Is all content free?</h2>                   
                        <div className=" svg-button inline-block align-middle rounded shadow-md">
                            <svg className="h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div> 
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FAQ

