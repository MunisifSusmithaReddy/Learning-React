
import React from 'react';

// Class instance is being created
class UserClass extends React.Component {
    constructor() {
                console.log("UserClass constructor");
        super();
        this.state = {
            counter: 0, // Initial state for login status    
        }
        this.decrementFunction = this.decrementFunction.bind(this); // Binding the decrement function to the class instance

    }
    // decrementFunction = () => {
    //     console.log('this', this);
    //     this.setState({
    //         counter: this.state.counter - 1
    //     })
    // }
    decrementFunction() {
                console.log('this', this);
        this.setState({
            counter: this.state.counter - 1
        })
    }
    componentDidMount() {
        console.log("UserClass component did mount");
        // This method is called once the component is mounted
        // You can perform any setup or data fetching here
    }
    componentWillUnmount() {
        console.log("UserClass component will unmount");
        // This method is called just before the component is removed from the DOM
        // You can perform any cleanup here
    }
    componentWillReceiveProps() {
        
    }
    render() { // Render will retuurn the JSX
                console.log("UserClass render");
        return (
            <div className='user-card'>
                <div>Count: {this.state.counter}</div>
                <button onClick={() => this.setState({counter: this.state.counter + 1})}>
                    Increment
                </button>
                 <button onClick={this.decrementFunction}>
                    Decrement
                </button>
            </div>
        )
    }
}

export default UserClass;