1. let/const
2. Tempelate Literals
3. default values

# `let/const`

To understand var,let and const,

We need to understand the following terms properly:

- variable declerations vs initialisation
- hoisting
- scope (function scope)

### declaration vs initialisation:

initialises a new identifier

var name
// declaration

console.log(name)

name = 'masai'
// this is an initialisation

# Hoisting

Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

x = 5; // Assign 5 to x

var x

# Scope:

If a variable is declaration is inside a function, then it is said that the variable is defined with function local scope in that function.
So this variable is accesible in that function, and any of its nested functions.
Otherwise it has a global scope ie. they are members of the global object.

function getName(){
var name = 'masai'
return name
}
getName()
console.log(name)

# Example

console.log('Start of File')
function varTest() {
var x = 1
console.log('x before if = ',x);
if (true) {
var x = 2; // same variable!
console.log('x inside if = ',x); // 2
}
console.log('x after if = ',x); // 2
}

function letTest() {
let y = 1;
console.log('y before if = ',y);
if (true) {
let y = 2; // same variable!
console.log('y inside if = ',y); // 2
}
console.log('y after if = ',y); // 1
}

function test(){
{
var a=100;
let b =200;
const c=300;

        if(true){
          console.log('a1 =',a);
          console.log('b1 =',b);
          console.log('c1 =',c);
            }
        }
      if(true){
          console.log('Second if statement called')
          console.log('a2 =',a);
          console.log('b2 =',b);//error b is not defined
          console.log('c2 =',c);//error c is not defined
      }

}

varTest(); // Check varTest() function.

letTest(); // Check letTest() function.

test();  
 // Check letTest() function.
// First if statement will give no errors
// Second if statement will give you an errors
// console.log(`Value of x`,x)

console.log('End of File')

So we have understood declaration vs initialisation, hoisting, function local scope.

- let follows a block scope. var doesnt follow block scope.
- If var is used inside a for loop, it is still accessible outside it.
- let throws a Reference error when accessing the variable outside of a for loop or any block scope (written inside `{ ... }` )
- let also throws an error when you try to access a variable before its declared
- let trows an error when you redeclare a variable
- const is the same as let, except it needs a value to be assigned while declaring, and does not allow reassigning values to a variable.

### Creating global object property

At the top level, let, unlike var, does not create a property on the global object:

var foo = "Foo"; // globally scoped
let bar = "Bar"; // globally scoped

console.log(window.foo); // Foo
console.log(window.bar); // undefined

Summary

`var vs. let vs. const`

`var:`

```
var is function scoped
variables will be undefined when accessing it before it's declared

```

`let:`

```
let is block scoped
ReferenceError when accessing a let variable before it's declared
Syntax errror when redeclaring a let variable again

```

`const:`
