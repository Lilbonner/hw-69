import React from 'react';

const Search:React.FC = () => {
    return (
        <div>
            <h3 className="text-3xl bg-blue-600 text-white h-14 pt-2 pl-5">TV shows</h3>
                <div className="flex ml-5 mt-5">
                    <p>Search for tv shows:</p>
                    <input className="border-gray-300 border-2 rounded-md ml-5"/>
                </div>
        </div>
    );
};

export default Search;