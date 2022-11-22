import React from 'react';
import axios from 'axios';

export default function Layout() {
    const [count, setCount] = React.useState(0)
    const increament = () => {
        setCount(count + 1)
    }
    const decreament = () => {
        setCount(count - 1)
    }
    return (
        <div className="container">
            <div className="counter-container">
                <div className="">
                    <h1 style={{ fontSize: "80px" }}>{count}</h1>
                    <div className="counter-button">
                        <button className="increament-button" onClick={increament}>Increament</button>
                        <button className="decreament-button" onClick={decreament}>Decreament</button>
                    </div>
                </div>
            </div>
            <div className="dropdown-container">

            </div>
        </div >
    )
}
