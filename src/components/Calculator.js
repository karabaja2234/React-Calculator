import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value1: "",
            value2: "",
            currentValue: "",
            currentOperation: "",
            result: "",
            doMath: false
        }
        this.changeValue = this.changeValue.bind(this)
        this.reset = this.reset.bind(this)
    }

    changeValue(e) {
        if(this.state.value1 == "" && this.state.value2 == "" && this.state.result == "") {
            this.setState({value1: e.target.value})
            this.setState({result: e.target.value})
        } else {
            if(e.target.value != "+" && e.target.value != "-" && e.target.value != "X" && e.target.value != "/" && e.target.value != "=" && this.state.value1 != "" && !this.state.doMath) {
                this.setState({value1: this.state.value1.concat(e.target.value)})
                this.setState({result: this.state.result.concat(e.target.value)})
            } else if (e.target.value != "+" && e.target.value != "-" && e.target.value != "X" && e.target.value != "/" && e.target.value != "=" && this.state.doMath) {
                this.setState({value2: this.state.value2.concat(e.target.value)})
            } else if(e.target.value == "+" || e.target.value == "-" || e.target.value == "X" || e.target.value == "/") {
                this.setState({doMath: true, currentOperation: e.target.value})
            } else if(e.target.value == "=") {
                if(this.state.currentOperation == "+") {
                    this.setState({result: parseFloat(this.state.result) + parseFloat(this.state.value2)})
                    this.setState({value1: "", value2: ""})
                    this.setState({value1: this.state.result})
                } else if(this.state.currentOperation == "-") {
                    this.setState({result: parseFloat(this.state.result) - parseFloat(this.state.value2)})
                    this.setState({value1: "", value2: ""})
                    this.setState({value1: this.state.result})
                } else if(this.state.currentOperation == "X") {
                    this.setState({result: parseFloat(this.state.result) * parseFloat(this.state.value2)})
                    this.setState({value1: "", value2: ""})
                    this.setState({value1: this.state.result})
                } else if(this.state.currentOperation == "/") {
                    this.setState({result: parseFloat(this.state.result) / parseFloat(this.state.value2)})
                    this.setState({value1: "", value2: ""})
                    this.setState({value1: this.state.result})
                }
            }
        }
    }

    reset() {
        this.setState({value1: "", value2: "", result: "", doMath: false, currentOperation: ""})
    }
 
    render() {
        return (
            <div className="mt-5 bg-dark p-5" style={{'border-radius':'15px'}}>
               <div className="d-flex flex-column">
                   <div className="container">
                        <p className="h4 text-light">SELMAN'S CALCULATOR</p>
                        <div className="row mt-4">
                            <p className="h5 text-light">Current value: {this.state.value2 == "" ? this.state.result : this.state.value2}</p>
                        </div>
                   </div>    
                    <div className="container">
                        <div className="row mt-4">
                            <div className="col-2">
                                <Button className="btn btn-lg btn-primary" value={"7"} onClick={this.changeValue}>7</Button>
                            </div>
                            <div className="col-2">
                                <Button className="btn btn-lg btn-primary" value={"8"} onClick={this.changeValue}>8</Button>
                            </div>
                            <div className="col-2">
                                <Button className="btn btn-lg btn-primary" value={"9"} onClick={this.changeValue}>9</Button>
                            </div>
                            <div className="col-4">
                                <Button className="btn btn-lg btn-info w-75" value={"/"} onClick={this.changeValue}>/</Button>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row mt-4">
                            <div className="col-2">
                                <Button className="btn btn-lg btn-primary" value={"4"} onClick={this.changeValue}>4</Button>
                            </div>
                            <div className="col-2">
                                <Button className="btn btn-lg btn-primary" value={"5"} onClick={this.changeValue}>5</Button>
                            </div>
                            <div className="col-2">
                                <Button className="btn btn-lg btn-primary" value={"6"} onClick={this.changeValue}>6</Button>
                            </div>
                             <div className="col-4">
                                <Button className="btn btn-lg btn-info w-75" value={"X"} onClick={this.changeValue}>X</Button>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row mt-4">
                             <div className="col-2">
                                <Button className="btn btn-lg btn-primary" value={"1"} onClick={this.changeValue}>1</Button>
                            </div>
                            <div className="col-2">
                                <Button className="btn btn-lg btn-primary" value={"2"} onClick={this.changeValue}>2</Button>
                            </div>
                            <div className="col-2">
                                <Button className="btn btn-lg btn-primary" value={"3"} onClick={this.changeValue}>3</Button>
                            </div>
                            <div className="col-4">
                                <Button className="btn btn-lg btn-info w-75" value={"-"} onClick={this.changeValue}>-</Button>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row mt-4">
                            <div className="col-2">
                                <Button className="btn btn-lg btn-primary" value={"0"} onClick={this.changeValue}>0</Button>
                            </div>
                            <div className="col-2">
                                <Button className="btn btn-lg btn-primary" value={"."} onClick={this.changeValue}>.</Button>
                            </div>
                            <div className="col-2">
                                <Button className="btn btn-lg btn-info" value={"="} onClick={this.changeValue}>=</Button>
                            </div>
                            <div className="col-4">
                                <Button className="btn btn-lg btn-info w-75" value={"+"} onClick={this.changeValue}>+</Button>
                            </div>
                            <div className="col-2">
                                <Button className="btn btn-danger" onClick={this.reset}>Reset</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column">
                    <p className="h4 text-left mt-5 text-light">
                        Result value: {this.state.result}
                    </p>
                </div> 
            </div>
        )
    }
}
