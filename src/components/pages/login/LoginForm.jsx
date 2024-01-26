import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginForm() {
    const [inputValue, setInputValue] = useState("")
    const navigate = useNavigate()
    
    const handleSubmit = (event) => { 
        event.preventDefault()
        setInputValue("")
        navigate(`order/${inputValue}`)
    }    
    
    const handleChange = (event) => { 
        setInputValue(event.target.value)
    }

    return (
        <form action="submit" onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous</h1>
            <h2>Connectez-vous</h2>
            <br />
            <input 
                value={inputValue} 
                onChange={handleChange} 
                type="text" 
                placeholder="Entrez votre prénom..." 
                required
            />
            <button>Accédez à votre espace</button>
        </form>
    )
}
