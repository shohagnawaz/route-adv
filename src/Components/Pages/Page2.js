import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

class Page2 extends Component {

    constructor() {
        super();
        this.state = {
            passData: "Bangladesh"
        }
    }

    render() {

        let para = "/Page3/" + this.state.passData;

        return (
            <div>
                <h1>Page 2</h1>
                <button><Link to = {para}>Pass My Name</Link></button>
            </div>
        );
    }
}

export default Page2;