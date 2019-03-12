/**
 * map的基本应用
 * map的三种方法has() delete() clear()
 * map的读取方法get()set()
 * map的size属性
 * map的forEach()遍历
 */
let dome1 = () => {
    let map = new Map()
    let age = {

    }
    map.set('name', 'wang')
    map.set(age, 'wang')
    map.delete(age)
    console.log(map.get('name'), map.get(age), map.has(age))
}
// dome1()
/**
 * 使用数组初始化Map
 * forEach()遍历map
 */

let dome2 = () => {
    let map = new Map([
        ['act', 100],
        ['def', 50],
        ['mag', 20]
    ]) // 嵌套数组进行初始化
    map.delete('mag')
    map.set('act', 200) // 使用set进行覆盖
    map.forEach((value, key, map) => {
        console.log(`${key}:${value}`, map.size)
    })
    map.clear()
    map.forEach((value, key, map) => {
        console.log(`${key}:${value}`)
    })
}
// dome2()

// weakMap的基本属性
let dome5 = () => {
    let key = {}
    let arr = []
    let weakMap = new WeakMap([[key,'1'],[arr,'2']]) // 键必须为非空的对象
    console.log(weakMap.has(key))
    console.log(weakMap.size) // 没有size、forEach
    weakMap.set(key, '4')
    weakMap.delete(key)
    // weakMap.clear() 不存在clear（）方法
    console.log(weakMap.get(arr))
}
dome5()
/**
 * weakMap的两种用法
 */

function dome3() {
    let map = new WeakMap(),
        element = document.querySelector(".element");
    map.set(element, "Original");
    let value = map.get(element);
    console.log(value); //	"Original"
    //	移除元素
    element.parentNode.removeChild(element);
    element = null;
}

function dome4() {
    let Person = (function () {
        let privateData = new WeakMap();

        function Person(name) {
            privateData.set(this, {
                name: name
            });
        }
        Person.prototype.getName = function () {
            return privateData.get(this).name;
        };
        return Person;
    }());

}