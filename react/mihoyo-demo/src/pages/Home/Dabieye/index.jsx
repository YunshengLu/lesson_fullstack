import React, { useState, useEffect, memo } from 'react'
import { connect } from 'react-redux'
import { 
    getDabieyeActivityList,
} from './store/actionCreators'
import Scroll from '@/components/common/scroll/index'
import NavigatorList from '@/components/NavigatorList'

const Dabieye = (props) => {

    const {
        dabieyeActivityList,
    } = props

    const {
        getDabieyeActivityListDispatch,
    } = props

    useEffect(() => {
        getDabieyeActivityListDispatch(5);
    },[])

    return (
        <div>
            <Scroll>
                <NavigatorList navigator={dabieyeActivityList}/>
            </Scroll>
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state,'||||||||');
    return {
        dabieyeActivityList: state.dabieye.dabieyeActivityList,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        getDabieyeActivityListDispatch(data){
            dispatch(getDabieyeActivityList(data))
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Dabieye))
