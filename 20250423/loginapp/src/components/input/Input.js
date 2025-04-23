import { Component } from "react";

export default class Input extends Component {
    constructor(props) {
        super();
        console.log(props)
        console.log("dkssu")
    }
    render() {
        return (
            <input className="input" type="text" placeholder={this.props.content}></input>
        )
    }
}