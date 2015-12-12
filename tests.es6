let barrier = require('./src/barrier')

let pb = new barrier.PromiseBarrier()
let list = []
let boop = (item) => {
    list.push(item)
    console.log('PUSH: ' + item + " -> " + list)
}

pb.add((resolve, reject) => {
    boop(1)
    resolve()
})

pb.add((resolve, reject) => {
    setTimeout(() => {
        boop(2)
        resolve()
    }, 1000)
})

pb.add((resolve, reject) => {
    setTimeout(() => {
        boop(3)
        resolve()
    }, 1000)
})

pb.add((resolve, reject) => {
    setTimeout(() => {
        boop(4)
        resolve()
    }, 500)
})

pb.then(() => {
    console.log("All Done!")
    console.log([1,4,2,3] + " should equal " + list)
})
