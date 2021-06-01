const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://Nitish:Nitish@8051@cluster0.wv07o.mongodb.net/phonebook`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
    
    title: String,
    content: String,
})

const Person = mongoose.model('Person', personSchema)
const person = new Person({
    
    title: 'Phonebook',
    content: 'Anna 040-1234556'

    })

      Person.find({}).then(result => {
        console.log(person.title)
        result.forEach(person => {
            
          console.log(person.content)
          mongoose.connection.close() 
        })
   
    })