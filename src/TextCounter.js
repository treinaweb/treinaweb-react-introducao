import React, { Component } from 'react';


class TextCounter extends Component{
    static defaultProps = {
        limit: 15
    }

    constructor(props){
        super(props);
        this.state = {
            totalChars: 0
        }
    }

    render(){
        const {state, props} = this;
        return (
            <div>
                <h1>Meu Contador</h1>
                <textarea />
                <div>
                    <strong>Total:</strong> { state.totalChars } / { props.limit }
                </div>
            </div>
        )
    }
}

export default TextCounter;