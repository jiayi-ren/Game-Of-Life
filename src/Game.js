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

    // let w = window.innerWidth;
    // let h = window.innerHeight;

    // const initRows = calGridSize(w,h,20).rows-1;
    // const initCols = calGridSize(w,h,20).cols-1;

    const [speed, setSpeed] = useState(500); // speed, 1 generation/500ms
    const [rows, setRows] = useState(30);
    const [cols, setCols] = useState(50);
    const [generation, setGeneration] = useState(0);
    const [grid, setGrid] = useState(createGrid(30, 50));
    const [isRunning, setIsRunning] = useState(false);
    // const [boxSize, setBoxSize] = useState(20);
    // const [color, setColor] = useState("#000000")

    // Game Rule Algorithm
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

    // Grid Size Control
    // useEffect(() => {
    //     const newRows = calGridSize(w,h,boxSize).rows-1;
    //     const newCols = calGridSize(w,h,boxSize).cols-1;
    //     setRows(newRows);
    //     setCols(newCols);
    // }, [boxSize, w, h])

    // Running Game
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

    // Box Color Control
    // useEffect(() => {
        // const boxes = document.getElementsByClassName("box")
        // for (let i = 0; i< boxes.length; i++ ) {
        //     boxes[i]. = `${color}`
        // }
        // const boxesOn = document.getElementsByClassName("on")
        // for (let i = 0; i< boxesOn.length; i++ ) {
        //     boxesOn[i].style.backgroundColor = `${color}`
        // }
        // const boxesOff = document.getElementsByClassName("off")
        // for (let i = 0; i< boxesOff.length; i++ ) {
        //     boxesOff[i].style.backgroundColor = "#ffffff"
        // }
    // }, [color,grid])

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

    const next = () => {
        const next = nextGen(grid, rows, cols);
        setGeneration(generation + 1);
        setGrid(next);
    }

    return (
        <div className="game">
            <div className="header">
                <h2>John Conway's</h2>
                <h1>Game of Life</h1>
            </div>
            <div className="game-screen">
                <h2>Generation: {generation}</h2>
                <Grid 
                    rows={rows}
                    cols={cols}
                    selectBox={selectBox}
                    grid={grid}
                    // boxSize={boxSize}
                    // color={color}
                />
                <Options
                    next={next}
                    run={isRunning}
                    toggle={toggle}
                    reset={reset}
                    random={randomLexicon}
                    setRows={setRows}
                    setCols={setCols}
                    speed={speed}
                    setSpeed={setSpeed}
                    // boxSize={boxSize}
                    // setBoxSize={setBoxSize}
                    // color={color}
                    // setColor={setColor}
                />
            </div>
            <div className="game-description">
                <h2>The Rules <span><a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">from Wiki</a></span></h2>
                <p>1. Any live cell with two or three live neighbours survives.</p>
                <p>2. Any dead cell with three live neighbours becomes a live cell.</p>
                <p>3. All other live cells die in the next generation. Similarly, all other dead cells stay dead.</p>  
                <h2>About This</h2>    
                <p>&nbsp;&nbsp;&nbsp;&nbsp;The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves. It is Turing complete and can simulate a universal constructor or any other Turing machine.</p>
                <h3>site created by <span><a href="https://github.com/jiayi-ren">Jiayi Ren</a></span></h3>
            </div>
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

// function calGridSize(width, height, boxSize) {
//     let rows = Math.floor(height*0.7 / boxSize);
//     let cols = Math.floor(width*0.9 / boxSize);

//     return {rows, cols};
// }

export default Game;