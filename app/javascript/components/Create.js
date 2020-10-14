import React, { useState } from 'react'

const Create = () => {
    const [name, setName] = useState('')
    const [projectName, setProjectName] = useState('')
    const [stepNumber, setStepNumber] = useState(0)

    const handleSubmit = (event) => {
        event.preventDefault()
        const body = {
            name: name,
            projectName: projectName,
            stepNumber: stepNumber
        }
        fetch('/workflow/create', {
            method: "POST",
            headers: {
                "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={name} onChange={(event) => setName(event.target.value)}/>
                <input type='text' value={projectName} onChange={(event) => setProjectName(event.target.value)}/>
                <input type='integer' value={stepNumber} onChange={(event) => setStepNumber(event.target.value)}/>
                <input type='submit' value="Create workflow"></input>
            </form>
        </div>
    )
}

export default Create