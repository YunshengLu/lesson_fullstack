import * as actionTypes  from '../constants'
// - reducer 分支 goods: 
let data = {
    list: [],
}
// 引用式赋值 
export default function(state = data, action) {
    switch(action.type) {
        case actionTypes.SET_ALL_GOODS:
            let list = action.data;
            list.map(item => item.check = true);
            return Object.assign({}, state, {
                list: list
            })    
        break;
        //  reducer 重新计算， 财务的角度 
        // 选择或反选 
        // action  { type： actionTypes.CHECK_GOODS, data: goodsID}
        case actionTypes.CHECK_GOODS:
            // 在reducer 重新计算前的状态 ？ 旧状态
            let checkList = state.list; 
            checkList.map(item => {
                if (item.goodsId == action.data) {
                    item.check = !item.check
                    // 0  1  - 
                    item.goodsNum == '0' ? item.goodsNum = '1' : ''
                }
            })
            // 新状态 
            return  Object.assign({}, state, {
                list: [...checkList]
            })
            break;
        // +-
        case actionTypes.CHNAGE_GOODS_NUM:
            let changeList = state.list;
            //  + -  指定商品  action type CHNAGE_GOODS_NUM 
            //  data: {id:id, status:'add|minus' }
            changeList.map((item) => {
                if (item.goodsId == action.data.goodsId ) {
                    action.data.status == 'add'? item.goodsNum++: item.goodsNum--;
                    item.goodsNum == '0' ? item.check = false : ''
                    // -1 UI 去做 item.goodsNum> 0 && <button>-</button>
                }
            })
            return Object.assign({}, state, {list: [...changeList]})
            break;
        case actionTypes.CHECK_ALL_GOODS:
            // 全选和取消全选 
            // state 旧状态  保全
            let checkAllList = state.list
            // 新状态 完整正确
            checkAllList.map(item => {
                item.check = !action.data
            })
            return Object.assign({}, state, {list:[...checkAllList]})
            break;
        default:
            // 返回一个全新的对象，　拥有　　state  list  
            // 为了搞定引用式赋值 
            // 使用了Object.assign  未来  ImmutableJS 
            // 讲新的状态与原来的状态在物理层面上 绝对区分开
            // redux 有洁癖 新状态, 但是旧的状态是不是丢了? 
            // 每一刻的状态都留下来 可以被追溯 
            // {
            //     ...state,
            //     list: 
            // }
            return state
            // return Object.assign({}, state, { list: [...list]})
    }
}
