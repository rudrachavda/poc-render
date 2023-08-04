import React from 'react';


import Charts1 from './Dim1.js';
import Charts2 from './Dim2.js';
import Charts3 from './Dim3.js';
import Charts4 from './Dim4.js';

const ChartContainer = ({ activeButton, data }) => {
    return (
        <div>
            {activeButton === 1 && <Charts1 data={data}/>} {/* Render Chart when button active */}
            {activeButton === 2 && <Charts2 data={data}/>} 
            {activeButton === 3 && <Charts3 data={data}/>} 
            {activeButton === 4 && <Charts4 data={data}/>} 
        </div>
    );
};

export default ChartContainer;
