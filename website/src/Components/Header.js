import React, {Component} from 'react';
import NavBar from './NavBar';
import '../Styles/Header.css';

class Header extends Component{
    
    constructor(){
        super();
        this.state = {
            mobileMenu: false
        }
    }
    toggleMenu = ()=>{
        this.setState({mobileMenu: !this.state.mobileMenu});
    }

    render(){
        let mobileMenu = 'mobile-nav ';
        if(!this.state.mobileMenu)
            mobileMenu += 'hidden';

        return(
            <header>
                <div className='header'>
                    <span className='header-title'>Start Bootstrap</span>
                    <NavBar 
                        className='navigation' 
                        toggleMenu = {this.toggleMenu}
                    />
                </div>
                <NavBar 
                    className={mobileMenu}
                />
            </header>
        );
    }
}

export default Header;