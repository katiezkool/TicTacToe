import React, { Component } from 'react';
import './App.css';
import Xpiece from "./Xpiece";
import Opiece from "./Opiece";
import Blankpiece from "./Blankpiece";

class Board extends Component {
    render() {
        return (
            <div>
                <td>
                    <tr>
                        <Xpiece/>
                        <Opiece/>
                        <Blankpiece/>
                    </tr>
                    <tr>
                        <Blankpiece/>
                        <Opiece/>
                        <Xpiece/>
                    </tr>
                    <tr>
                        <Xpiece/>
                        <Xpiece/>
                        <Blankpiece/>
                    </tr>
                </td>
            </div>

        );
    }
}

export default Board;