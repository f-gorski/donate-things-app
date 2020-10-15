import React, { useEffect, useState } from 'react';
import { getSummaryData } from '../../firebase';
import Column from './Column';


const ThreeColumns = (props) => {

    const [summaryData, setSummaryData] = useState([])

    useEffect(() => {
        getSummaryData()
            .then(data => setSummaryData(data))
    }, [])

    const columnsToRender = summaryData.map( (column, idx) => <Column data={column} key={idx} />);

    return (
        <div className={props.className}>
            {columnsToRender}
        </div>
        
    ) 
}

export default ThreeColumns;