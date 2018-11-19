import React from "react";
import "./Form.css";
import axios from "axios";

class Form extends React.Component {

    state = {
        userName : ""
    };

    handleSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state.userName);
        axios.get(`https://api.github.com/users/${this.state.userName}`)
        .then(response => {
            this.props.onSubmit(response.data);
            this.setState({ userName: "" });
        })
    }
    render () {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" 
                    value={this.state.userName} 
                    onChange={(event) => this.setState({ userName: event.target.value })}
                    placeholder="Github username" required />
                <button type="submit">Add User</button>
            </form>

        )
    }
    
    
};

export default Form;