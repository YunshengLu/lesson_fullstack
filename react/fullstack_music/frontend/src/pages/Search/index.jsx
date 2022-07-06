import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
// useRef DOM 相关
// useCallback 性能优化
import { getHotKeywords } from './store/actionCreators'
import { CSSTransition } from 'react-transition-group'
import { 
    Container, 
} from './style'

const Search = (props) => {

    const navigate = useNavigate()
    const { hotList, songsCount } = props
    const { getHotKeywordsDispatch } = props

    // 搜索内容 redux 解决共享状态问题
    // 1. 搜索列表 api action redux
    const [query,setQuery] = useState('')
    const [show,setShow] = useState(false)

    useEffect(() =>{
        setShow(true)
        if(!hotList.length){
            getHotKeywordsDispatch()
        }
        setTimeout(() => {
            setShow(false)
        },3000)
    },[])

    return (
        // 当dom ready 组件挂载上去，应用css transition 效果
        <CSSTransition
            in={show}
            timeout={300}
            appear={true}
            classNames='fly'
            unmountOnExit
            onExit={() =>{
                navigate(-1)
            }}
        >
            <Container play={songsCount}>
                <div className="search_box_wrapper">

                </div>
            </Container>
        </CSSTransition>
    )
}

const mapStateToProps = (state) => {
    return {
        // api 热搜
        hotList: state.search.hotList,
        enterLoading: state.search.enterLoading,
        // 搜索建议 卖广告
        suggestList: state.search.suggestList,
        // redux 就为跨模块共享数据而来，把数据共享好
        songsCount: state.player.playList.length,
        songsList: state.search.songsList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getHotKeywordsDispatch(){
            dispatch(getHotKeywords())
        },
        // changeEnterLoadingDispatch(){
        //     dispatch(changeEnterLoading(data))
        // },
        // getSuggesteListDispatch(){
        //     dispatch(getSuggesteList())
        // },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search)
