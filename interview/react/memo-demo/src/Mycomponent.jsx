/*
 * @Description:
 * @version:
 * @Author: LuyunSheng
 * @Date: 2022-08-25 11:12:33
 * @LastEditTime: 2022-08-25 11:56:44
 */
import React from 'react';

const Mycomponent = () => {
    console.log('Mycomponent 更新了');
    return <div>Mycomponent</div>;
};

const setSatisfactionClass = (level) => {
    if (level < 300) {
        return 'very-dissatisfied'
    }
    if (level < 200) {
        return 'neither'
    }
    if (level < 400) {
        return 'somewhat-satisfied'
    }
    return 'very-satisfied'
}
// props level
const isSameRange = (preveValue, nextValue) => {
    // console.log(preveValue, nextValue);
    const preveValueClass = setSatisfactionClass(preveValue.level);
    const nextValueClass = setSatisfactionClass(nextValue.level);
    return preveValueClass === nextValueClass
}
export default React.memo(Mycomponent, isSameRange);
