import React from 'react';
import Box from './Box';

const Grid = props => {

    const { rows,
        cols,
        grid,
        selectBox,
        // color
    } = props
    
    let rowsArray = []
    let boxClass = "" 

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let boxId = i + "_" + j;

            boxClass = grid[i][j] ? "box on" : "box off";
            rowsArray.push(
                <Box
                    boxClass={boxClass}
                    key={boxId}
                    row={i}
                    col={j}
                    selectBox={selectBox}
                    // boxSize={boxSize}
                    // color={color}
                />
            );
        }
    }
    

    return (
        <div className="grid-container" >
            <div className="grid"
                style={{
                display: "grid",
                gridTemplateColumns: `repeat(${cols}, 15px)`
                }}
            >
            {rowsArray}
            </div>
        </div>
    )
};

export default Grid;