import React from "react"; // Compiles/Converts JSX to HTML
import ReactDOM from "react-dom"; // Render JSX to the HTML Page

// JSX?
// Extension of JS
let jsxElement = <h1>Welcome to React</h1>; // Element
let root = document.querySelector("#root"); // Page 

// This render function will take 2 arguments: 
    // 1. Element
    // 2. The HTML Page you want to put that element on

// A React Component
    // Reusable piece of logic that encapsulates a bunch of JSX code

// React Props
    // A javascript object
    // Where do I include props?
        // Parameter of your component
    
    // Where is it getting its data from?
        // From the component that is rendering
            // How though?
                // (Custom) Attribute and Values

    let pokemons = [
        {
            name: "Bulbasaur",
            type: "Grass",
            number: 1,
            description: "It can go for days without eating a single morsel. In the bulb on its back, it stores energy."
        },
        {
            name: "Charmander",
            type: "Fire",
            number: 4,
            description: "The flame at the tip of its tail makes a sound as it burns. You can only hear it in quiet places."
        },
        {
            name: "Squirtle",
            type: "Water",
            number: 7,
            description: "Shoots water at prey while in the water. Withdraws into its shell when in danger."
        }
    ]


function Pokemon(props) {
    console.log("This is the props object: " , {props})
    return (
        <div>
            <h1>Pokemon Name: {props.pokemon.name}</h1>
            <h3>Pokemon Type: {props.pokemon.type}</h3>
            <p><strong>Description</strong> {props.pokemon.description}</p>
        </div>
    )
} 





ReactDOM.render(
    // Mapping is a JS thing
    // When we evaluate (get a value) from a JS thing in a React File (written in JSX) we must excapsulate the JS in curly brackets
    
        // 1 argument attached to .map()
            // 1. Individual item in the sequence of items
            // 2. Call back function that specifies what you want to do with that item
    pokemons.map((pokemon, idx) => <Pokemon key={idx} pokemon={pokemon}/>)
    , root);





