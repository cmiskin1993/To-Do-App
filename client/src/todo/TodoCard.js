import React from 'react'



const MatchesCard = ({ todo }) => {


  return (
          <li className="card">
                      <h3>{todo.tittle}</h3>
                      <p>{todo.instructions} </p>
          </li>
  )
}

export default MatchesCard