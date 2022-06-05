import React from 'react'; 
import Button from './Button';
import "./style.css"



const App = () => {
    return(
        <div>
            <h1 style={{textAlign: "center"}}>Hello Harshita !!</h1>
            <Button title="App Store"/>
            <Button title="Play Store"/>


            {/* <button className='button'>App Store</button>
            <button className='button'>Play Store</button> */}

        </div>
    )
       
    
} 
export default App;