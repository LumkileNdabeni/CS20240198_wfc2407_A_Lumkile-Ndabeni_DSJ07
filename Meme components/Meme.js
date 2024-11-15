import React from "react"
import memesData from "../memesData.js"

export default function Meme() {

    
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        // memesArray[randomNumber].url  <-- this line is incomplete!

        // useStata
            const [count, setCount] = React.useState(0)
            
            function add() {
                setCount(prevCount => prevCount + 1)
            }
            
            function subtract() {
                setCount(prevCount => prevCount - 1)
            }
            
            return (
                <div className="counter">
                    <button className="counter--minus" onClick={subtract}>–</button>
                    <div className="counter--count">
                        <h1>{count}</h1>
                    </div>
                    <button className="counter--plus" onClick={add}>+</button>
                </div>
            )
        }
        
    }

    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            
        </main>
    )
}