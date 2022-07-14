import React, { useState, useEffect, memo } from 'react'
import { connect } from 'react-redux'
import { 
    getYuanshenActivityList,
    getYuanshenDiscussion,
    getOfficial,
} from './store/actionCreators'
import Scroll from '@/components/common/scroll/index'
import NavigatorList from '@/components/NavigatorList'
import Discuss from '@/components/Discuss'
import Official from '@/components/Official'
import { Wrapper } from './style'

const Yuanshen = (props) => {

    const {
        yuanshenActivityList,
        yuanshenDiscussionList,
        officialList,
    } = props

    const {
        getYuanshenActivityListDispatch,
        getYuanshenDiscussionListDispatch,
        getOfficialListDispatch,
    } = props

    useEffect(() => {
        getYuanshenActivityListDispatch(2);
        getYuanshenDiscussionListDispatch(2);
        getOfficialListDispatch(2);
    },[])

    return (
        <div>
            <Scroll>
                <NavigatorList navigator={yuanshenActivityList}/>
                <Discuss discussion={yuanshenDiscussionList}/>
                <Official officialList={officialList}/>
            </Scroll>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        yuanshenActivityList: state.yuanshen.yuanshenActivityList,
        yuanshenDiscussionList: state.yuanshen.yuanshenDiscussionList,
        officialList: state.yuanshen.officialList,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        getYuanshenActivityListDispatch(data){
            dispatch(getYuanshenActivityList(data))
        },
        getYuanshenDiscussionListDispatch(data){
            dispatch(getYuanshenDiscussion(data))
        },
        getOfficialListDispatch(data){
            dispatch(getOfficial(data))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Yuanshen))
