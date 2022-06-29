import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getSingersList } from '@/store/actionCreators'

function Singers(props) {

  const { singersList, getSingersListDispatch } = props

  useEffect(() =>{
    getSingersListDispatch()
  },[])

  return (
    <div>
      Singers
    </div>
  )
}

const mapStateToProps = (state) =>{
  return{
    singersList: state.singers.singersList
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    getSingersListDispatch(){
      dispatch(getSingersList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Singers)
