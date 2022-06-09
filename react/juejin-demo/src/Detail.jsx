import React, { useEffect } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'

// path 动态参数部分
const Detail = () =>{
    let id = null;
    const navigate = useNavigate();
    const paramsObj = useParams();
    // console.log(paramsObj);
    if(paramsObj?.id){
        id = paramsObj.id;
    }else{
        let searchObj = new URLSearchParams(useLocation().search)
        if(searchObj.get('id')){
            id = searchObj.get('id')
        }
    }
    useEffect(()=>{
        if(!id){
            navigate('/')
        }
    },[])

    // console.log(id);
    // console.log(window.location.search);
    // let paramsObj = new URLSearchParams(useLocation().search)
    // console.log(paramsObj.get('id'));
    return (
        <>
        Detail {id}
        </>
    )
}

export default Detail