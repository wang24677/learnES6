/**
 * @param
 */
class Test {
    constructor (a, b) {
        this.name = a
        this.age = b
        this.handle = this.handle.bind(this)
    }
    pointOut () {
        console.log(this.name)
    }
    handle () {
        this.pointOut ()
    }
    returnHandle () {
        return () => {
            this.pointOut()
        }
    }
}
class AnotherTest extends Test {
    constructor (a,last) {
        this.last = last

        super(a)
        // this.last = last
    }
    pointOutAll () {
        console.log(this.name + this.last)
    }
}
// let one = new Test('battle')
let two = new AnotherTest('battle', 'forg')
// one.pointOut()
// one.handle()
// one.returnHandle()()
let testFun = two.handle
// two.handle()
testFun()