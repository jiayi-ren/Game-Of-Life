import React, { useState, useEffect } from 'react';
import Grid from './Grid';
import Options from './Options';

const Game = props => {

    const initialGrid = createGrid(25, 25)

    const [speed, setSpeed] = useState(1000); // speed, 1 generation/100ms
    const [rows, setRows] = useState(25); // row
    const [cols, setCols] = useState(25);
    const [generation, setGeneration] = useState(0);
    const [grid, setGrid] = useState(initialGrid);
    const [intervalId, setIntervalId] = useState(null);

    const selectBox = (row, col) => {
        let gridClone = Array.from(grid);
        gridClone[row][col] = !gridClone[row][col];
        setGrid(gridClone);
    }

    const randomLexicon = () => {
        let gridClone = Array.from(createGrid(rows, cols));
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (Math.floor(Math.random() * 4) === 1) {
                    gridClone[i][j] = true;
                }
            }
        }
        setGrid(gridClone);
    }

    const play = (gridLast, gen) => {
        console.log("play")

        let gridClone = Array.from(gridLast);

        // game rules

        setGrid(gridClone);
        setGeneration(gen);
    }

    const start = () => {
        console.log("start");
        clearInterval(intervalId);
       
        let counter = generation;

        const interval = setInterval(() => {
            let gridLast = Array.from(grid);
            play(gridLast, ++counter)
        }, speed);
        setIntervalId(interval);
    }

    const stop = () => {
        console.log("stop")
        clearInterval(intervalId);
    }

    const reset = () => {
        console.log("reset")
        clearInterval(intervalId);
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
                start={start}
                stop={stop}
                reset={reset}
                random={randomLexicon}
                setSpeed={setSpeed}
                speed={speed}
            />
        </div>
    )
};

function createGrid(rows, cols) {
    return Array(rows).fill().map(() => Array(cols).fill(false));
}

export default Game;