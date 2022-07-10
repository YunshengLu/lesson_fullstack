const selectGame = (item) => {
    switch (item.id) {
        case 1:
            return "benghuai3"
        case 2:
            return "yuanshen"
        case 3:
            return "benghuai2"
        case 4:
            return "weiding"
        case 5:
            return "dabieye"
        case 6:
            return "xingqiong"
        case 8:
            return "juequling"
        default:
            return "dabieye"
    }
}

export {
    selectGame
}