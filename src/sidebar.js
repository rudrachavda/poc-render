import React, { useState } from 'react';
import ChartContainer from './chartcontainer.js';
import data from './data.json'

function Sidebar() {
    const [activeButton, setActiveButton] = useState(null);

    const handleClick = (buttonId) => {
        setActiveButton(buttonId);
        console.log(data)
    };

    return (
        <div className="sidebar bg-gray-200 fixed mt-2 ml-2 mb-1 h-full w-48 p-5 rounded-md flex flex-col">
            
            <button
                className={`mb-2 p-4 text-white bg-${activeButton === 1 ? 'blue' : 'gray'
                    }-700 border-none cursor-pointer rounded-md`}
                onClick={() => handleClick(1)}
            >
            {/* Name */}    One Dimension
            
            </button>

            <button
                className={`mb-2 p-4 text-white bg-${activeButton === 2 ? 'blue' : 'gray'
                    }-700 border-none cursor-pointer rounded-md`}
                onClick={() => handleClick(2)}
            >
            {/* Name */}    Two Dimension
            
            </button>

            <button
                className={`mb-2 p-4 text-white bg-${activeButton === 3 ? 'blue' : 'gray'
                    }-700 border-none cursor-pointer rounded-md`}
                onClick={() => handleClick(3)}
            >
            {/* Name */}    Three Dimension
            
            </button>

            <button
                className={`mb-2 p-4 text-white bg-${activeButton === 4 ? 'blue' : 'gray'
                    }-700 border-none cursor-pointer rounded-md`}
                onClick={() => handleClick(4)}
            >
            {/* Name */}    Four Dimension 
            
            </button>
            
            {/* Conditional rendering of ChartContainer */}
            {activeButton && <ChartContainer activeButton={activeButton} data={data}/>}
        </div>
    );
}

export default Sidebar;
