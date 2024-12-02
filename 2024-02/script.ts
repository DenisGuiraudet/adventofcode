import DATA_TEST from './data-test.json' with { type: "json" }
import DATA from './data.json' with { type: "json" }

let total = 0

const data: number[][] = DATA

for (const line of data) {
  let safe = true

  // In case the line has only one number, it is always safe
  if (line.length >= 2) {
    const firstDiff = line[0] - line[1]

    if (line[0] > line[1] && firstDiff >= 1 && firstDiff <= 3) {
      for (let i = 1; i < line.length - 1; i++) {
        const diff = (line[i] - line[i + 1])
        if (diff < 1 || diff > 3) {
          safe = false
          break
        }
      }

    } else if (line[0] < line[1] && firstDiff >= -3 && firstDiff <= -1) {
      for (let i = 1; i < line.length - 1; i++) {
        const diff = (line[i + 1] - line[i])
        if (diff < 1 || diff > 3) {
          safe = false
          break
        }
      }
    } else {
      safe = false
    }

  }

  if (safe) {
    console.log(JSON.stringify(line), safe)
    total ++
  }
}

console.log(total)
