### 按顺序进行 Promise

猜测是先执行的 p4 函数，再依次执行 p3、p2、p1

``` js
/**
 * Runs promises from array of functions that can return promises
 * in chained manner
 *
 * @param {array} arr - promise arr
 * @return {Object} promise object
 */
function runPromiseInSequence(arr, input) {
  return arr.reduce(
    (promiseChain, currentFunction) => promiseChain.then(currentFunction),
    Promise.resolve(input)
  )
}

// promise function 1
function p1(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 5)
  })
}

// promise function 2
function p2(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 2)
  })
}

// function 3  - will be wrapped in a resolved promise by .then()
function f3(a) {
 return a * 3
}

// promise function 4
function p4(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 4)
  })
}

const promiseArr = [p1, p2, f3, p4]
runPromiseInSequence(promiseArr, 10)
.then(console.log)   // 1200

```

### 使用函数组合实现管道

``` js
// Building-blocks to use for composition
// double，x 的值变成原来的两倍
const double = x => x + x
// double，x 的值变成原来的三倍
const triple = x => 3 * x
// double，x 的值变成原来的四倍
const quadruple = x => 4 * x

// Function composition enabling pipe functionality
/*
这里的 functions 一个数组（这里涉及到 argument 的知识点，可以去看一下），也就是 pipe 方法中传入的参数，这里的参数是函数，也就是说，数组
functions 中的元素是一个个的函数然后第一个箭头函数后面的 initialValue 是方法调用时传入的参数。也就是传入第二个括号里面的值，为什么说是第二个括
号呢，我们来看一下
调用 multiply6(6) 这个方法的时候，实际上是 pipe(double, triple)(6)；然后我们之前说了 functions 已经是一个数组了
那么我们来举一个例子；
在执行 multiply6(6) 时，实际上，[double,triple].reduce(
  // 上一次返回的值，作为这一次的形参
  (acc,fn) => fn(acc),
  6
)
*/
const pipe = (...functions) => initialValue => functions.reduce(
  // 上一次返回的值，作为这一次的形参
  (acc, fn) => fn(acc),
  initialValue
)

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple)
const multiply9 = pipe(triple, triple)
const multiply16 = pipe(quadruple, quadruple)
const multiply24 = pipe(double, triple, quadruple)

// Usage
console.log(multiply6(6));  // 36
console.log(multiply9(9));  // 81
console.log(multiply16(16));  // 256
console.log(multiply24(10));  // 240

```

### 使用 reduce 实现 map

``` js
/*
如果数组原型上没有 mapUsingReduce（map 使用 reduce 实现） 这个方法，那么我们就手动的给它添加一个这样的方法
*/
if (!Array.prototype.mapUsingReduce) {
  Array.prototype.mapUsingReduce = function(callback, initialValue) {
    // 在使用 reduce 方法中，初始值是一个空数组
    return this.reduce(function(mappedArray, currentValue, currentIndex, array) {
      mappedArray[currentIndex] = callback.call(initialValue, currentValue, currentIndex, array)
      return mappedArray
    }, [])
  }
}
// 要注意，这里 [1, 2, , 3] 数组的长度为 4
[1, 2, , 3].mapUsingReduce(
  (currentValue, currentIndex, array) => currentValue + currentIndex + array.length
) // [5, 7, , 10]
```

``` html
<html>
  <div>
    你好呀
  </div>
</html>
```

``` mermaid
C4Context
title System Context diagram for Internet Banking System

Person(customerA, "Banking Customer A", "A customer of the bank, with personal bank accounts.")
Person(customerB, "Banking Customer B")
Person_Ext(customerC, "Banking Customer C")
System(SystemAA, "Internet Banking System", "Allows customers to view information about their bank accounts, and make payments.")

Person(customerD, "Banking Customer D", "A customer of the bank, <br/> with personal bank accounts.")

Enterprise_Boundary(b1, "BankBoundary") {

  SystemDb_Ext(SystemE, "Mainframe Banking System", "Stores all of the core banking information about customers, accounts, transactions, etc.")

  System_Boundary(b2, "BankBoundary2") {
    System(SystemA, "Banking System A")
    System(SystemB, "Banking System B", "A system of the bank, with personal bank accounts.")
  }

  System_Ext(SystemC, "E-mail system", "The internal Microsoft Exchange e-mail system.")
  SystemDb(SystemD, "Banking System D Database", "A system of the bank, with personal bank accounts.")

  Boundary(b3, "BankBoundary3", "boundary") {
    SystemQueue(SystemF, "Banking System F Queue", "A system of the bank, with personal bank accounts.")
    SystemQueue_Ext(SystemG, "Banking System G Queue", "A system of the bank, with personal bank accounts.")
  }
}

BiRel(customerA, SystemAA, "Uses")
BiRel(SystemAA, SystemE, "Uses")
Rel(SystemAA, SystemC, "Sends e-mails", "SMTP")
Rel(SystemC, customerA, "Sends e-mails to")
```






































