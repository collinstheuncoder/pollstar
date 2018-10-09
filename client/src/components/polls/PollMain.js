import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  Checkbox,
  Divider,
  Form,
  Grid,
  Header,
  Loader,
  Segment,
} from 'semantic-ui-react';

import PollBarChart from '../charts/BarChart';
import PollPieChart from '../charts/PieChart';

const styles = {
  form: {
    margin: '2rem auto',
    padding: '1.5rem',
    maxWidth: '40rem',
    border: '1px solid #e0e1e2',
  },
  title: {
    padding: '1rem 0',
  },
  listItem: {
    padding: '1rem 0',
  },
  button: {
    margin: '0.25rem',
    display: 'flex',
    justifyContent: 'center',
  },
  segment: {
    border: 'none',
    boxShadow: 'none',
  },
  toggle: {
    margin: '1rem auto',
  },
};

const halfChoiceList = choices => {
  const divider = Math.round(choices.length / 2);

  const firstColumn = choices.slice(0, divider);
  const lastColumn = choices.slice(divider);

  return {
    firstColumn,
    lastColumn,
  };
};

function Choice({ value, choice, onChange }) {
  return (
    <Form.Radio
      label={choice.name}
      value={choice.name}
      checked={value === choice.name}
      onChange={onChange}
      id={choice._id}
    />
  );
}

class PollMain extends Component {
  state = {
    votedItem: {
      name: '',
      choiceId: '',
    },
    viewPieChart: false,
  };

  onChange = (e, { value }) => {
    const { votedItem } = this.state;
    this.setState({
      value,
      votedItem: { ...votedItem, name: value, choiceId: e.target.id },
    });
  };

  onDisplayPiechart = () =>
    this.setState(prevState => ({
      viewPieChart: !prevState.viewPieChart,
    }));

  onVote = e => {
    e.preventDefault();

    const {
      voteInPoll,
      match: {
        params: { category, pollId },
      },
      user: { _id },
    } = this.props;
    const { votedItem } = this.state;

    if (votedItem) {
      voteInPoll(category, pollId, votedItem, _id);

      this.setState({
        votedItem: { ...votedItem, name: '', choiceId: '' },
      });
    }
  };

  render() {
    const { poll } = this.props;
    const { value, viewPieChart } = this.state;

    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            {!poll ? (
              <Loader active inline="centered" />
            ) : (
              <Form onSubmit={this.onVote} style={styles.form}>
                <Header size="medium" textAlign="center" style={styles.title}>
                  {poll.title}
                </Header>
                {!poll.choices ? (
                  <Loader active inline="centered" />
                ) : (
                  <Grid divided="vertically">
                    <Grid.Row columns={2}>
                      <Grid.Column>
                        {halfChoiceList(poll.choices).firstColumn.map(
                          choice => (
                            <Choice
                              key={choice._id}
                              value={value}
                              choice={choice}
                              onChange={this.onChange}
                            />
                          )
                        )}
                      </Grid.Column>
                      <Grid.Column>
                        {halfChoiceList(poll.choices).lastColumn.map(choice => (
                          <Choice
                            key={choice._id}
                            value={value}
                            choice={choice}
                            onChange={this.onChange}
                          />
                        ))}
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                )}
                <Form.Button style={styles.button} type="submit">
                  Vote
                </Form.Button>
              </Form>
            )}
          </Grid.Column>
        </Grid.Row>
        <Segment style={styles.segment}>
          <Divider horizontal>Viz</Divider>
        </Segment>
        <Checkbox
          style={styles.toggle}
          toggle
          label="Show Pie Chart"
          checked={viewPieChart}
          onChange={this.onDisplayPiechart}
        />
        <Grid.Row columns={1}>
          <Grid.Column>
            {viewPieChart ? (
              <PollPieChart dataset={poll.choices} />
            ) : (
              <PollBarChart dataset={poll.choices} />
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

PollMain.propTypes = {
  poll: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  voteInPoll: PropTypes.func.isRequired,
};

PollMain.defaultProps = {
  poll: {},
  user: {},
};

export default withRouter(PollMain);
