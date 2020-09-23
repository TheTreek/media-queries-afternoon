import React, {Component} from 'react';

class NavBar extends Component{
    render(){
        return(
            <nav className = {this.props.className}>
                <span className = 'navLinks'>Services</span>
                <span className = 'navLinks'>Portfolio</span>
                <span className = 'navLinks'>About</span>
                <span className = 'navLinks'>Team</span>
                <span className = 'navLinks'>Contact</span>
                <span className = 'hamburger' onClick={this.props.toggleMenu}>&#9776;</span>
            </nav>
        );
    }
}

export default NavBar;