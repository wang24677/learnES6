/**
 * Symbol的基本用法
 */

class NewSymbol {
    constructor(name) {
        let firstName = Symbol('person de firstName')
        this[firstName] = name
        console.log(this[firstName])
    }
    logName() {
        // console.log(this[firstName])
    }
}

var person1 = new NewSymbol('wang')
person1.logName()

let deom = () => {
    let firstName = Symbol("first name");
    //	使用一个需计算字面量属性
    let person = {
        [firstName]: "Nicholas"
    };
    //	让该属性变为只读
    Object.defineProperty(person, firstName, {
        writable: false
    });
    let lastName = Symbol("last	name");
    Object.defineProperties(person, {
        [lastName]: {
            value: "Zakas",
            writable: false
        }
    });
    console.log(person[firstName]); //	"Nicholas"
    console.log(person[lastName]);
}
// deom()
/**
 * 共享符號
 */

let deom1 = () => {
    let uid = Symbol.for('uid') // 注册符号到注册表中
    let object = {}
    object[uid] = '222222'

    let uid2 = Symbol.for('uid')
    console.log(object[uid2])
}
deom1()