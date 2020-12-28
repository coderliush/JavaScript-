// bind 的使用
var obj = {
    age: 18,
    myFun: function (a, b, c) {
        console.log('this', this);
        console.log(a, b, c)
    }
}

var db = { name: 1 }
let bound = obj.myFun.bind(db, '1', '2')
console.log(bound('3'))  // 偏函数   

// bind 绑定 this 
// bind 是一个偏函数
Function.prototype.bind = function() {
    var thatFn = this
    var context = arguments[0]
    var args = [].slice.call(arguments, 1)
    return function () {
        var argsList = args.concat([].slice.call(arguments))  // 合并 bind 的参数和调用传入的参数
        thatFn.apply(context, argsList)
    }
}