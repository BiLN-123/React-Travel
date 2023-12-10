import React, { Component } from 'react';
import './header.scss';
import { Menuitem } from './Menuitem';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class Header extends Component {
    state = {clicked:false};
    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }
    render() {
        return (
            <nav className='nav-root'>
                <h1 className='nav-logo'><a className='nav-logo-link' href='/'>BiLN2B</a></h1>
                <div className="nav-menu-mobile" onClick={this.handleClick}>
                    {this.state.clicked ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={this.state.clicked ? "#nav-menu active" : "#nav-menu"} id='nav-menu'>
                    {Menuitem.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    <i className='nav-i'>{item.icon}</i>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                    <button>Sign Up</button>

                </ul>
            </nav>
        );
    }
}

export default Header;