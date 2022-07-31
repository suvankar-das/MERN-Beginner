import React, { Component } from 'react'
import { Products } from './Post/index'
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme/theme';
import { GlobalStyles } from './theme/global';


class App extends Component {

    constructor (props) {
        super(props)

        this.state = {
            theme: 'light'
        }
    }

    // The function that toggles between themes
    toggleTheme = () => {
        localStorage.setItem('current-theme', this.state.theme === 'light' ? 'dark' : 'light')
        // if the theme is not light, then set it to dark
        if (this.state.theme === 'light') {
            this.setState({ theme: 'dark' })
            // otherwise, it should be light
        } else {
            this.setState({ theme: 'light' })
        }

    }

    render() {
        let theme = 'light';

        if (localStorage.getItem("current-theme") !== null) {
            theme = localStorage.getItem("current-theme")
        } else {
            theme = this.state.theme;
        }
        return (
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <>
                    <GlobalStyles />
                    {theme === 'light' ?
                        <FaMoon className='top-right cursor-pointer' onClick={this.toggleTheme}></FaMoon>
                        :
                        <FaSun className='top-right cursor-pointer' onClick={this.toggleTheme}></FaSun>
                    }
                    <Products></Products>
                </>
            </ThemeProvider>
        )
    }
}

export default App
