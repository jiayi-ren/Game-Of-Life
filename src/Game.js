import React, { useState, useEffect } from 'react';
import Grid from './Grid';
import Options from './Options';

const operations = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
];

const Game = props => {

    const [speed, setSpeed] = useState(1); // speed, 1 generation/100ms
    const [rows, setRows] = useState(25); // row
    const [cols, setCols] = useState(25);
    const [generation, setGeneration] = useState(0);
    const [grid, setGrid] = useState(createGrid(25, 25));
    const [isRunning, setIsRunning] = useState(false);

    function nextGen(gridOriginal, rowsNum, colsNum) {
        let copy = JSON.parse(JSON.stringify(gridOriginal))
        for (let i = 0; i < rowsNum; i++) {
            for (let j = 0; j < colsNum; j++) {
                let neighbors = 0;
                operations.forEach( op => {
                    const newI = i + op[0];
                    const newJ = j + op[1];
                    if (newI >= 0 && newI < rowsNum && newJ >= 0 && newJ < colsNum) {
                        neighbors += gridOriginal[newI][newJ];
                    }
                });
                if (gridOriginal[i][j] === 1) {
                    copy[i][j] = neighbors === 2 || neighbors === 3? 1: 0;
                } else {
                    copy[i][j] = neighbors === 3? 1: 0;
                }
    
            }
        }
        return copy;
    }

    useEffect(() => {
        let timeoutObj = null;
        if (isRunning) {
            timeoutObj = setTimeout(() => {
                const next = nextGen(grid, rows, cols);
                setGeneration(generation + 1);
                setGrid(next);
            }, speed);
        } else {
            clearTimeout(timeoutObj);
        } 
        return () => clearTimeout(timeoutObj);;
    }, [isRunning, generation, rows, cols, grid, speed])

    const selectBox = (row, col) => {
        let gridClone = [...grid];
        gridClone[row][col] =  gridClone[row][col]? 0: 1;
        setGrid(gridClone);
    }

    const randomLexicon = () => {
        let gridClone = JSON.parse(JSON.stringify(createGrid(rows, cols)));
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (Math.floor(Math.random() * 4) === 1) {
                    gridClone[i][j] = 1;
                }
            }
        }
        setGrid(gridClone);
    }

    const toggle = () => {
        setIsRunning(!isRunning);
    }

    const reset = () => {
        setIsRunning(false);
        setGrid(createGrid(rows, cols));
        setGeneration(0);
    }

    return (
        <div>
            <p>Generation: {generation}</p>
            <Grid 
                rows={rows}
                cols={cols}
                selectBox={selectBox}
                grid={grid}
            />
            <Options
                run={isRunning}
                toggle={toggle}
                reset={reset}
                random={randomLexicon}
            />
        </div>
    )
};

function createGrid(rowsNum, colsNum) {
    const rows = [];
    for (let i = 0; i < rowsNum; i++) {
        rows.push(Array.from(Array(colsNum), () => 0));
    }
    return rows;
}


export default Game;