import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import Style from './Style'

export default class InputBtn extends Component {
    /**
     * props是在父组件中指定，而且一经指定，在被指定的组件的生命周期中则不再改变。
     * 对于需要改变的数据，我们需要使用state。
     */
    constructor(props){
        super(props);
    }
    render() {
        return (
            /**
             * 在需要捕捉用户点击操作时，可以使用"Touchable"开头的一系列组件
             * 通过onPress属性接受一个点击事件的处理函数
             * 一般来说，你可以使用TouchableHighlight来制作按钮或者链接。注意此组件的背景会在用户手指按下时变暗。
             * 在Android上还可以使用TouchableNativeFeedback，它会在用户手指按下时形成类似墨水涟漪的视觉效果。
             * TouchableOpacity会在用户手指按下时降低按钮的透明度，而不会改变背景的颜色。
             * 如果你想在处理点击事件的同时不显示任何视觉反馈，则需要使用TouchableWithoutFeedback。
             */
            <TouchableHighlight style={Style.inputButton}
                                onPress={this.props.onPress}
                                underlayColor={'#193441'}>
                <Text style={Style.inputButtonText}>
                    {this.props.value}
                </Text>
            </TouchableHighlight>
        )
    }
}