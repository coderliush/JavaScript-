/*
 * @Description: 
 * @Author: liushuhao
 * @Date: 2020-12-28 15:23:19
 * @LastEditors: liushuhao
 */
//  浅拷贝：如果是基本类型，拷贝的就是基本类型的值，如果是引用类型，拷贝的就是内存地址 ，所以如果其中一个对象改变了这个地址，就会影响到另一个对象。

// 深拷贝：将一个对象从内存中完整的拷贝一份出来,从堆内存中开辟一个新的区域存放新对象,两个对象互相独立。

function cloneDeep(target) {
    let obj = Array.isArray(target) ? [] : {}
    for (let k in target) {
        if (target[k] instanceof Object) {
            obj[k] = cloneDeep(target[k])
        } else if (target[k] instanceof Array) {
            obj[k] = []
            target[k].forEach(item => obj[k].push(cloneDeep(item)))
        } else {
            obj[k] = target[k]
        }
    }
    return obj
}