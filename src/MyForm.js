import React, { Component } from 'react';

class MyForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: 'abc'
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            name: event.target.value
        })
    }

    render(){
        const { state } = this;
        return (
            <form>
                <label>
                    Name:
                    <input type="text" name="name" value={state.name} onChange={this.handleChange} /> {state.name}
                </label>
                <input type="submit" value="Enviar" />
            </form>
        )
    }
}

export default MyForm;