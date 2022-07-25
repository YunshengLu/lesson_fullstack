import React from 'react';
import { connect } from 'react-redux'
import { rootSate } from '@/store';

interface HomeProps {
    loading: Boolean;
}

const Home : React.FC<HomeProps> = (props) => {

    const {
        loading,
    } = props;

    return (
        <div>
            {
                loading && <div>加载中...</div>
            }
        </div>
    )
}

const mapStateToProps = (state:rootSate) => ({
    hotword: state.search.hotword,
    loading: state.loading,
})

export default connect(mapStateToProps)(Home)