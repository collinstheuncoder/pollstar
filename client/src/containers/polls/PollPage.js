import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

import { loadPoll, voteInPoll } from '../../actions/polls';
import Head from '../../components/shared/Head';
import PollsHeader from '../../components/polls/Header';
import PollMain from '../../components/polls/PollMain';

class PollPage extends Component {
  componentDidMount() {
    const { category, pollId } = this.props.match.params;
    this.props.loadPoll(category, pollId);
  }

  render() {
    const {
      poll,
      user,
      match: { params: { category, pollId } },
      voteInPoll,
    } = this.props;
    const crumbs = [
      { path: '/', name: 'Home', active: false },
      { path: '/polls', name: 'Polls', active: false },
      { path: `/polls/${category}/`, name: poll.category, active: false },
      {
        path: `/polls/${category}/${pollId}`,
        name: poll.title,
        active: true,
      },
    ];

    return (
      <Grid>
        <Head
          title={`Pollstar | ${poll.title}`}
          description="Poll page of Pollstar"
        />
        <PollsHeader crumbs={crumbs} />
        <PollMain poll={poll} user={user} voteInPoll={voteInPoll} />
      </Grid>
    );
  }
}

PollPage.propTypes = {
  poll: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  error: PropTypes.object,
  loadPoll: PropTypes.func.isRequired,
  voteInPoll: PropTypes.func.isRequired,
};

PollPage.defaultProps = {
  poll: {},
  user: {},
  error: null,
};

const mapStateToProps = state => {
  return {
    poll: state.polls.poll,
    user: state.user.user,
    error: state.user.error,
  };
};

export default connect(mapStateToProps, { loadPoll, voteInPoll })(PollPage);
