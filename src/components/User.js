import React, { useEffect, useState} from 'react';
import User1 from './User1';

// We are just invoking a function component that returns a simple JSX element.
const User = ({ name }) => {
    const [counter, setCounter] = React.useState(0); // Using useState hook to manage state
    // const { name } = props; // Destructuring props to extract name
    useEffect(() => {
    console.log("User component mounted");
        // This will run only once when the component mounts
        // You can perform any setup or data fetching here
    }, []);
    useEffect(() => {
        console.log("User component updated");
        return () => {
            console.log("User component will unmount");
            
        };
    }, [counter]); // Dependency array, runs when counter changes
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
            <User1 name="123"/> {/* Rendering User1 component */}
        </div>
    )
}

export default User;
