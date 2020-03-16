import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

class App extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         lat: null, errMsg: ''
    //     };

    // }

    state = { lat: null, errMsg: '' };
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errMsg: err.message })

        );
    }

    componentDidUpdate() {
        console.log("Component updated");
    }

    contentForRender() {
        if (this.state.errMsg && !this.state.lat) {
            return (
                <div>
                    Error: {this.state.errMsg}
                </div>
            );
        }
        if (this.state.lat && !this.state.errMsg) {
            return <SeasonDisplay lats={this.state.lat} />
        }

        return <Loader message="Please allow location access" />;
    }

    render() {
        return <div className="border-red">
            {this.contentForRender()}
        </div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));