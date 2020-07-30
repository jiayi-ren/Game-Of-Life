import React from 'react';

const Options = props => {

    const { run, toggle, reset, random } = props


    return (
        <div>
            <button onClick={toggle}>{run? 'Pause': 'Start'}</button>
            <button onClick={reset}>Reset</button>
            <button onClick={random}>Random</button>
        </div>
    )
}

export default Options;