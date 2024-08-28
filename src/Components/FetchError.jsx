import React from 'react'
import Sidebar from './Sidebar'

const FetchError = () => {
  return (
    <>
      <Sidebar />
      <div className="flex items-center justify-center w-full h-[50vh] ">
        <div className=" text-center">
          <p className="text-[44px]">
          Request limit reached
          </p>
          
        </div>
      </div>
    </>
  )
}

export default FetchError