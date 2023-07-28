import React, { useEffect } from 'react';
import ReactECharts from 'echarts-for-react';

const BarChart4 = ({ data }) => {
    useEffect(() => {
        console.log('from barchart4', data);
    }, [data]);

    const option = {
        xAxis: {
            type: 'category',
            data: data.map((entry) => entry.date), // Use the 'date' property from the data array
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                data: data.map((entry) => entry.value), // Use the 'value' property from the data array
                type: 'bar',
            },
        ],
    };

    return <ReactECharts option={option} style={{ height: '300px' }} />;
};

export default BarChart4;
