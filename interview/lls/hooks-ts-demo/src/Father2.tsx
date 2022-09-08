/*
 * @Description: 
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-09-07 15:19:06
 * @LastEditTime: 2022-09-07 15:41:11
 */
// JSX UI
// state props
import React, { Component } from "react";
import Child from "./Child";
// Component 组件的基类
class Father extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
    }

    render() {
        return (
            <div>
                {this.state.count}
                Father
                <Child count={this.state.count}/>
            </div>
        )
    }
}

export default Father