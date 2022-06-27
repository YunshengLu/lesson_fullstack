let defaultState = {
    users: [
        { id: 1, name: 'John', bio: 'hellow'},
        { id: 2, name: 'Tom', bio: 'hi'}
    ],
    banner: [
        { id: 1, img: 'xxx.jpg' },
        { id: 2, img: 'xxx.jpg' },
    ],
    list: [
        { id: 1, img: 'xxx.jpg', title: 'aaa' },
        { id: 2, img: 'xxx.jpg', title: 'bbb' },
    ],
};
const reducer = (state = defaultState) => {
    return state;
};

export default reducer