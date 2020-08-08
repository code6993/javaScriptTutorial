let x=10
let y=10;
console.log(x*y);


//in js, primitive types are immutable
let test= "abcd";
test[2]="b";
console.log(test[2]);
//prints abcd and not abbd


//integers literals

let  k= 20824382032; //NUMBER
let z= 0xBADCAFE; //HexaDecimal 
let k2 = 0b1010101; //Binary
let z2 = 0o2332; //octal 
console.log("Value of z = "+ z); // prints 195939070
console.log("Value of K2= "+ k2); // prints 85
console.log("Value of z2 = "+ z2); // 1242


//floating points literal 





//Working with Strings
let s = "Hello, world"; // Start with some text.

// Obtaining portions of a string
s.substring(1,4)        // => "ell": the 2nd, 3rd, and 4th characters.
s.slice(1,4)            // => "ell": same thing
s.slice(-3)             // => "rld": last 3 characters
s.split(", ")           // => ["Hello", "world"]: split at delimiter string

// Searching a string
s.indexOf("l")          // => 2: position of first letter l
s.indexOf("l", 3)       // => 3: position of first "l" at or after 3
s.indexOf("zz")         // => -1: s does not include the substring "zz"
s.lastIndexOf("l")      // => 10: position of last letter l

// Boolean searching functions in ES6 and later
s.startsWith("Hell")    // => true: the string starts with these
s.endsWith("!")         // => false: s does not end with that
s.includes("or")        // => true: s includes substring "or"

// Creating modified versions of a string
s.replace("llo", "ya")  // => "Heya, world"
s.toLowerCase()         // => "hello, world"
s.toUpperCase()         // => "HELLO, WORLD"
s.normalize()           // Unicode NFC normalization: ES6
s.normalize("NFD")      // NFD normalization. Also "NFKC", "NFKD"

// Inspecting individual (16-bit) characters of a string
s.charAt(0)             // => "H": the first character
s.charAt(s.length-1)    // => "d": the last character
s.charCodeAt(0)         // => 72: 16-bit number at the specified position
s.codePointAt(0)        // => 72: ES6, works for codepoints > 16 bits

// String padding functions in ES2017
"x".padStart(3)         // => "  x": add spaces on the left to a length of 3
"x".padEnd(3)           // => "x  ": add spaces on the right to a length of 3
"x".padStart(3, "*")    // => "**x": add stars on the left to a length of 3
"x".padEnd(3, "-")      // => "x--": add dashes on the right to a length of 3

// Space trimming functions. trim() is ES5; others ES2019
" test ".trim()         // => "test": remove spaces at start and end
" test ".trimStart()    // => "test ": remove spaces on left. Also trimLeft
" test ".trimEnd()      // => " test": remove spaces at right. Also trimRight

// Miscellaneous string methods
s.concat("!")           // => "Hello, world!": just use + operator instead
"<>".repeat(5)          // => "<><><><><>": concatenate n copies. ES6



//In ES6 and later, string literals can be delimited with backticks
/*
Everything between the ${ and the matching } is interpreted as a JavaScript expression
Everything outside the curly braces is normal string literal text. The expression inside the braces 
is evaluated and then converted to a string and inserted into the template, replacing the dollar sign, the curly braces, and everything in between them.

*/
let name = "Utkarsh";
let greeting = `Hello ${ name }.`; 

let hola = `Hello ${name+ " Sinha \u2718" + 9*2}`;

console.log(greeting);
console.log(hola);
