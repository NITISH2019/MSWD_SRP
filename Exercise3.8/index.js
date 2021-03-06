
const express = require('express')
var morgan = require('morgan')
const app = express()
app.use(morgan('tiny'))

app.use(express.json())


let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456"
    
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523"
    
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345"

  },
  {
      id: 4,
      name: "Marry Poppendick",
      number: "39-23-6423122"
  }
]

app.get('/api/persons', (req, res) => {
    res.json(persons)
  })

  app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = persons.find(note => note.id === id)
  
    if (note) {
      response.json(note)
    } else {
      response.status(404).end()
    }
  })

  const generateId = () => {
    const maxId = persons.length > 0
      ? Math.max(...persons.map(n => n.id))
      : 0
    return maxId + 1
  }
  
  app.post('/api/persons', (request, response) => {
    const body = request.body
  
    if (!body.name) {
      return response.status(400).json({ 
        error: 'content missing' 
      })
    }
  
    const note = {
      name: body.name,
      number: body.number,
      id: generateId()
    }
  
    persons = persons.concat(note)
  
    response.json(note)
  })





  const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)})