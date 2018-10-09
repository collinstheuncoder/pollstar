import React, { Component, Fragment } from 'react';
import { array, func, object } from 'prop-types';
import { Button, Form, Grid, Header, Icon } from 'semantic-ui-react';

import PollPreview from './new/PollPreview';

const styles = {
  form: {
    width: '25rem',
    margin: 'auto',
  },
  choice: {
    display: 'flex',
  },
  icon: {
    margin: 0,
  },
  button: {
    margin: '0.25rem',
  },
};

class NewPoll extends Component {
  state = {
    title: '',
    category: '',
    categories: this.props.categories,
    choice: '',
    choices: [],
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  onSelect = e =>
    this.setState({
      category: e.target.value,
    });

  onAddChoice = e => {
    e.preventDefault();

    const { choice } = this.state;

    if (choice) {
      const newChoice = { 
        name: choice, 
        id: 100000 + Math.floor(Math.random() * 100000),
      };

      this.setState(prevState => ({
        choices: [...prevState.choices, newChoice],
        choice: '',
      }));
    }
  };

  onRemoveChoice = id => {
    if (id) {
      this.setState(prevState => ({
        choices: prevState.choices.filter(
          choice => choice.id !== id
        ),
      }));
    }   
  };

  onPollSubmit = e => {
    e.preventDefault();

    const { title, category, choices } = this.state;
    const { addNewPoll, user: { _id }, history } = this.props;
    const newPoll = {};

    if (title !== '' && category !== '' && choices.length > 0) {
      newPoll.title = title;
      newPoll.category = category;
      newPoll.choices = choices.map(choice => choice.name);
      newPoll.addedBy = _id;

      addNewPoll(newPoll, history);

      this.setState({
        title: '',
        category: '',
        choices: [],
      });
    }
  };

  render() {
    const { title, category, categories, choices, choice } = this.state;
    // const defCategories = [
    //   'Sport',
    //   'Travel & Tourism',
    //   'Education',
    //   'Technology',
    //   'Automotive'
    // ];

    // Render input field if poll category not listed under categories
    const isCategoryListed = pollCategory => categories.includes(pollCategory);

    // Show preview and edit poll before saving
    const shouldShowPreview = () => {
      if (title && choices.length > 0) return true;
      else return false;
    };

    return (
      <Fragment>
        <Grid.Row>
          <Grid.Column>
            <Header size="large" textAlign="center">
              Create New Poll
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={shouldShowPreview() ? 2 : 1}>
          <Grid.Column>
            <Form style={styles.form} onSubmit={this.onPollSubmit}>
              <Form.Field>
                <label>Poll title</label>
                <input
                  name="title"
                  value={title}
                  placeholder="Enter poll title"
                  onChange={this.onChange}
                />
              </Form.Field>

              <Form.Field
                placeholder="Category"
                label="Poll Category"
                control="select"
                value={category}
                onChange={this.onSelect}
              >
                <option disabled>Category</option>
                {categories.map(pollCategory => (
                  <option value={pollCategory.name} key={pollCategory._id}>
                    {pollCategory.name}
                  </option>
                ))}
                <option value="Other">Other</option>
              </Form.Field>

              {(!isCategoryListed(category)) && (
                <Form.Field>
                  <label>If "Other"</label>
                  <input
                    name="category"
                    value={category}
                    placeholder="Enter category"
                    onChange={this.onChange}
                  />
                </Form.Field>
              )}
              <Form.Field>
                <label>Poll Choices</label>
                <div style={styles.choice}>
                  <input
                    name="choice"
                    value={choice}
                    placeholder="Enter poll choice"
                    onChange={this.onChange}
                  />
                  <Button className="add-choice" onClick={this.onAddChoice}>
                    <Icon style={styles.icon} name='add' size='large' />
                  </Button>
                </div>
              </Form.Field>
              <Form.Field control={Button} type="submit">
                Submit Poll
              </Form.Field>
            </Form>
          </Grid.Column>
          {
            shouldShowPreview() && (
              <Grid.Column>
                <Header size="medium" textAlign="center">
                  Poll Preview
                </Header>
                <PollPreview
                  title={title}
                  choices={choices}
                  removeChoice={this.onRemoveChoice}
                />
              </Grid.Column>
            )
          }
        </Grid.Row>
      </Fragment>
    );
  }
}

NewPoll.propTypes = {
  categories: array.isRequired,
  addNewPoll: func.isRequired,
  history: object.isRequired,
};

export default NewPoll;
