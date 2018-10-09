import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Loader } from 'semantic-ui-react';

import { addNewPoll } from '../../actions/polls';
import { allPollCategories } from '../../actions/categories';

import Head from '../../components/shared/Head';
import NewPoll from '../../components/polls/NewPoll';

class NewPollPage extends Component {
  componentDidMount() {
    this.props.allPollCategories();
  }

  render() {
    const { addNewPoll, user, categoriesList, history } = this.props;

    return (
      <Grid style={{ marginTop: '2rem' }}>
        <Head
          title="Pollstar | Add New Poll"
          description="New poll page of Pollstar"
        />
        {categoriesList.length === 0 ? (
          <Loader />
        ) : (
          <NewPoll
            addNewPoll={addNewPoll}
            user={user}
            history={history}
            categories={categoriesList}
          />
        )}
      </Grid>
    );
  }
}

NewPollPage.propTypes = {
  addNewPoll: PropTypes.func.isRequired,
  allPollCategories: PropTypes.func.isRequired,
  error: PropTypes.object,
};

NewPollPage.defaultProps = {
  error: {},
  categoriesList: [],
};

const mapStateToProps = ({ user, polls, categories }) => {
  return {
    user: user.user,
    categoriesList: categories.categoriesList,
    error: {
      polls: polls.error,
      categories: categories.error,
    },
  };
};

export default connect(
  mapStateToProps,
  { addNewPoll, allPollCategories }
)(NewPollPage);
