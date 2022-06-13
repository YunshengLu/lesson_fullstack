import React from 'react'
import {
    ContestWrapper,
    Tab,
    TabItem,
    NoData
} from './style'
import noContest from '../../assets/images/no_contest.jpg'

const Contest = ({data}) => {
    return (
        // 切页面
        <ContestWrapper>
            <h2>热门赛事</h2>
            <Tab>
                {
                    data.map(item =>
                        <TabItem key={item.id}>
                            <span>{item.title}</span>
                        </TabItem>)
                }
            </Tab>
            {data.length == 0 && <NoData>
                <img src={noContest} alt="" />
                <p>暂无赛事，看看更多演出</p>
                </NoData>}
        </ContestWrapper>
    )
}

export default Contest