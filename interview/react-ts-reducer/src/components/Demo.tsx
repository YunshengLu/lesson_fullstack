import React from 'react';

interface UserState {
    name: string;
    lastname: string;
}

interface Action {
    type: string;
    data: any;
}

const actionIds = {
    setName: 'setname',
    setLastname: 'setlastname',
};

const userInfoReducer = (state: UserState, action: Action): UserState => {
    switch (action.type) {
        case actionIds.setName:
            return {
                ...state,
                name: action.data,
            };
        case actionIds.setLastname:
            return {
                ...state,
                lastname: action.data,
            };
        default:
            return state;
    }
};

interface Props {
    name: string;
    dispatch: React.Dispatch<Action>;
}

const EditUsername: React.FC<Props> = React.memo(props => {
    return (
        <input
            value={props.name}
            onChange={event =>
                props.dispatch({
                    type: actionIds.setName,
                    data: event.target.value,
                })
            }
        />
    );
});

// 消费数据
// redux reducer useReducer 函数式编程
const Demo = () => {
    // 读的状态
    // dispatch 能力
    // 初始值
    const [userInfo, dispatch] = React.useReducer(userInfoReducer, {
        name: 'Tom',
        lastname: 'John',
    });

    return (
        <div>
            <h3>
                {userInfo.name} {userInfo.lastname}
                <EditUsername name={userInfo.name} dispatch={dispatch} />
                <input
                    value={userInfo.lastname}
                    onChange={event =>
                        dispatch({
                            type: actionIds.setLastname,
                            data: event.target.value,
                        })
                    }
                />
            </h3>
        </div>
    );
};

export default Demo;
