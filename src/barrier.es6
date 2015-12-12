class PromiseBarrier {
    constructor() {
        this.promise_list = []
        this.logging = false
    }

    add_promise(pro) {
        this.promise_list.push(pro)
        let ret = Promise.all(this.promise_list)
        return ret
    }

    add(func) {
        let promise = new Promise(func)
        return this.add_promise(promise)
    }

    then(success, failure) {
        return Promise.all(this.promise_list).then(success, failure)
    }
}

if (typeof module !== undefined) {
    module.exports.PromiseBarrier = PromiseBarrier
}
