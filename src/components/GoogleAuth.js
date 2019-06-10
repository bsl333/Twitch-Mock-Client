import React from 'react';

export default class GoogleAuth extends React.Component {
  state = { isSignedIn: null }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '30757130877-115nss5hkn0bp47c0p0dmfrnq87hsfgf.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  }

  onSignInClick = () => this.auth.signIn()

  onSignOutClick = () => this.auth.signOut()

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
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

