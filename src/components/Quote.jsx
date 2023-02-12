import React from "react";

function Quote({quote}){
    return (
        <div>

            <h2>{quote.quote}</h2>
            <p>{quote.author}</p>
            
        </div>
    )
}

export default Quote;