import React from 'react';
import ReactECharts from 'echarts-for-react';

const Charts2 = ({ data }) => {
    // Aggregate values for each date
    const aggregatedData = {};
    data.forEach((entry) => {
        const { date, value } = entry;
        if (aggregatedData[date]) {
            aggregatedData[date] += value;
        } else {
            aggregatedData[date] = value;
        }
    });

    // Convert the aggregated data into an array of arrays with X and Y values
    const scatterPlotData = Object.entries(aggregatedData).map(([date, value]) => [date, value]);
    console.log('SPD', scatterPlotData); // Console log for scatter plot data

    // Aggregate values for each store and date
    const aggregatedStoreData = {};
    data.forEach((entry) => {
        const { store, date, value } = entry;
        if (!aggregatedStoreData[store]) {
            aggregatedStoreData[store] = {};
        }
        if (aggregatedStoreData[store][date]) {
            aggregatedStoreData[store][date] += value;
        } else {
            aggregatedStoreData[store][date] = value;
        }
    });

    // Convert the aggregated store data into the required format for the stacked line chart
    const stackedLineChartSeries = Object.keys(aggregatedStoreData).map((store) => ({
        name: store,
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
            focus: 'series',
        },
        data: Object.values(aggregatedStoreData[store]),
    }));
    console.log('SLCS', stackedLineChartSeries); // Console log for stacked line chart series

    const scatterPlotOption = {
        title: {
            text: 'Sales by Date (Scatterplot)',
        },
        xAxis: {
            type: 'category', // Use category axis for X-axis with string values
            data: Object.keys(aggregatedData), // Set X-axis data to the array of dates
        },
        yAxis: {
            type: 'value', // Use value axis for Y-axis
        },
        series: [
            {
                symbolSize: 20,
                data: scatterPlotData,
                type: 'scatter',
            },
        ],
    };

    const stackedLineChartOption = {
        title: {
            text: 'Stacked Area Chart',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985',
                },
            },
        },
        legend: {
            data: Object.keys(aggregatedStoreData),
        },
        toolbox: {
            feature: {
                saveAsImage: {},
            },
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: Object.keys(aggregatedStoreData[Object.keys(aggregatedStoreData)[0]]), // Assuming all stores have the same dates
            },
        ],
        yAxis: [
            {
                type: 'value',
            },
        ],
        series: stackedLineChartSeries,
    };

    const [showScatterPlot, setShowScatterPlot] = React.useState(true);

    const handleToggleChart = () => {
        setShowScatterPlot((prevShowScatterPlot) => !prevShowScatterPlot);
    };

    return (
        <div style={{ position: 'fixed', top: '20px', left: '380px', width: '1000px', height: '800px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h3 style={{ marginRight: '10px' }}>Chart Type:</h3>
                <button onClick={handleToggleChart}>
                    {showScatterPlot ? 'Show Stacked Line Chart' : 'Show Scatterplot'}
                </button>
            </div>
            {showScatterPlot ? (
                <ReactECharts option={scatterPlotOption} style={{ width: '100%', height: '400px' }} />
            ) : (
                <ReactECharts option={stackedLineChartOption} style={{ width: '100%', height: '400px' }} />
            )}
        </div>
    );
};

export default Charts2;
