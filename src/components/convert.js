// Data conversion script
const fs = require('fs')

const data = require('./science.js')

const convertedData = []

data.forEach(item => {
  const obj = {
    practices: [],
    concepts: []
  }

  Object.keys(item).forEach(element => {
    if(element.includes("Science and Engineering Practices: ")) {
      const title = element.split("Science and Engineering Practices: ")[1]
      const info = item[element]
      
      obj.practices.push({
        title,
        info
      })
    } else if(element.includes("Crosscutting Concept: ")) {
      const title = element.split("Crosscutting Concept: ")[1]
      const info = item[element]
      
      obj.concepts.push({
        title,
        info
      })
    } else {
      obj[element] = item[element]
    }
  })

  convertedData.push(obj)
})

const json = JSON.stringify(convertedData)
fs.writeFileSync('./test.json', json)
