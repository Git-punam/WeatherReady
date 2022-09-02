import React from "react";

export default function CustomHighlightCards({ img,hText,measure,isSunsetDetailsAvailable }) {
    return (
      <>
        {isSunsetDetailsAvailable ? (
          <>
            <div className="flex flex-col justify-center w-[10rem] md:w-[20rem] ml-2 mb-5 h-[15rem]">
              <div className="rounded-3xl	h-full w-full shadow-lg bg-white">
                <div className="w-full h-1/2 flex items-center justify-center">
                  <img src="/weatherIcons/sunrise.png" className="mr-5" width={50} alt="" />
                  <div>
                    {/* {formatter.format(new Date(current.sunrise * 1000))} */}
                    5:59 AM<br/>
                    <span>Sunrise</span>
                  </div>
                </div>
                <div className="w-full h-1/2 flex items-center justify-center">
                  <img src="/weatherIcons/sunset.png" className="mr-5" width={50} alt="" />
                  <div>
                    {/* {formatter.format(new Date(current.sunrise * 1000))} */}
                    5:59 AM<br/>
                    <span>Sunrise</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-center max-w-[10rem] md:max-w-[20rem] ml-2 mb-5 max-h-[15rem]">
              <div className="rounded-3xl	 shadow-lg bg-white">
                <h5 className="text-gray-900 text-center md:text-xl font-medium mb-2">
                  {hText}
                </h5>
                <img
                  className="rounded-t-lg h-1/2 w-full drop-shadow-2xl"
                  src={img}
                  alt="weatherPng"
                />
                <div className="p-0 md:p-6 text-center">
                  <h1 className="text-3xl">{measure}</h1>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
}
