import React, { useEffect, useState } from 'react';
import jsonData from './data.json'; 

const JsonParser = () => {
    const [result, setResult] = useState(null);

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

            setResult(processedData);
        };

        processData();
    }, []);

    return (
        <div>
            <h1>Processed JSON Data</h1>
            {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
        </div>
    );
};

export default JsonParser;
