import React from 'react';
import BarChart1 from './chart1.js';
import BarChart2 from './chart2.js';
import BarChart3 from './chart3.js';
import BarChart4 from './chart4.js';

const ChartContainer = ({ activeButton, data }) => {
    return (
        <div style={{ position: 'fixed', top: '20px', left: '140px', width: '1400px', height: '1200px' }}>
            {activeButton === 1 && <BarChart1 data={data}/>} {/* Render Chart1 if Button 1 is active */}
            {activeButton === 2 && <BarChart2 data={data}/>} {/* Render Chart2 if Button 2 is active */}
            {activeButton === 3 && <BarChart3 data={data}/>} {/* Render Chart3 if Button 3 is active */}
            {activeButton === 4 && <BarChart4 data={data}/>} {/* Render Chart4 if Button 4 is active */}
        </div>
    );
};

export default ChartContainer;
