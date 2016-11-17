import React, {Component, PropTypes} from 'react';
import { fetchPosts } from '_app/actions';
import { connect } from 'react-redux';

const App = class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPosts('obama'));
  }
  render() {
    return (
      <div>
        <div>{this.props.children}</div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(App);
