/**
 * filter
 */
const points = [78, 25, 100, 65, 80]
const res = points.filter(function(x) {
    return x > 80
})
console.log(res)

/**
 * map
 */
const res2 = points.map(function(a) {
    return a*10
})
console.log(res2)

let s = '1'
console.log(s)
// const changedString = s.padEnd(8, '0')
const changedString = s.padStart(2, '0')
console.log(changedString)

let m = true
let n = 1
// double equals == : loose equality
// triple equals === : strict equality
if(m == n) {
    console.log('equal')
} else {
    console.log('not equal')
}