import React from 'react';
import './App.css';
import Footer from './components/Footer';
import { connect } from 'react-redux';
import Header from './components/Header';


const mapStateToProps = state => ({
  appName: state.appName
})
class App extends React.Component {
  
  render() {
    return (
      <div className="App">
      <Header appName={this.props.appName}/>
        <main>
        {this.props.children}
        </main>
        <Footer/>
      </div>
    );
  }
}

// App.contextTypes = {
//   router: React.PropTypes.object.isRequired
// };

export default connect(mapStateToProps, () => ({}) )(App);
