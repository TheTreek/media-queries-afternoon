import React, {Component} from 'react';
import '../Styles/Main.css';

class Main extends Component{
    render(){
        return(
            <div>
                <div className='main'>
                        <div className='container'>
                        <h3>Welcome To Our Studio!</h3>
                        <h1>IT'S NICE TO MEET YOU</h1>
                        <span className='button'>TELL ME MORE</span>
                    </div>
                </div>
                <div className='white'>
                    <h2>Services</h2>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
        );
    }
}

export default Main;