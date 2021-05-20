import React from 'react'
import { useEffect, useState } from 'react';


const Covid = () => {

    const [data, setData] = useState([]);


    const getCovidData = async () => {
        try {
            const response = await fetch('https://api.covid19india.org/data.json');
            const actualData = await response.json();
            // console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        }
        catch(err) {
            console.log(err);
        }
    
    
    }

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <div className="flex items-center bg-indigo-100 w-screen min-h-screen" style={{fontFamily: 'Muli'}}>
        <div className="container ml-auto mr-auto flex flex-wrap items-start">

            <div className="w-full pl-5 lg:pl-2 mb-4 mt-4 text-center">
            <h1> <span className="animate-pulse font-bold flex justify-center m-3">🔴 LIVE</span> </h1>
            <h1 className="text-3xl lg:text-4xl text-gray-700 font-extrabold">
                COVID-19 LIVE TRACKER 
            </h1>
            </div>
            
            <div className="w-full md:w-1/2 lg:w-1/3 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2 text-center">
            <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                
                <div className="rounded-lg p-4 bg-purple-700 flex flex-col">
                <div>
                    <h5 className="text-white text-2xl font-extrabold leading-none">
                    COUNTRY
                    </h5>
                    {/* <span className="text-xs text-gray-400 leading-none">And then there was Pro.</span> */}
                </div>
                <div className="text-center">
                    <div className="text-xl text-yellow-300 font-bold">
                    INDIA
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2 text-center">
            <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                
                <div className="rounded-lg p-4 bg-purple-700 flex flex-col">
                <div>
                    <h5 className="text-white text-2xl font-extrabold leading-none">
                    TOTAL RECOVERED
                    </h5>
                    {/* <span className="text-xs text-gray-400 leading-none">And then there was Pro.</span> */}
                </div>
                <div className="text-center">
                    <div className="text-xl text-yellow-300 font-bold">
                    {data.recovered}
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2 text-center">
            <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                
                <div className="rounded-lg p-4 bg-purple-700 flex flex-col">
                <div>
                    <h5 className="text-white text-2xl font-extrabold leading-none">
                    TOTAL CONFIRMED
                    </h5>
                    {/* <span className="text-xs text-gray-400 leading-none">And then there was Pro.</span> */}
                </div>
                <div className="text-center">
                    <div className="text-xl text-yellow-300 font-bold">
                    {data.confirmed}
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2 text-center">
            <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                
                <div className="rounded-lg p-4 bg-purple-700 flex flex-col">
                <div>
                    <h5 className="text-white text-2xl font-extrabold leading-none">
                    TOTAL DEATHS
                    </h5>
                    {/* <span className="text-xs text-gray-400 leading-none">And then there was Pro.</span> */}
                </div>
                <div className="text-center">
                    <div className="text-xl text-red-800 font-bold">
                    {data.deaths}
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2 text-center">
            <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                
                <div className="rounded-lg p-4 bg-purple-700 flex flex-col">
                <div>
                    <h5 className="text-white text-2xl font-extrabold leading-none">
                    TOTAL ACTIVE 
                    </h5>
                    {/* <span className="text-xs text-gray-400 leading-none">And then there was Pro.</span> */}
                </div>
                <div className="text-center">
                    <div className="text-xl text-yellow-300 font-bold">
                    {data.active}
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2 text-center">
            <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                
                <div className="rounded-lg p-4 bg-purple-700 flex flex-col">
                <div>
                    <h5 className="text-white text-2xl font-extrabold leading-none">
                    LAST UPDATED
                    </h5>
                    {/* <span className="text-xs text-gray-400 leading-none">And then there was Pro.</span> */}
                </div>
                <div className="text-center">
                    <div className="text-xl text-yellow-300 font-bold">
                    {data.lastupdatedtime}
                    </div>
                </div>
                </div>
            </div>
            </div>
            
            
        </div>
        </div>
    )
}

export default Covid

