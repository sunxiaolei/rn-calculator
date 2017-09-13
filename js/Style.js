import {StyleSheet} from 'react-native'

var Style = StyleSheet.create({
    rootContainer: {
        flex: 1
    },
    //显示屏
    displayContainer: {
        flex: 1,
        backgroundColor: '#193441'
    },
    displayText: {
        fontSize: 38,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'right'
    },
    //键盘
    inputContainer: {
        flex: 4,
        backgroundColor: '#3E606F'
    },
    inputButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#91AA9D'
    },
    inputButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },
    inputRow: {
        flex: 1,
        flexDirection: 'row'
    }
})

export default Style