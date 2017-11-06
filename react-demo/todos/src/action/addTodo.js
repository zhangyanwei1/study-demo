let _id = 0;
export function updateList(value) {
    return {
        type: 'ADD_TODO',
        data: {
            id: _id++,
            value: value
        }
    };
}
/**
 * 更新输入框的值 
 */
export function updateInput(data) {
    //这里是输入框的值，接收Action
    console.log(data);
    return {
        type: 'UPDATE_INPUT',
        data
    };
}