/**
 * 解构函数
 */
let home = {
    name: 'myhome',
    homeObject: {
        door: 'new',
        window: [1, 2, 3],
        bed: {
            face: 'red',
            leg: [{
                    cailiao: 'wood',
                    length: 3
                },
                {
                    cailiao: 'iron',
                    length: 4
                }
            ]
        }
    }
}
/**
 * 解构测试
 */
let deom1 = () => {
    let {
        homeObject: {
            bed: {
                leg: [leg1, leg2]
            }
        }
    } = home
    console.log(leg1, leg2)
}
// deom1()
/**
 * 解构重新命名与默认值
 */
let deom2 = () => {
    let {
        name: newname,
        homeObject: {
            window: age = '未定义'
        }
    } = home
    // console.log(name) undefined
    console.log(newname, age)
}
// deom2()
/**
 * 数组的解构
 */
let dome3 = () => {
    let {
        homeObject: {
            bed: {
                leg: myArr
            }
        }
    } = home
    let [...members] = myArr
    myArr.push({
        cailiao: 'iron',
        length: 6
    })
    console.log(members, myArr)
}
dome3()
/**
 * 参数解构
 *
 */
let dome4 = (name, age, {
    secure = false,
    path = "/",
    domain = "example.com",
    expires = new Date(Date.now() + 360000000)
} = {}) => {
    console.log(secure,
        path,
        domain,
        expires)
}
// dome4('wang', 24)
dome4('wang', 24, {
    secure : false,
    expires : new Date(Date.now())
})