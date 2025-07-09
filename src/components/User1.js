import React, { useEffect, useState} from 'react';

// We are just invoking a function component that returns a simple JSX element.
const User1 = ({ name }) => {
    const [counter, setCounter] = React.useState(0); // Using useState hook to manage state
    // const { name } = props; // Destructuring props to extract name
    useEffect(() => {
    console.log("User1 component mounted");
        // This will run only once when the component mounts
        // You can perform any setup or data fetching here
    }, []);
    return (
        <div className='user-card'>
            <h1>{name}</h1>
            <div>Count: {counter}</div>
            <button onClick={() => setCounter(counter + 1)}>
                Increment
            </button>
             <button onClick={() => setCounter(counter - 1)}>
                Decrement
            </button>
        </div>
    )
}

export default User1;
