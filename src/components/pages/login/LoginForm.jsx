import React, { useState } from 'react'

export default function LoginForm() {
    // State
    const [inputValue, setInputValue] = useState("")
    // Comportements
    const handleSubmit = (event) => { 
        event.preventDefault()
        alert(`Bonjour  ${inputValue} !`) 
        setInputValue("")
    }    
    
    const handleChange = (event) => { 
        setInputValue(event.target.value)
    }
    // Affichage
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
