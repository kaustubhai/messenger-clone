import {makeStyles} from '@material-ui/core/styles'

export default makeStyles({
    container: {
        maxWidth: '800px',
        margin: 'auto',
        display: 'relative',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    form: {
        position: 'absolute',
        marginTop: '78vh',
        width: '100%'
    },
    formControl: {
        width: '100%'
    },
    input: {
        width: '100%',
        maxWidth: '800px'
    }
})