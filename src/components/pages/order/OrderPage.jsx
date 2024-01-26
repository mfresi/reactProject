import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function OrderPage() {
  
  const { userName } = useParams()

  return (
    <div>
      <h1>Bonjour {userName}</h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </div>
  )
}
