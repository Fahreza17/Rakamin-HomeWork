function generateRandomArray(length) {
    let randomArray = []

    for (let i= 0; i< length; i++) {
        const randomNumber = Math.floor(Math.random() * 50) + 1
        randomArray.push(randomNumber)
    }
    return randomArray
}

function splitArray(array) {
    let arrayIndexGenap = []
    let arrayIndexGanjil = []

    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            arrayIndexGenap.push(array[i])
        } else {
            arrayIndexGanjil.push(array[i])
        }
    }
    return [arrayIndexGenap, arrayIndexGanjil]
}

function findMin(array) {
    let min = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min= array[i]
        }
    }
    return min
}

function findMax(array) {
    let max = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max
}

function calculateTotal(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total
}

function calculateMean(array) {
    const total = calculateTotal(array)
    return total / array.length
}


const length = 100
const randomArray = generateRandomArray(length)
const [evenArray, oddArray] = splitArray(randomArray)

const minEven = findMin(evenArray)
const minOdd = findMin(oddArray)

const maxEven = findMax(evenArray)
const maxOdd = findMax(oddArray)

const totalEven = calculateTotal(evenArray)
const totalOdd = calculateTotal(oddArray)

const meanEven = calculateMean(evenArray)
const meanOdd = calculateMean(oddArray)

console.log("Array Genap : " + "\n" + evenArray)
console.log("Array Ganjil : " + "\n" + oddArray)


console.log("\n" + "min array ganjil : " + minOdd + "\n" + "min array genap : " + minEven)
if (minEven > minOdd) {
    console.log("Min lebih besar array genap")
} else if (minEven < minOdd) {
    console.log("Min lebih besar array ganjil")
} else {
    console.log("Min memiliki nilai yang sama pada array genap dan ganjil")
}

console.log("\n" + "Max array ganjil : " + maxOdd + "\n" + "min array genap : " + maxEven)
if (maxEven > maxOdd) {
    console.log("Max lebih besar array genap")
} else if (maxEven < maxOdd) {
    console.log("Max lebih besar array ganjil")
} else {
    console.log("Max memiliki nilai yang sama pada array genap dan ganjil")
}

console.log("\n" + "Total array ganjil : " + totalOdd + "\n" + "Total array genap : " + totalEven)
if (totalEven > totalOdd) {
    console.log("Total lebih besar array genap")
} else if (totalEven < totalOdd) {
    console.log("Total lebih besar array ganjil")
} else {
    console.log("Total memiliki nilai yang sama pada array genap dan ganjil")
}

console.log("\n" + "Mean array ganjil : " + meanOdd + "\n" + "Mean array genap : " + meanEven)
if (meanEven > meanOdd) {
    console.log("Rata rata lebih besar array genap")
} else if (meanEven < meanOdd) {
    console.log("Rata rata lebih besar array ganjil")
} else {
    console.log("Rata rata memiliki nilai yang sama pada array genap dan ganjil")
}