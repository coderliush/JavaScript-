// call 是什么
// call 是函数原型链的一个方法，Function.prototype.call() 

//  call 的作用是什么
//  1. 修改函数的 this 指向    
//  2. 调用其他函数的方法   

// call 怎么用
var foo = {
    value: 1
}
function bar(name) {
    this.name = name
    console.log(this.value)  // 1
}
bar.call(foo, 'name')

// call 的实现
Function.prototype.call = (context, ...args) => {
    // context 如果为 string 或者 number，Object(context) 转为对象，以便在它上面挂载函数
    let context = context ? Object(context) : window
    // 示例中 call 函数的调用者为 bar，即 this 指向 bar 函数
    context.fn = this
    // 使 bar 函数的 this 指向 context. 执行函数，如果函数有返回值，return 返回值
    let res = context.fn(args)
    delete context.fn
    // return 函数返回值
    return res
}

// apply 的实现
Function.prototype.apply = (context, args) => {
    // context 如果为 string 或者 number，Object(context) 转为对象，以便在它上面挂载函数
    let context = context ? Object(context) : window
    // 示例中 call 函数的调用者为 bar，即 this 指向 bar 函数
    context.fn = this
    // 使 bar 函数的 this 指向 context. 执行函数，如果函数有返回值，return 返回值
    let res = context.fn(...args)
    delete context.fn
    // return 函数返回值
    return res
}


// 使用 call
Function.prototype.bind = (context, ...args) => {
    let that = this
    return () => { that.call(context, ...args) }
}


