import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

import { loadPolls } from '../../actions/polls';
import Head from '../../components/shared/Head';
import PollsHeader from '../../components/polls/Header';
import PollsList from '../../components/polls/PollsList';

class PollsPage extends Component {
  componentDidMount() {
    this.props.loadPolls();
  }
 
  render() {
    const { polls } = this.props;
    const crumbs = [
      { path: '/', name: 'Home', active: false },
      { path: '/polls', name: 'Polls', active: true },
    ];

    return (
      <Grid>
        <Head
          title="Pollstar | Polls List"
          description="Polls list page of Pollstar"
        />
        <PollsHeader crumbs={crumbs} title="Polls List" />
        <PollsList polls={polls} />
      </Grid>
    );
  }
}

PollsPage.propTypes = {
  polls: PropTypes.array,
  error: PropTypes.object,
  loadPolls: PropTypes.func,
};

PollsPage.defaultProps = {
  polls: [],
  error: null,
};

const mapStateToProps = state => {
  return {
    polls: state.polls.pollsList,
    error: state.user.error,
  };
};

export default connect(mapStateToProps, { loadPolls })(PollsPage);
