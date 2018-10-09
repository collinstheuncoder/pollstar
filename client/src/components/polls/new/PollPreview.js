import React from 'react';
import PropTypes from 'prop-types';
import { Form, Header, Icon } from 'semantic-ui-react';

const styles = {
  form: {
    width: '15rem',
    margin: 'auto',
    border: '1px solid #e0e1e2',
    padding: '1rem',
  },
  choice: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  icon: {
    cursor: 'pointer',
    fontSize: '1.25rem',
  },
  button: {
    margin: '0.25rem',
  },
};

const PollPreview = ({ title, choices, removeChoice }) => (
  <Form style={styles.form}>
    <Header size="small" textAlign="center">
      {title}
    </Header>
    {choices.map((choice, index) => (
      <div style={styles.choice} key={choice.id}>
        <Form.Radio label={choice.name} value={choice.name} />
        <Icon 
          style={styles.icon} 
          name='remove' 
          color='red' 
          onClick={() => removeChoice(choice.id)} 
        />
      </div>
    ))}
    <Form.Button>Vote</Form.Button>
  </Form>
);

PollPreview.propTypes = {
  title: PropTypes.string.isRequired,
  choices: PropTypes.array.isRequired,
  removeChoice:PropTypes.func.isRequired,
};

PollPreview.defaultProps = {
  title: '',
  choices: [],
};

export default PollPreview;
