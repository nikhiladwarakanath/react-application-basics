// import the react and reactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';


// function getButtonText(){
//     return 'Click on me';
// }

// create a react component

const App = () => { // const App = () => {}

    const buttonText ={text:'Click Me'};
    const labelText ='Enter Name:';
    return (
        <div>
            <label className="label" htmlFor="name">{labelText}</label>
            <input id="name" type="text" />
            <button style={{backgroundColor:'blue', color:'white'}} >{buttonText.text}</button>
        </div>
    );

};

// take the component and show on the screen

ReactDOM.render(
    <App />, document.querySelector('#root')//document.getElementById('root')
);