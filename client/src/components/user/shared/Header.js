import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Header } from 'semantic-ui-react';

function AuthHeader({ title }) {
  return (
    <Grid.Row>
      <Grid.Column>
        <Header size="large" textAlign="center">
          {title}
        </Header>
      </Grid.Column>
    </Grid.Row>
  );
}

AuthHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AuthHeader;
