import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import ModalWrapper from "./components/ModalWrapper/ModalWrapper";

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <Header/>
                <Main/>
                <ModalWrapper/>
            </div>
        );
    }
}

export default App;
