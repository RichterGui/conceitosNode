const express = require('express');
const cors = require('cors');

const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next) {
  const {user} = request.headers;

  const human = users.find(verify => verify.user === user);

  if(!human) {
    return response.status(400).json({error: "error not found"})
  }

  request.verify = human;

  return next();

}
  // Complete aqui
app.post('/users', (request, response) => {
      const { name, username } = request.body;

      const userAlreadyCreated = users.some(
          (users) => users.name === name);

      if(userAlreadyCreated){
        return response.status(400).json({error: "User Already Created"})
      }

      const id = uuid();
      
      users.push({
        id,
        name,
        username,
        todos: []
      })
});

app.get('/todos', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

module.exports = app;