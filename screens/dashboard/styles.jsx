import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    main: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#26408B',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    background: {
        flex: 1,
        resizeMode: 'cover', 
        borderCurve: 'circular',
        width: '90%',
        height: '90%',
        backgroundColor: '#EDEDED',
        margin: '10%',
        borderRadius: 34,
        borderWidth: 2,
        borderColor: 'transparent'
        },

    
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        margin: '5%'

    },

    title: {
        fontSize: 19,

    },

    subtitle: {
        color: '#FFF',
        fontFamily: 'Rubik-Regular',
    },

    numberDisplay: {
        color: '#FFF',
        fontFamily: 'Rubik-Regular',
        fontSize: 19,
    },
    content: {
        margin: '6%'
    },
    
    button: {
        backgroundColor: '#26408B',
        borderWidth: 2,
        borderColor: 'transparent',
        borderRadius: 19,
        padding: '2%',
        alignItems: 'center',
        marginTop: '2%',
        marginBottom: '2%' 
    },

    dataView: {
        backgroundColor: '#5465A7',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: '2%',
        margin: '1%',
        borderWidth: 2,
        borderColor: 'transparent',
        borderRadius: 23,
        alignItems: 'center'
    },

    dataViewTitle: {
        alignItems: 'flex-start',
        marginLeft: '2%',
    },

    separator: {
        marginTop: '5%',
        marginBottom: '5%',
    }
    },
)

export default styles;