# fp-recursion

Functional programming requires recursion instead of loop. Writing recursion destracts sometimes developers from focusing more on business logic. So, to make use of recursion instead of loop and implement it easily the library can be used.

### Install

`npm install --save fp-recursion`

### Usage

`import { forEach, forLoop } from 'fp-recursion';`

OR

`const { forEach, forLoop } from 'fp-recursion';`


### forEach

Iterates for each element of source array and generates new array / object / primitive value. 

* Systax 

```
forEach(
    srcArray, // For each element of the source array the recursion executes
    target, // This can be any of type e.g. Array, Object, Primitive value. The value is passed to oprFunc and return value of oprFunc will be used as parameter to next call of oprFunc
    oprFunc, // The function will execute for each element of the source array
    idx, // Default value is 0. Index from which evaluation starts.
    incr // Default value is 1. Increment value to evaluate next element.
);
```

* oprFunc (forEach)

```
oprFunc(
    ele, // Element of source array
    target, // To be used to compute new value and return from the function. The returned value will get here in next iteration
    idx // Currennt index
)
```

* Example

```
const srcArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetArr = forEach(srcArr, [], (val, arr) => [...arr, val + 1]);
console.log(targetArr); // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
```

### forLoop

Iterates for no. of count value and generates new array / object / primitive value. 

* Syntax

```
forLoop(
    count, // No. of times the recursion evaluates
    target, // This can be any of type e.g. Array, Object, Primitive value. The value is passed to oprFunc and return value of oprFunc will be used as parameter to next call of oprFunc
    oprFunc, // The function will execute for each element of the source array
    idx, // Default value is 0. Index from which evaluation starts.
    incr // Default value is 1. Increment value to evaluate next element.
)
```

* oprFunc (forEach)

```
oprFunc(
    idx, // Currennt index
    target, // To be used to compute new value and return from the function. The returned value will get here in next iteration
    count // Initial value of count
)
```

* Example

```
const targetArr = forLoop(10, [], (idx, arr) => [...arr, idx * 2]);
console.log(targetArr); //[0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
```