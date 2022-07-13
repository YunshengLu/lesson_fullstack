import React, { useState, useEffect, memo } from 'react'
import { connect } from 'react-redux'
import { 
    getYuanshenActivityList,
} from './store/actionCreators'
import Scroll from '@/components/common/scroll/index'
import NavigatorList from '@/components/NavigatorList'

const Yuanshen = (props) => {

    const {
        yuanshenActivityList,
    } = props

    const {
        getYuanshenActivityListDispatch,
    } = props

    // const {data,setDate} = useState()

    // const navigator = yuanshenActivityList.data.navigator

    useEffect(() => {
        getYuanshenActivityListDispatch(2);
        // setDate(yuanshenActivityList)
    },[])

    return (
        <div>
            <Scroll>
                <NavigatorList navigator={yuanshenActivityList}/>
            </Scroll>
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state,'||||||||');
    return {
        yuanshenActivityList: state.yuanshen.yuanshenActivityList,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        getYuanshenActivityListDispatch(data){
            dispatch(getYuanshenActivityList(data))
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Yuanshen))
