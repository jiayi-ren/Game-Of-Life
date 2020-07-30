import React from 'react';

const Options = props => {

    const { run, toggle,
        next,
        reset, random,
        setSpeed, speed,
        // boxSize, setBoxSize
        // color, setColor
    } = props

    const speedChange = evt => {
        setSpeed(1000 - parseInt(evt.target.value))
    }

    // const boxSizeChange = evt => {
    //     setBoxSize(parseInt(evt.target.value));
    // }

    // const colorChange = evt => {
    //     setColor(evt.target.value);
    // }

    return (
        <div className="options">
            <button onClick={next}>Next</button>
            <button onClick={toggle}>{run? 'Pause': 'Start'}</button>
            <button onClick={reset}>Reset</button>
            <button onClick={random}>Random</button>
            <label>Speed
                <input type="range"
                    name="speed"
                    min="0"
                    max="1000"
                    value={1000-speed}
                    onChange={speedChange}
                ></input>
            </label>
            {/* <label>Grid
                <input type="range"
                    min="15"
                    max="30"
                    value={boxSize}
                    onChange={boxSizeChange}
                ></input>
            </label> */}
            {/* <label>Color
                <input type="color"
                    name="color"
                    value={color}
                    onChange={colorChange}
                ></input>
            </label> */}
        </div>
    )
}

export default Options;