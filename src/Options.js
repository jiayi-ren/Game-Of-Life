import React from 'react';

const Options = props => {

    const { start, stop, reset, random } = props


    return (
        <div>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
            <button onClick={random}>Random</button>
            {/* <form>
                <input name="rows"></input>
                <input ></input>
            </form> */}
        </div>
    )
}

export default Options;