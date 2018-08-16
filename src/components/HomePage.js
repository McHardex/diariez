import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  appName: state.appName
});
class HomePage extends React.Component {
  
  render() {
    return (
      <div className="homePageBody">
        <Header appName={this.props.appName}/>
        <main>
        </main>
        <Footer/>
      </div>
    );
  }
}

export default connect(mapStateToProps, () => ({}))(HomePage);