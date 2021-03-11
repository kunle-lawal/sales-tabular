import React, {useEffect, useState} from 'react';

export default function Calculate({data}) {
    const [salesData, setSalesData] = useState(data);
    const [average, setAverage] = useState([]);
    const [median, setMedian] = useState([]);
    const [total, setTotal] = useState([]);
    useEffect(() => {
        setSalesData(data);
    }, [data])
    useEffect(() => {
        let sum = 0, getMed = [];
        let avg = [], med = [], total = [];
        for(let i = 1; i < salesData[1].length; i++) {
            for(var j = 1; j < salesData.length; j++) {
                sum += Number(salesData[j][i]);
                getMed.push(Number(salesData[j][i]));
            }
            med.push(calcMedian(getMed));
            avg.push(Math.floor(sum/(j - 1)));
            total.push(sum);
            sum = 0;
            getMed = [];
        }
        setAverage(avg);
        setMedian(med);
        setTotal(total);
    }, [salesData]);

    let calcMedian = (array) => {
        let sortedArr = array.sort((a, b) => {
            return a - b;
        });
        let midValue = Math.floor(sortedArr.length / 2);
        return sortedArr.length % 2 !== 0 ? sortedArr[midValue] : (sortedArr[midValue - 1] + sortedArr[midValue])/2;
    }

    return (
        <>
            <tr>
                <th className={`column1`} className="table-item row-header" id={'avg'}></th>
                {average.map((item, index) => {
                    return (
                        <td key={index} className="table-item row-item">&nbsp;</td>
                    )
                })}
            </tr>

            <tr>
                <th className={`column1`} className="table-item row-header calculate" id={'avg'}>Avg.</th>
                {average.map((item, index) => {
                    return (
                        <td key={index} className="table-item row-item calculate">{item}</td>
                    )
                })}
            </tr>

            <tr>
                <th className={`column1`} className="table-item row-header calculate" id={'med'}>Med.</th>
                {median.map((item, index) => {
                    return (
                        <td key={index} className="table-item row-item calculate">{item}</td>
                    )
                })}
            </tr>

            <tr>
                <th className={`column1`} className="table-item row-header calculate" id={'total'}>Total</th>
                {total.map((item, index) => {
                    return (
                        <td key={index} className="table-item row-item calculate">{item}</td>
                    )
                })}
            </tr>
        </>
    )
}


{/* <tr>
                        <th className={`column1`} className="table-item row-header" id={'avg'}>Avg.</th>
                    </tr>
                    <th className={`column1`} className="table-item row-header" id={'med'}>Med.</th>
                    <th className={`column1`} className="table-item row-header" id={'total'}>Total</th> */}