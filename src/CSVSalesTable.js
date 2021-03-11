import React, {useEffect, useState} from 'react';
import Calculate from './Calculate'

export default function CSVSalesTable({csvData}) {
    const [salesData, setSalesData] = useState(csvData);
    let header = csvData[0];
    useEffect(() => {
        setSalesData(csvData);
    }, [csvData])
    return (
        <div className='table-container'>
            <table>
                <thead>
                    <tr>
                        {/* <th className="column1"></th> */}
                        {
                            header.map((giveType, index) => {
                                return (
                                    <th id={`column${index+1}`} className="table-item row-item" key={index} id={index}>{giveType}</th>
                                )
                            })
                        }
                    </tr>
                </thead>

                <tbody>
                    {
                        salesData.map((row, index) => {
                            if(index > 0) {
                                return (
                                    <tr key={index} id={index}>
                                        <th className={`column1`} className="table-item row-header" id={index}>{row[0]}</th>
                                        {
                                            row.map((data, index) => {
                                                if(index > 0) {
                                                    return (
                                                        <td key={index} className="table-item row-item">{row[index]}</td>
                                                    )
                                                }
                                            })
                                        }
                                    </tr>
                                )
                            }
                        })
                    }
                    <Calculate
                        data={salesData}
                    />
                </tbody>
            </table>
        </div>
    );
}