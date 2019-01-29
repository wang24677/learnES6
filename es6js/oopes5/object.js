var people = {}
Object.defineProperty(people, 'age', {
    configurable: true, 
    enumerable: false,
    writable: false,
    value: 35
})
Object.defineProperty(people, 'name', {
    configurable: false,
    enumerable: true,
    writable: true,
    value: 'poi'
})
// console.log(people)
Object.defineProperty(people, 'age', { 
    enumerable: true,
})

var book = {
    _year: 2019,
    count: 0
}
Object.defineProperty(book, 'year', {
    get: function () {
        return this._year
    },
    set: function (newYear) {
        if (newYear > this._year) {
            this.count = newYear - this._year
            this._year = newYear
        }
    }
})

function Super () {
    this.colors = ['red', 'green']
}
function Sub () {
    Super.call(this)
}
function ProSub () {

}
ProSub.prototype = new Super()

var protest = new ProSub()
var protest1 = new ProSub()
protest.colors.push('black')
console.log(protest1.colors)

var test = new Sub()
var testAnther = new Sub()
test.colors.push('yellow')
