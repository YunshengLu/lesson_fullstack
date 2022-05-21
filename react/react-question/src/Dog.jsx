import {useState} from 'react'

function Dog() {
    // let a = false
    let [isBarking,setIsBarking] = useState(false)
    let [isRunning,setIsRunning] = useState(false)
    const handleClick = () => {
        // DOM 编程已经一去不复返了
        setIsBarking(true)
        setIsRunning(true)
        // a = true
        setTimeout(() => {
            setIsBarking(false)
            setIsRunning(false)
        },2000)
    }
    return (
        // 动态？多个状态
        <div onClick={handleClick}>
            <div>Dog</div>
            <p>{isBarking && '汪汪汪'}</p>
            <p>{isRunning && 'runrunrun'}</p>
        </div>
    )
}


export default Dog