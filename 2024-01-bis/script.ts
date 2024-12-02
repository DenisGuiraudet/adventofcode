import { DATA } from './data.ts'
import { DATA_TEST } from './data-test.ts'

const data = DATA as [number, number][]

const countList1: { [key: number]: number } = {}
const countList2: { [key: number]: number } = {}

for (let i = 0; i < data.length; i++) {
    if (countList1[data[i][0]] === undefined) {
        countList1[data[i][0]] = 1
    } else {
        countList1[data[i][0]]++
    }
    if (countList2[data[i][1]] === undefined) {
        countList2[data[i][1]] = 1
    } else {
        countList2[data[i][1]]++
    }
}

let total = 0

for (const number1 in countList1) {
    if (countList2[number1] !== undefined) {
        total += Number(number1) * countList1[number1] * countList2[number1]
    }
}

console.log(total)
