import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function TrailerRegistrationCard() {
    const [name, setName] = useState('');
    const [vehicleNumber, setVehicleNumber] = useState('');
    const [trailerType, setTrailerType] = useState('long bed');
    const [mobileNumber, setMobileNumber] = useState('');
    const [licenseNumber, setLicenseNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [driverImage, setDriverImage] = useState(null);
    const [trailerImage, setTrailerImage] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleFileChange = (e, setter) => {
        setter(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('vehicleNumber', vehicleNumber);
        formData.append('trailerType', trailerType);
        formData.append('mobileNumber', mobileNumber);
        formData.append('licenseNumber', licenseNumber);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('driverImage', driverImage);
        formData.append('trailerImage', trailerImage);

        try {
            const response = await axios.post('http://localhost:5000/api/driver', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Registration success:', response.data);
            console.log('Navigating to driver dashboard');
            navigate('/driver-dashboard');
            
        } catch (err) {
            setError('Registration failed');
            console.error('Registration error:', err);
        }
    };

    // const handleBackToLogin = () => {
    //     navigate('/');
    // };
    

    return (
        <div className="w-full max-w-md mx-autorounded-lg">
            <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Trailer Registration</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Form fields */}
                <div className="flex items-center space-x-4">
                    <label htmlFor="name" className="w-1/3 text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Enter Name'
                        className="w-2/3 px-3 py-2 text-sm border rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                        required
                    />
                </div>

                <div className="flex items-center space-x-4">
                    <label htmlFor="mobileNumber" className="w-1/3 text-sm font-medium text-gray-700">Mobile Number</label>
                    <input
                        type="text"
                        id="mobileNumber"
                        value={mobileNumber}
                        placeholder='Enter Mobile Number'
                        onChange={(e) => setMobileNumber(e.target.value)}
                        className="w-2/3 px-3 py-2 text-sm border rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                        required
                    />
                </div>

                <div className="flex items-center space-x-4">
                    <label htmlFor="licenseNumber" className="w-1/3 text-sm font-medium text-gray-700">License Number</label>
                    <input
                        type="text"
                        id="licenseNumber"
                        value={licenseNumber}
                        placeholder='Enter License'
                        onChange={(e) => setLicenseNumber(e.target.value)}
                        className="w-2/3 px-3 py-2 text-sm border rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                        required
                    />
                </div>

                <div className="flex items-center space-x-4">
                    <label htmlFor="vehicleNumber" className="w-1/3 text-sm font-medium text-gray-700">Vehicle Number</label>
                    <input
                        type="text"
                        id="vehicleNumber"
                        value={vehicleNumber}
                        placeholder='Enter Vehicle Number'
                        onChange={(e) => setVehicleNumber(e.target.value)}
                        className="w-2/3 px-3 py-2 text-sm border rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                        required
                    />
                </div>

                <div className="flex items-center space-x-4">
                    <label htmlFor="trailerType" className="w-1/3 text-sm font-medium text-gray-700">Trailer Type</label>
                    <select
                        id="trailerType"
                        value={trailerType}
                        onChange={(e) => setTrailerType(e.target.value)}
                        className="w-2/3 px-3 py-2 text-sm border rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                    >
                        <option value="long bed">Long Bed</option>
                        <option value="short bed">Short Bed</option>
                        <option value="refrigerated">Refrigerated</option>
                    </select>
                </div>

                <div className="flex items-center space-x-4">
                    <label htmlFor="email" className="w-1/3 text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        placeholder='Enter Email'
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-2/3 px-3 py-2 text-sm border rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                        required
                    />
                </div>

                <div className="flex items-center space-x-4">
                    <label htmlFor="password" className="w-1/3 text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        placeholder='Enter Password'
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-2/3 px-3 py-2 text-sm border rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                        required
                    />
                </div>

                <div className="flex items-center space-x-4">
                    <label htmlFor="driverImage" className="w-1/3 text-sm font-medium text-gray-700">Driver Image</label>
                    <input
                        type="file"
                        id="driverImage"
                        onChange={(e) => handleFileChange(e, setDriverImage)}
                        className="w-2/3 text-sm border rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                        required
                    />
                </div>

                <div className="flex items-center space-x-4">
                    <label htmlFor="trailerImage" className="w-1/3 text-sm font-medium text-gray-700">Trailer Image</label>
                    <input
                        type="file"
                        id="trailerImage"
                        onChange={(e) => handleFileChange(e, setTrailerImage)}
                        className="w-2/3 text-sm border rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                        required
                    />
                </div>

                {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                <button
                    type="submit"
                    className="w-full px-4 py-2 rounded-lg text-white bg-indigo-700 rounded-lg hover:bg-green-50 hover:text-black transition duration-300 ease-in-out transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Register Trailer
                </button>
            </form>
        </div>
    );
}

export default TrailerRegistrationCard;
