/*
 * @Description:
 * @version:
 * @Author: LuyunSheng
 * @Date: 2022-09-07 15:19:06
 * @LastEditTime: 2022-09-07 16:49:35
 */
// JSX UI
// state props
import React, { Component } from "react";
import Child from "./Child";

interface Props {

}

interface State {
    count: number;
    visible: boolean;
}

// Component 组件的基类
class Father extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            count: 1,
            visible: true
        }
    }
    
    toggle() {
        // console.log(this);
        this.setState({
            visible: !this.state.visible
        })
        console.log(this.state.visible);
    }

    increase() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                {this.state.count}
                Father
                <button onClick={this.increase.bind(this)}>increase</button>
                {this.state.visible && <Child count={this.state.count}/>}
                <button onClick={this.toggle.bind(this)}>切换</button>
            </div>
        )
    }
}

export default Father