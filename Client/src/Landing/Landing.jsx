import { useState } from 'react';
import LoginCard from './components/LogInCard'; // Ensure this is the correct path
import TrailerRegistrationCard from './components/DriverRegistrationCard'; // Ensure this is the correct path

function Landing() {
    const [showRegistration, setShowRegistration] = useState(false);

    

    return (
        <div className="flex h-screen bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url('./bg2048-153.jpeg')` }} >
            {/* Left Half */}
            <div className="flex flex-1 mt-14">
                <div className=" text-blue-700">
                    {/* <img src="./logo.png" alt="Logo" className="mx-auto mb-4" /> */}
                    <h2 className="text-7xl font-bold mb-4 ml-40 tracking-wider">Welcome to </h2>
                    <h1 className="text-6xl font-bold mb-5 ml-40 tracking-wide">OptiYard <span className=" text-yellow-500">※</span></h1>
                    {/* <p className="text-2lg ml-40 tracking-wide">your yard optimizer</p> */}
                </div>
            </div>
            {/* Right Half */}
            <div className="flex flex-1 items-center justify-center">
                <div className="bg-opacity-90 rounded-lg w-full p-8 backdrop-blur-sm flex items-center justify-center h-full  bg-black/5 rounded-xl shadow-lg ring-1 ring-black/5">
                    <div className="w-full max-w-lg">
                        {showRegistration ? (
                            <TrailerRegistrationCard />
                        ) : (
                            <div className="space-y-4 mt-15">
                                <LoginCard />
                                <button
                                    onClick={() => setShowRegistration(true)}
                                    className="w-full px-4 py-2 mt-15 text-white bg-indigo-700 rounded-lg hover:bg-green-50 hover:text-black transition duration-300 ease-in-out transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-black"
                                >
                                    New Driver Registration
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
