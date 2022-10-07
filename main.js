// const hours = [ 6, 9, 7, 8, 6, 6, 8, 5, 9, 8, 7, 6, 7, 7, 8, 6, 9 ]
// let grumpyHours = [0]
// let happyHours = [0]

// for (const mood of hours) {
//     if (mood >= 7) {
//         ++ happyHours
//     }
//     else {
//        ++ grumpyHours
//     }
// }

// console.log(`I was grumpy on ${grumpyHours} days. I was happy on ${happyHours} days.`)

const hours = [ 6, 9, 7, 8, 6, 6, 8, 5, 9, 8, 7, 6, 7, 7, 8, 6, 9 ]
let grumpyHours = []
let happyHours = []

for (const mood of hours) {
    if (mood >= 7) {
        happyHours.push(mood)
    }
    else {
       grumpyHours.push(mood)
    }
}

console.log(`I was grumpy on ${grumpyHours.length} days. I was happy on ${happyHours.length} days.`)