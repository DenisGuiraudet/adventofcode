import { DATA } from './data.ts'
import { DATA_TEST } from './data_test.ts'

const data = DATA as [number, number][]

// First sort both lists

const list1: string[] = []
const list2: string[] = []

for (let i = 0; i < data.length; i++) {
    const item = data[i]
    const item0 = `${item[0]}`
    const item1 = `${item[1]}`

    list1.push(item0)
    list2.push(item1)
}

list1.sort()
list2.sort()

// Compute diff between each element of the sorted lists

let diff = 0

for (let i = 0; i < data.length; i++) {
    diff += Math.abs(parseInt(list1[i]) - parseInt(list2[i]))
}

console.log(diff)
