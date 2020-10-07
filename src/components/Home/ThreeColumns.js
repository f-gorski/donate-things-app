import React, { useEffect, useState } from 'react';
import { getSummaryData } from '../../firebase';
import Column from './Column';


const ThreeColumns = (props) => {

    const SUMMARY = [
        {
            counter: 10,
            header: "Oddanych worków",
            text: "Lorem ipsum first"
        },
        {
            counter: 5,
            header: "Wspartych organizacji",
            text: "Lorem ipsum second"
        },
        {
            counter: 7,
            header: "Zorganizowanych zbiórek",
            text: "Lorem ipsum third"
        }
    ];

    const [summaryData, setSummaryData] = useState([])

    useEffect(() => {
        getSummaryData()
            .then(data => setSummaryData(data))
    }, [])

    const columnsToRender = summaryData.map( column => <Column data={column} />);

    return (
        <div className={props.className}>
            {columnsToRender}
        </div>
        
    ) 
}

export default ThreeColumns;