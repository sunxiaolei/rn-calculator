import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';
import Style from './Style'
import InputBtn from "./InputBtn";

const inputBtns = [
    [1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '-'],
    [0, '.', '+', '=']
]

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: 0
        };
    }

    render() {
        return (
            <View style={Style.rootContainer}>
                <View style={Style.displayContainer}>
                    <Text style={Style.displayText}>{this.state.currentValue}</Text>
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
            let row = inputBtns[i];
            let rowViews = [];
            for (let j = 0; j < row.length; j++) {
                let v = row[j];
                rowViews.push(
                    <InputBtn key={i + '-' + j} value={v} onPress={this.onClick.bind(this, v)}/>
                );
            }
            views.push(<View style={Style.inputRow} key={'r' + i}>{rowViews}</View>);
        }
        return views;
    }

    onClick(input) {
        switch (typeof input) {
            case 'number':
                this.handleNum(input)
                break;
            case 'string':
                this.handleOpr(input)
                break;
        }
    }

    handleNum(input) {
        this.setState({
            currentValue: this.state.currentValue * 10 + input
        })
    }

    handleOpr(input) {
    }
}

AppRegistry.registerComponent('calculator', () => Calculator);
