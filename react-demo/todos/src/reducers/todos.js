//可以定义一些初始化state
const INIT_STATE = {
    todoLists:[],
    value:'学习Redux'
}
/**
 * 收集action
 * @param {*} state 初始state
 * @param {*} action 用户操作
 */
export default function(state = INIT_STATE, action) {
    let todoLists = [],value = '';
    //这里处理Action，接收旧的 state 和 action，返回新的 state。
    console.log(action);
    switch (action.type) {
        case 'ADD_TODO':
            let todoLists = state.todoLists;
            todoLists.push(action.data);
            return Object.assign({}, state, {
                todoLists
            });
        case 'UPDATE_INPUT':
            return Object.assign({}, state, action.data);
        default:
            return state
    }
}