import React, { useEffect, useState } from 'react';
import jsonData from './data.json'; 

const JsonParser = () => {
    const [result, setResult] = useState(null);
    console.log(result)
    useEffect(() => {
        const processData = () => {
            const keys = Object.keys(jsonData[0]);

            const uniqueValues = (arr, key) => {
                const mappedValues = arr.map((item) => item[key]);
                const uniqueSet = new Set(mappedValues);
                return Array.from(uniqueSet);
            };

            const names = uniqueValues(jsonData, 'customer');
            const stores = uniqueValues(jsonData, 'store');
            const products = uniqueValues(jsonData, 'product');
            const values = uniqueValues(jsonData, 'value');
            const dates = uniqueValues(jsonData, 'date');

            const processedData = {
                sales: jsonData, // sales represents the main data array
                Index: keys,
                names,
                stores,
                products,
                values,
                dates,
            };
            console.log('Original JSON Data:', jsonData);
            console.log('Processed Data:', processedData);
            setResult(processedData);
        };

        processData();
    }, []);
};

export default JsonParser;