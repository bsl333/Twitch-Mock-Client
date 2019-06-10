import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '30757130877-115nss5hkn0bp47c0p0dmfrnq87hsfgf.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get())
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    });
  }

  onAuthChange = isSignedIn => {
    // update store after user logs in.
    isSignedIn ? this.props.signIn(this.auth.currentUser.get().getId()) : this.props.signOut();
  };

  onSignInClick = () => this.auth.signIn();

  onSignOutClick = () => this.auth.signOut();


  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <div>
          <button className="ui red google button" onClick={this.onSignOutClick}>
            <i className="google icon" />
            Sign out
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button className="ui blue google button" onClick={this.onSignInClick}>
            <i className="google icon" />
            Sign in with google
          </button>
        </div>
      );
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>
  }
}


const mapStateToProps = ({ auth }) => ({ isSignedIn: auth.isSignedIn });

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
