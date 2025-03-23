// src/components/SearchBar.jsx
import { useState } from 'react';
// { onSearch }
const SearchBar = () => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // onSearch(query);
    };

    return (
        <div className="bg-white p-4 rounded shadow mb-6">
            <h2 className="text-xl font-bold mb-4">Search Trailers</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={handleChange}
                    placeholder="Search by vehicle number, mobile number, or email"
                    className="w-full px-3 py-2 border rounded"
                />
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded mt-2">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;
