import React from 'react'

function PopularContent () {
    return (
<div className="pt-24">
    <div className="container mx-auto">
        <div className="flex flex-row justify-between">
            <h2 className=" text-4xl font-extrabold text-red-500 leading-10">
                Popular Content
            </h2>
            <div>
                <div className="border-2 inline-block p-1 rounded cursor-pointer" style={{ borderBlockColor: "#6B6A65" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-8 text-red-400" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                    </svg>
                </div>
                <div className="border-2 ml-2 inline-block rounded cursor-pointer p-1" style={{ borderBlockColor: "#6B6A65" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-8 text-red-400" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                </div>
            </div>
        </div>
        <div className="flex justify-center">
            <div className="p-5 shadow-md rounded-lg mt-12 inline-block mr-12">
                <div className="p-3 shadow object-center rounded-b-none rounded-lg" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)", backgroundSize: "cover", height: "325px", width: "20rem" }}></div>
                <div className="relative w-20" style={{ marginLeft: "15px", bottom: "2rem" }}>
                    <img className="rounded-lg border-4 border-white" src="https://randomuser.me/api/portraits/men/17.jpg" alt=""/>
                </div>
                <div className="w-2/3 font-bold">
                    Understanding Quadratic Equations easily.
                </div>
                <div className="mt-6 border-t-2 border-gray-200">
                    <div className="mt-5 flex flex-row items-center">
                        <div className="border-red-200 border-2 rounded p-1 mr-5">
                            <svg className="h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#E85A4F">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                            </svg>
                        </div>
                        <div className="flex flex-row items-center">
                            <div className="border-red-200 border-2 rounded p-1">
                                <svg className="h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#E85A4F">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                                </svg>
                            </div>
                            <span className="ml-2 font-bold text-gray-600">20K</span>
                        </div>
                        <div className="flex flex-row ml-5 items-center">
                            <div className="border-red-200 border-2 rounded p-1">
                                <svg className="h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#E85A4F">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <span className="ml-2 font-bold text-gray-600">1h 30m</span>
                        </div>
                        <div className="ml-5 bg-red-500 border-2 rounded-lg w-20 p-1 flex flex-row justify-center items-center">
                            <div>
                                <svg className="h-4" xmlns="http://www.w3.org/2000/svg" fill="#FBFAF5" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                                </svg>
                            </div>
                            <div className="ml-1 font-bold text-red-500" style={{ color: "#FBFAF5" }}>4.5</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* delete this */}

            <div className="p-5 shadow-md rounded-lg mt-12 inline-block mr-12">
                <div className="p-3 shadow object-center rounded-b-none rounded-lg" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80)", backgroundSize: "cover", height: "325px", width: "20rem" }}></div>
                <div className="relative w-20" style={{ marginLeft: "15px", bottom: "2rem" }}>
                    <img className="rounded-lg border-4 border-white" src="https://randomuser.me/api/portraits/women/18.jpg" alt=""/>
                </div>
                <div className="w-2/3 font-bold">
                    Transportation in Organism.<br></br>
                    A' Level Biology
                </div>
                <div className="mt-6 border-t-2 border-gray-200">
                    <div className="mt-5 flex flex-row items-center">
                        <div className="border-red-200 border-2 rounded p-1 mr-5">
                            <svg className="h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#E85A4F">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                            </svg>
                        </div>
                        <div className="flex flex-row items-center">
                            <div className="border-red-200 border-2 rounded p-1">
                                <svg className="h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#E85A4F">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                                </svg>
                            </div>
                            <span className="ml-2 font-bold text-gray-600">15K</span>
                        </div>
                        <div className="flex flex-row ml-5 items-center">
                            <div className="border-red-200 border-2 rounded p-1">
                                <svg className="h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#E85A4F">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <span className="ml-2 font-bold text-gray-600">2h 00m</span>
                        </div>
                        <div className="ml-5 bg-red-500 border-2 rounded-lg w-20 p-1 flex flex-row justify-center items-center">
                            <div>
                                <svg className="h-4" xmlns="http://www.w3.org/2000/svg" fill="#FBFAF5" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                                </svg>
                            </div>
                            <div className="ml-1 font-bold text-red-500" style={{ color: "#FBFAF5" }}>4.0</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-5 shadow-md rounded-lg mt-12 inline-block mr-12">
                <div className="p-3 shadow object-center rounded-b-none rounded-lg" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1472173148041-00294f0814a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)", backgroundSize: "cover", height: "325px", width: "20rem" }}></div>
                <div className="relative w-20" style={{ marginLeft: "15px", bottom: "2rem" }}>
                    <img className="rounded-lg border-4 border-white" src="https://randomuser.me/api/portraits/men/20.jpg" alt=""/>
                </div>
                <div className="w-2/3 font-bold">
                    Pan Africanism - A Level General History.
                </div>
                <div className="mt-6 border-t-2 border-gray-200">
                    <div className="mt-5 flex flex-row items-center">
                        <div className="border-red-200 border-2 rounded p-1 mr-5">
                            <svg className="h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#E85A4F">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                            </svg>
                        </div>
                        <div className="flex flex-row items-center">
                            <div className="border-red-200 border-2 rounded p-1">
                                <svg className="h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#E85A4F">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                                </svg>
                            </div>
                            <span className="ml-2 font-bold text-gray-600">20K</span>
                        </div>
                        <div className="flex flex-row ml-5 items-center">
                            <div className="border-red-200 border-2 rounded p-1">
                                <svg className="h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#E85A4F">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <span className="ml-2 font-bold text-gray-600">1h 30m</span>
                        </div>
                        <div className="ml-5 bg-red-500 border-2 rounded-lg w-20 p-1 flex flex-row justify-center items-center">
                            <div>
                                <svg className="h-4" xmlns="http://www.w3.org/2000/svg" fill="#FBFAF5" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                                </svg>
                            </div>
                            <div className="ml-1 font-bold text-red-500" style={{ color: "#FBFAF5" }}>4.5</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        {/* delete this after dynamic */}
        
    </div>
</div>

    );
}

export default PopularContent 
