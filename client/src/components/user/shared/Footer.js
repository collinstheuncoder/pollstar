import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

const styles = {
  centered: {
    textAlign: 'center',
    padding: '2rem 0',
  },
};

function AuthFooter({ message, path, action }) {
  return (
    <Grid.Row>
      <Grid.Column>
        <p style={styles.centered}>
          {message.pre}?{' '}
          <span>
            <Link to={path}>{action}</Link> {message.post}
          </span>
        </p>
      </Grid.Column>
    </Grid.Row>
  );
}

AuthFooter.propTypes = {
  message: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
};

export default AuthFooter;
