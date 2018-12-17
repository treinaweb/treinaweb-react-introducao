
import React, { Component } from 'react';

class MyForm2 extends Component{
    constructor(props){
        super(props);

        this.inputName = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        console.log(this.inputName.current.value);
        event.preventDefault();
    }


    render(){
        const { state } = this;
        return (
            <form onSubmit={this.handleSubmit} >
                <div>
                    <label>
                        Name:
                        <input defaultValue={'abcde'} type="text" name="name" ref={this.inputName} />
                    </label>
                </div>
                <input type="submit" value="Enviar" />
            </form>
        )
    }
}

export default MyForm2;