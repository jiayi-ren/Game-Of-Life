import React from 'react';

const Options = props => {

    const { run, toggle,
        reset, random,
        setSpeed, speed,
        boxSize, setBoxSize
    } = props

    const speedChange = evt => {
        setSpeed(1000 - parseInt(evt.target.value))
    }

    const boxSizeChange = evt => {
        setBoxSize(parseInt(evt.target.value));
    }

    return (
        <div className="options">
            <button onClick={toggle}>{run? 'Pause': 'Start'}</button>
            <button onClick={reset}>Reset</button>
            <button onClick={random}>Random</button>
            <label>Speed
                <input type="range"
                    min="0"
                    max="1000"
                    value={1000-speed}
                    onChange={speedChange}
                ></input>
            </label>
            <label>Grid
                <input type="range"
                    min="10"
                    max="30"
                    value={boxSize}
                    onChange={boxSizeChange}
                ></input>
            </label>
        </div>
    )
}

export default Options;