import React from 'react'

export const Home = ({names}) => {
    return (
        <div>
            <h1>Home</h1>
            <div>
            {names && names.map(name => {
                return <p>{name}</p>
            })}
            </div>
        </div>
    )
}
