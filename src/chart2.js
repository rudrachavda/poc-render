import React, { useEffect } from 'react';
// import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

const BarChart2 = ({ data }) => {
    useEffect(() => {
        renderChart(data); // Call the renderChart function with the data when the component mounts
    }, [data]);

    const renderChart = (data) => {
        console.log(data);
        const stores = [...new Set(data.map((entry) => entry.store))];
        const datasetWithFilters = [];
        const seriesList = [];
        echarts.util.each(stores, function (store) {
            var datasetId = 'dataset_' + store;
            datasetWithFilters.push({
                id: datasetId,
                fromDatasetId: 'dataset_raw',
                transform: {
                    type: 'filter',
                    config: {
                        and: [
                            { dimension: 'store', '=': store }, // Use 'store' property from the data for filtering
                        ],
                    },
                },
            });
            seriesList.push({
                type: 'line', // Use line chart type
                datasetId: datasetId,
                showSymbol: false,
                name: store,
                encode: {
                    x: 'date', // Use 'date' property from the data for the x-axis
                    y: 'value', // Use 'value' property from the data for the y-axis
                },
                label: {
                    show: true,
                    formatter: function (params) {
                        return params.value[3] + ': ' + params.value[0];
                    },
                },
            });
        });

        const option = {
            animationDuration: 1000, // Reduced animation duration for quicker rendering
            dataset: [
                {
                    id: 'dataset_raw',
                    source: data.map((entry) => ({
                        ...entry,
                        date: new Date(entry.date), // Convert the date string to Date objects
                    })),
                },
                ...datasetWithFilters,
            ],
            title: {
                text: 'Income of Different Stores Over Time',
            },
            tooltip: {
                trigger: 'axis',
            },
            xAxis: {
                type: 'time', // Time-based x-axis
            },
            yAxis: {
                name: 'Value',
                min: 120,
            },
            grid: {
                right: 140,
            },
            series: seriesList,
        };

        // Render the chart using the 'option' configuration
        const chartDom = document.getElementById('main'); // Assuming you have a <div> element with id 'main' to render the chart
        const myChart = echarts.init(chartDom);
        myChart.setOption(option);
    };

    return <div id="main" style={{ height: '300px' }} />; // Placeholder <div> for rendering the chart
};

export default BarChart2;


