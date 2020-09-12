console.log(Math.pow(2,53))           // => 9007199254740992: 2 to the power 53
console.log(Math.round(.6))           // => 1.0: round to the nearest integer
console.log(Math.ceil(.6))            // => 1.0: round up to an integer
console.log(Math.floor(.6))           // => 0.0: round down to an integer
console.log(Math.abs(-5)   )          // => 5: absolute value
console.log(Math.max(9,999,787))          // Return the largest argument
console.log(Math.min(90,-3,7934))          // Return the smallest argument
console.log(Math.random()        )    // Pseudo-random number x where 0 <= x < 1.0
console.log(Math.PI              )   // π: circumference of a circle / diameter
console.log(Math.E                )   // e: The base of the natural logarithm
console.log(Math.pow(3, 1/3)       )  // => 3**(1/3): the cube root of 3
console.log(Math.sin(0)             ) // Trigonometry: also Math.cos, Math.atan, etc.
console.log(Math.log(10)             )// Natural logarithm of 10
console.log(Math.log(100)/Math.LN10 ) // Base 10 logarithm of 100
console.log(Math.log(512)/Math.LN2  ) // Base 2 logarithm of 512
console.log(Math.exp(3)   )  // Math.E cubed

console.log(Math.cbrt(27))    // => 3: cube root
console.log(Math.hypot(3, 4)) // => 5: square root of sum of squares of all arguments
console.log(Math.log10(100))  // => 2: Base-10 logarithm
console.log(Math.log2(1024))  // => 10: Base-2 logarithm
console.log(Math.log1p(122))    // Natural log of (1+x)); accurate for very small x
console.log(Math.expm1(9))    // Math.exp(x)-1; the inverse of console.log(Math.log1p())
console.log(Math.sign(-80))     // -1, 0, or 1 for arguments <, ==, or > 0
console.log(Math.imul(2,3))   // => 6: optimized multiplication of 32-bit integers
console.log(Math.clz32(0xf))  // => 28: number of leading zero bits in a 32-bit integer
console.log(Math.trunc(3.9))  // => 3: convert to an integer by truncating fractional part
console.log(Math.fround(90.89898))   // Round to nearest 32-bit float number
console.log(Math.sinh(90))     // Hyperbolic sine. Also console.log(Math.cosh()), console.log(Math.tanh())
console.log(Math.asinh(9))    // Hyperbolic arcsine. Also console.log(Math.acosh()), console.log(Math.atanh())