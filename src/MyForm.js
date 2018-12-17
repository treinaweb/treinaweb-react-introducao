import React, { Component } from 'react';

class MyForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            fruit: 'orange',
            message: ''
        }

        this.fruits = [
            {'name': 'Apple', 'value': 'apple'},
            {'name': 'Banana', 'value': 'banana'},
            {'name': 'Orange', 'value': 'orange'}
        ];

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const target = event.target,
            value = target.type === 'checkbox' ? target.checked : target.value,
            name = target.name;
            
        this.setState({
            [name]: value
        })
    }

    render(){
        const { state } = this;
        return (
            <form>
                <div>
                    <label>
                        Name:
                        <input type="text" name="name" value={state.name} onChange={this.handleChange} /> {state.name}
                    </label>
                </div>
                <div>
                    <label>
                        Fruit:
                        <select value={state.fruit} name="fruit" onChange={this.handleChange}>
                            {
                                this.fruits.map(fruit => <option value={fruit.value} >{fruit.name}</option>)
                            }
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Message:
                        <textarea name="message" value={state.message} onChange={this.handleChange} />
                    </label>
                </div>
                <input type="submit" value="Enviar" />
            </form>
        )
    }
}

export default MyForm;