class PromiseBarrier {
    constructor() {
        this.promise_list = []
    }

    
    
    add_promise(pro) {
        this.promise_list.push(pro)
        let ret = Promise.all(this.promise_list)
        ret.then(() => {
            this.cleanup(pro)
        })
        return ret
    }

    add(func) {
        let promise = new Promise(func)
        return this.add_promise(promise)
    }
}
