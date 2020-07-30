import React from 'react';

const Box = props => {

    const { row, col, selectBox, boxClass, id } = props;

    return (
        <div
            className={boxClass}
            id={id}
            onClick={() => {selectBox(row, col)}}
        />
    )
};

export default Box;