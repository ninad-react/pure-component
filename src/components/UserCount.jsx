import { Component, PureComponent } from "react";

class UserCount extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            userCount: 10,
        }
    }

    incrementUserCount = () => {
        this.setState((state) => ({
            userCount: state.UserCount + 1,
        }))
    }
    render() {
        console.log("Usercount component renders");
        return (
            <>
                <h1>Regular Component</h1>
                <div>
                    We have fetched {this.state.userCount} users
                </div>
                <button onClick={this.incrementUserCount}>Increment</button>
            </>
        )
    }
}

export default UserCount