import React from 'react'
import {
    DiscussWrapper,
    Content
} from './style'

/**
 * 
 * @param {*} param0 
 * @returns 讨论区组件
 */
const Discuss = ({discussion}) => {

    let title = discussion.title
    let icon = discussion.icon
    let prompt = discussion.prompt

    return (
        <DiscussWrapper>
            <a href="#">
                <img src={icon} alt="" />
                <Content>
                    <div className='titles'>
                        <div className='title'>
                            {title}
                        </div>
                        <div className='signin'>
                            未签到
                        </div>
                    </div>
                    <span>
                        {prompt}
                    </span>
                </Content>
                <p>进入讨论区 &gt;</p>
            </a>
        </DiscussWrapper>
    )
}

export default Discuss