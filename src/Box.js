import React from 'react';

const Box = props => {

    const { row, col, selectBox, boxClass, id } = props;

    const boxSelected = () => {
        selectBox(row, col);
    };

    return (
        <div
            className={boxClass}
            id={id}
            onClick={boxSelected}
        />
    )
};

export default Box;