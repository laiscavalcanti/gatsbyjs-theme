const numbers = {
    vp3:    321,
    vp4:    481,
    vp7:    801,
    vp10:   1025, // x 768
    vp12:   1281, // x 800/960
}

let breakpoints = {}
for (const prop in numbers) {
    breakpoints[prop] = `@media only screen and (max-width: ${numbers[prop]-1}px)`
}

export { numbers, breakpoints }
