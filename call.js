// call 是什么
// call 是函数原型链的一个方法，Function.prototype.call() 

//  call 的作用是什么
//  1. 修改函数的 this 指向    
//  2. 调用其他函数的方法，单个传入参数（apply 传入一个数组）   

var foo = {}
function bar(param1, param2) {
    console.log(this)
    console.log(param1, param2)
}
bar.call(foo, '1', '2')     // foo.  1,2
bar.apply(foo, ['1', '2'])  // foo.  1,2

// es6 call 的实现
Function.prototype.call = (context, ...args) => {
    let context = context ? Object(context) : window
    context.fn = this  // 获取 call 的调用者，即上文的 bar 函数
    let res = context.fn(...args)  // 传入参数，执行 bar 函数. 修改 this 指向传入的 foo
    delete context.fn
    return res
}

// es5 call
Function.prototype.call = function (context) {
    let context = context ? Object(context) : window
    context.fn = this
    var args = []
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']')
    }
    var result = eval('context.fn(' + args + ')')
    delete context.fn
    return result
}

// apply 的实现
Function.prototype.apply = function(context, ...args) {
    context = context ? Object(context) : window
    context.fn = this  
    let res = context.fn(args)   // 执行apply 参数为数组
    delete context.fn
    // return 函数返回值
    return res
}


