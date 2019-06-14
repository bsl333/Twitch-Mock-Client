import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    const { id } = this.props.match.params;
    // console.log(_.pick(formValues, 'title', 'description'));
    console.log(formValues);

    this.props.editStream(id, formValues);
  }

  getInitialValues = () => {
    if (this.props.stream) {
      const { title, description } = this.props.stream;
      return { title, description };
    }
    return null;
  }

  render() {
    console.log('called')

    return (
      <div>
        <h3>Edit Your Stream</h3>
        <StreamForm initialValues={this.props.stream} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = ({ streams }, ownProps) => {
  return { stream: streams[ownProps.match.params.id] }
}
export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);