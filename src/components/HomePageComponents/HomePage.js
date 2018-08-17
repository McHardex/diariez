import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  appName: state.appName
});
class HomePage extends React.Component {
  
  render() {
    return (
      <div className="homePageBody">
        <main>
          <p>this is the would be home page</p>
        </main>
      </div>
    );
  }
}

export default connect(mapStateToProps, () => ({}))(HomePage);