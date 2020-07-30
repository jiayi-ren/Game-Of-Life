import React from 'react';

const Box = props => {

    const { row, col,
        selectBox,
        boxClass,
        id,
        // color
    } = props;

    // useEffect(() => {
    //     // console.log(boxSize)
    //     const boxes = document.getElementsByClassName("box")
    //     for (let i = 0; i < boxes.length; i++) {
    //         boxes[i].style.width = `${boxSize}px`;
    //         boxes[i].style.height= `${boxSize}px`;
    //     }
    //     // console.log(boxes)
    // }, [boxSize])

    // const onMouseOver = evt => {
    //     console.log(evt.target.style.backgroundColor)
    //     evt.target.style.backgroundColor = `${color}`
    // }

    // const onMouseOut = evt => {
    //     if (evt.target.style.backgroundColor !== `${color}`) {
    //         evt.target.style.backgroundColor = "#FFFFFF"
    //     }
    // }

    return (
        <div
            className={boxClass}
            id={id}
            onClick={() => {selectBox(row, col)}}
            // onMouseEnter={onMouseOver}
            // onMouseLeave={onMouseOut}
        />
    )
};

export default Box;