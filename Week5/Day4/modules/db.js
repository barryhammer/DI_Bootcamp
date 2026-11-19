const knex = require('knex');

const db = knex({
  client:'pg',
  connection:{
    host: '127.0.0.1',
    port: '5555',
    user: 'dummy',
    password: '123456',
    database: 'users'
  }
})

function createUser({user}){
  return db('users').insert(
    {
      username:user
    }
  )
  .returning('*')
}

module.exports = {
  createUser
}