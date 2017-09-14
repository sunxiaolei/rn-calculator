import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';
import Style from './Style'
import InputBtn from "./InputBtn";

const inputBtns = [
    ['1', '4', '7', '0'],
    ['2', '5', '8', '.'],
    ['3', '6', '9', 'C'],
    ['/', '*', '-', '+', '=']
]

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayShow: '',
            opr: '',
            preValue: 0,
            nextValue: 0
        };
    }

    render() {
        return (
            <View style={Style.rootContainer}>
                <View style={Style.displayContainer}>
                    <Text style={Style.displayText}>{this.state.displayShow}</Text>
                </View>
                <View style={Style.inputContainer}>
                    {this.renderInputButtons()}
                </View>
            </View>
        )
    }

    renderInputButtons() {
        let views = [];
        for (let i = 0; i < inputBtns.length; i++) {
            let column = inputBtns[i];
            let columnViews = [];
            for (let j = 0; j < column.length; j++) {
                let v = column[j];
                columnViews.push(
                    <InputBtn key={i + '-' + j} value={v} onPress={this.onClick.bind(this, v)}/>
                );
            }
            views.push(<View style={Style.inputColumn} key={'r' + i}>{columnViews}</View>);
        }
        return views;
    }

    onClick(input) {
        this.setState({
            displayShow: this.state.displayShow + input
        })
        switch (input) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.handleNum(input)
                break
            default:
                this.handleOpr(input)
                break
        }
    }

    handleNum(input) {
        if (this.state.opr == '') {
        } else {
            this.setState({
                nextValue: this.state.nextValue * 10 + input,
            })
        }
    }

    handleOpr(input) {
        switch (input) {
            case '=':
                this.setState({
                    displayShow: eval(this.state.preValue + this.state.opr + this.state.nextValue),
                })
                this.reset()
                break;
            case 'C':
                this.setState({
                    displayShow: ''
                })
                this.reset()
                break;
            default:
                this.setState({
                    opr: input,
                    preValue: this.state.displayShow,
                })
                break;
        }
    }

    reset() {
        this.setState({
            preValue: 0,
            opr: '',
            nextValue: 0
        })
    }

}

AppRegistry.registerComponent('calculator', () => Calculator);
