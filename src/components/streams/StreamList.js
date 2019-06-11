import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdminButtons(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <button className="ui button primary">Edit</button>
          <button className="ui button negative">Delete</button>
        </div>
      )
    }

    return null;
  }

  renderCreate() {
    return this.props.isSignedIn && (
      <div style={{ textAlign: 'right' }}>
        <Link to="/streams/new">
          <button className="ui button positive">Create Stream</button>
        </Link>
      </div>
    );
  }

  renderStreamList = () => {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdminButtons(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div >
        </div>
      )
    });
  }


  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderStreamList()}</div>
        {this.renderCreate()}
      </div>
    );
  }

}

const mapStateToProps = ({ streams, auth }) => {
  return {
    streams: Object.values(streams),
    currentUserId: auth.userId,
    isSignedIn: auth.isSignedIn
  }
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);