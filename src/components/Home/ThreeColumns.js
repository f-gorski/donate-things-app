import React from 'react';

import Column from './Column';

const columnData = [
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


const ThreeColumns = (props) => {

    const columnsToRender = columnData.map( column => <Column data={column} />);

    return (
        <div className={props.className}>
            {columnsToRender}
        </div>
        
    ) 
}

export default ThreeColumns;