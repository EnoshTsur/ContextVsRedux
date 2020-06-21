import { compose, } from 'redux'
import { connect, } from 'react-redux';
import CounterWrraped from './CounterWrraped'
import { increase, decrease } from '../../redux/actions'

function mapStateToProps({ counterReducer, }) {
    return {
        counter: counterReducer.counter
    }
}

function mapDispatchToProps(dispatch) {
    return { 
        increase: number => dispatch(increase(number)),
        decrease: number => dispatch(decrease(number))
    }
}

const Container = compose(
    connect(
        mapStateToProps, 
        mapDispatchToProps
   )
)(CounterWrraped)

export default Container