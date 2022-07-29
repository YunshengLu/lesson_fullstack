import React, { useEffect } from 'react';
import Header from '@/components/Header';
import { getPartitionsRequest } from '@/api/request';
import { connect } from 'react-redux';
import { rootState } from '@/store';
import { Dispatch } from 'redux';
import {
    getHomeDataAction,
} from '@/store/actionCreators'
import {
    HomeWrapper,
} from './style'
import { PartitionType } from '@/models/index'
import TabBar from '@/components/TabBar'

interface HomeProps {
    loading: boolean;
    rankingPartitions: any[];
    rankingVideos: any[];
    oneLevelPartitions: any[];
    getHomeDataActionDispatch: (rId: string) => void;
}

const Home: React.FC<HomeProps> = (props)=> {

    const {
        loading,
        rankingPartitions,
        rankingVideos,
        oneLevelPartitions,
    } = props;

    const {
        getHomeDataActionDispatch,
    } = props;

    useEffect(() =>{
        getHomeDataActionDispatch('1')
    },[])
    
    const handleClick = () => {

    }

    const tabBarData: PartitionType[] = [{id: 0, name: '首页'}] 
        .concat(oneLevelPartitions);
    tabBarData.push({id: -1, name: '直播'})

    return (
        <HomeWrapper>
            <Header />
            <div className="partition">
                <div className="tabbar">
                    <TabBar 
                        data={tabBarData}
                        type={"indicate"}
                        onClick={handleClick}
                    />
                </div>
                <div className="switch">
                    <i className="icon-arrow-down"></i>
                </div>
            </div>
        </HomeWrapper>
    );
};

const mapStateToProps = (state: rootState) => ({
    loading: state.loading,
    rankingPartitions: state.ranking.rankingPartitions,
    rankingVideos: state.ranking.rankingVideos,
    oneLevelPartitions: state.partitions.oneLevelPartitions
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getHomeDataActionDispatch(rId: string) {
        dispatch(getHomeDataAction(rId))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);
