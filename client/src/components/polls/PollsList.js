import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, List, Loader } from 'semantic-ui-react';

const styles = {
  listItem: {
    padding: '1rem 0',
  },
  button: {
    margin: '0.25rem',
  },
};

function PollsList({ polls }) {
  return (
    <Grid.Row>
      <Grid.Column>
        {polls.length === 0 ? (
          <Loader active inline="centered" />
        ) : (
          <List celled selection>
            {polls.map(poll => (
              <List.Item key={poll._id} style={styles.listItem}>
                <Link to={`polls/c/${poll.category.toLowerCase()}/p/${poll._id}`}>
                  <List.Content>
                    <List.Header size="medium">{poll.title}</List.Header>
                  </List.Content>
                </Link>
              </List.Item>
            ))}
          </List>
        )}
      </Grid.Column>
    </Grid.Row>
  );
}

PollsList.propTypes = {
  polls: PropTypes.array,
};

PollsList.defaultProps = {
  polls: [],
};

export default PollsList;
