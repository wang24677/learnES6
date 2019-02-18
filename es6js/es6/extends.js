const frist = {
    a: {
        aa: 1,
        bb: 2,
    },
    b: 'haha',
}
let second = {
    c: '第二个',
    b: 'xixi',
}
Object.assign(second, frist)
let third = JSON.parse(JSON.stringify(frist))
third.b = 'heihei'
third.a.aa = 100
console.log(second)