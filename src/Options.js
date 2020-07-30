import React from 'react';

const Options = props => {

    const { run, toggle, reset, random, setSpeed, speed } = props

    const speedChange = evt => {
        setSpeed(1000 - parseInt(evt.target.value))
    }

    return (
        <div>
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
        </div>
    )
}

export default Options;