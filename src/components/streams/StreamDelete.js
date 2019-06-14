import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Modal from '../Modal';
import history from '../../history';
import { deleteStream, fetchStream } from '../../actions';


class StreamDelete extends React.Component {

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }

  onDeleteClicked = () => {
    this.props.deleteStream(this.props.stream.id);
  }

  renderActions = () => (
    <>
      <div className="ui negative button" onClick={this.onDeleteClicked}>Delete</div>
      <Link to="/" className="ui button" >Cancel</Link>
    </>
  )

  renderContent() {
    if(!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }

    return (
      <>
        Are you sure you want to delete stream with title: <strong style={{textTransform: 'capitalize'}}>{this.props.stream.title}</strong>
      </>
    );
  }

  render() {
    return (
        <Modal
          title="Delete Stream"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
        />
    );
  }
}

const mapStateToProps = ({ streams }, ownProps) => {
  return {
    stream: streams[ownProps.match.params.id]
  };
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
