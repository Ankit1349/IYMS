import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Perform any logout logic here, like clearing tokens
        navigate('/'); // Redirect to the landing page
    };

    return (
        <header className="flex items-center justify-between bg-indigo-700 p-4 shadow-md">
            <div className="flex items-center text-white">
                <h2 className="text-2xl font-bold"><span className=" text-yellow-500">※</span>Admin Dashboard</h2>
            </div>
            <nav className="flex-1 flex items-center justify-center space-x-6">
                <span className="text-gray-300 text-2lg cursor-pointer hover:text-white">Overview</span>
                <span className="text-gray-300 text-2lg cursor-pointer hover:text-white">Manage Users</span>
                <span className="text-gray-300 cursor-pointer hover:text-white">Warehouse</span>
                <span className="text-gray-300 cursor-pointer hover:text-white">Analytics Report</span>
            </nav>
            <button 
                    onClick={handleLogout} 
                    className="p-2 rounded bg-red-500 text-white ml-4 hover:bg-red-600 justify-end">
                    Log Out
                </button>
        </header>
    );
};

export default NavBar;
