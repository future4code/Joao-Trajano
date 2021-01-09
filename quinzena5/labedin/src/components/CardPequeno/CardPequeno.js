import React from 'react'


export function CardPequeno (props) 
{
    return(
        <div className="App">  
            <h1>Email para contato</h1>
            <span>
                <p><strong>Gmail</strong>: {props.email}</p>
            </span>

        </div>
    )
}

export default CardPequeno;