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

    let w = window.innerWidth;
    let h = window.innerHeight;

    const initRows = calGridSize(w,h,20).rows-1;
    const initCols = calGridSize(w,h,20).cols-1;

    const [speed, setSpeed] = useState(500); // speed, 1 generation/500ms
    const [rows, setRows] = useState(initRows);
    const [cols, setCols] = useState(initCols);
    const [generation, setGeneration] = useState(0);
    const [grid, setGrid] = useState(createGrid(initRows, initCols));
    const [isRunning, setIsRunning] = useState(false);
    const [boxSize, setBoxSize] = useState(20);

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
        const newRows = calGridSize(w,h,boxSize).rows-1;
        const newCols = calGridSize(w,h,boxSize).cols-1;
        setRows(newRows);
        setCols(newCols);
    }, [boxSize, w, h])

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
            <h1><span>John Conway's</span> Game of Life</h1>
            <h2>Generation: {generation}</h2>
            <Grid 
                rows={rows}
                cols={cols}
                selectBox={selectBox}
                grid={grid}
                boxSize={boxSize}
            />
            <Options
                run={isRunning}
                toggle={toggle}
                reset={reset}
                random={randomLexicon}
                setRows={setRows}
                setCols={setCols}
                speed={speed}
                setSpeed={setSpeed}
                boxSize={boxSize}
                setBoxSize={setBoxSize}
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

function calGridSize(width, height, boxSize) {
    let rows = Math.floor(height*0.7 / boxSize);
    let cols = Math.floor(width*0.9 / boxSize);

    return {rows, cols};
}

export default Game;