import React, { useEffect } from 'react';

const Box = props => {

    const { row, col, selectBox, boxClass, id, boxSize } = props;

    useEffect(() => {
        console.log(boxSize)
        const boxes = document.getElementsByClassName("box")
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.width = `${boxSize}px`;
            boxes[i].style.height= `${boxSize}px`;
        }
        console.log(boxes)
    }, [boxSize])

    return (
        <div
            className={boxClass}
            id={id}
            onClick={() => {selectBox(row, col)}}
        />
    )
};

export default Box;