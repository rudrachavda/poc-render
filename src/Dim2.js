import React from 'react';
import ReactECharts from 'echarts-for-react';

const Charts2 = ({ data }) => {
    // Create an object to store the customer values
    const customerData = {};

    // Loop through the data array and aggregate the values for each customer
    data.forEach((entry) => {
        const { customer, value } = entry;
        if (customerData[customer]) {
            customerData[customer] += value;
        } else {
            customerData[customer] = value;
        }
    });

    // Convert the aggregated customer data into the required format for the pie chart
    const pieChartData = Object.entries(customerData).map(([name, value]) => ({ name, value }));

    console.log('pieChartData:',pieChartData);
    const option1 = {
        title: {
            text: 'Customer Sales',
            subtext: 'Data on Consumer',
            left: 'center',
        },
        tooltip: {
            trigger: 'item',
        },
        legend: {
            orient: 'vertical',
            left: 'left',
        },
        series: [
            {
                name: 'Sales',
                type: 'pie',
                radius: '50%',
                data: pieChartData, // Use the modified data for the pie chart
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                    },
                },
            },
        ],
    };

    const option2 = {
        title: {
            text: 'Store View',
        },
        xAxis: {
            type: 'category',
            data: data.map((entry) => entry.date),
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                data: data.map((entry) => entry.value * 2), // Just an example, you can adjust the data as per your requirements
                type: 'line',
            },
        ],
    };

    const option3 = {
        title: {
            text: 'Product/Sales View',
        },
        xAxis: {
            type: 'category',
            data: data.map((entry) => entry.date),
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                data: data.map((entry) => entry.value / 2), // Just an example, you can adjust the data as per your requirements
                type: 'bar',
            },
        ],
    };

    return (
        
        <div>
            <div>
            <ReactECharts option={option1} style={{ position: 'fixed', bottom: '270px', left: '210px', width: '600px', height: '400px' }} />
            </div>
            
            <div>
            <ReactECharts option={option2} style={{ position: 'fixed', top: '20px', left: '830px', width: '600px', height: '400px' }} />
            </div>

            <div>
            <ReactECharts option={option3} style={{ position: 'fixed', top: '420px', left: '210px', width: '600px', height: '400px' }} />
            </div>
        </div>
    );
};

export default Charts2;
