/**
 * es6的set和map
 * 方法add has delete forEach
 * 应用set转为数组[...set]
 * 
 * let	set	=	new WeakSet()
 */

let dome1 = () => {
    let _set = new Set() // 创建set
    _set.add(5) // add方法添加set的项
    _set.add('5')
    console.log(_set.size) // set的size属性

    let set1 = new Set([1,2,4,3,5,5,2]) // 使用数组初始化set
    console.log(set1.has('1'), set1.has(1)) // set 的has方法
    set1.delete(1)
    set1.delete('1')
    console.log(set1.has('1'), set1.has(1), set1.size)
    set1.forEach((item, index, seter) => { // set 的forEach方法
        console.log(`${index}: ${item}--- ${seter}`)
    })
}
// dome1()
let dome2 = () => {
    let _set = new Set([1,1,3,4,{hh: 2},{hh: 2},'d','d',3]) // 无法去重对象
    let _arr = [..._set]
    // console.log(_arr, _arr.length)

    // 	Weak Set 没有size属性，没有forEach方法
    // 不接受基本类型的值
    let obj = {d: 'd'}
    let obj1 = {c:'c'}
    let obj2 = {c:'c'}
    let obj3 = {c:'c'}
    let weakSet = new WeakSet([obj1, obj2, obj3]) // 可以使用数组初始化
    weakSet.add(obj)
    console.log(weakSet.has(obj),weakSet.has(obj1),weakSet.has(obj2))
    weakSet.delete({c:'c'}) // 使用{}会割裂对象的引用
    console.log(weakSet.has(obj))
    // let arr = [...weakSet]
    // console.log(arr)

}
// dome2()

/**
 * set与weakSet的区别 item失去引用后释放
 */
let dome3 = () => {
    let a = {}
    let set = new Set([a])
    let weakSet = new WeakSet([a]) // 只能用数组的形式初始化set
    a = null
    console.log(set.has(a), weakSet.has(a)) // 无法判断引用是否失效
}
dome3()