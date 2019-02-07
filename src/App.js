import React, {Component} from 'react';
import './App.css';
import Drawer from "./components/ResponsiveDrawer";
import Material from './components/material'
import Tabletop from 'tabletop';

class App extends Component {

    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        Tabletop.init({
            key: '1AGWa_P0pIn7rIouvfKwuzY4almzgaJKX-uWHcPoz8hU',
            callback: googleData => {
                this.setState({
                    data: googleData
                })
            },
            simpleSheet: true
        })
    }


    render() {
        const {data} = this.state
        return (
            <div>
                <Drawer data={data} />
            </div>
        );
    }
}

export default App;
 // <Material {...{data}} />