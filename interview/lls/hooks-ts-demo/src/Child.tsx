/*
 * @Description:
 * @version:
 * @Author: LuyunSheng
 * @Date: 2022-09-07 15:30:38
 * @LastEditTime: 2022-09-07 16:52:48
 */
// 无状态组件 StatelessComponent
// 慢慢就发展成为函数式组件
// import React from 'react';
// interface ChildProps {
//     count: number;
// }

// const Child: React.StatelessComponents<ChildProps> = props => {
//     return (
//         <div>
//             Child
//             {props.count}
//         </div>
//     );
// };

import React, { Component } from 'react';

interface Props {
    count: number;
}

interface State {

}

class Child extends Component<Props, State> {
    constructor(props: Props) {
        super(props); // 运行基类的constructor 方法才能成为组件
    }
    
    componentDidMount() {
        console.log('组件挂载了');
    }

    componentWillUnmount() {
        console.log('组件卸载了');
    }
    // 阻止组件更新
    shouldComponentUpdate() {
        console.log('check是否要更新');
        if (this.props.count % 2 === 0) {
            return false;
        }
        return true;
    }
    
    componentDidUpdate() {
        console.log('组件更新了');
    }

    render() {
        const { count } = this.props
        return(
            <div>
                Child {count}
            </div>
        )
    }
}

export default Child;
