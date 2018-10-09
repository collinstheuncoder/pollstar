import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Grid, Header } from 'semantic-ui-react';

import PollsBreadcrumb from '../other/Breadcrumb';

function PollsHeader({ crumbs, title }) {
  return (
    <Fragment>
      <Grid.Row>
        <Grid.Column>
          <PollsBreadcrumb crumbs={crumbs} />
        </Grid.Column>
      </Grid.Row>
      {title && (
	      <Grid.Row>
	        <Grid.Column>
	          <Header size="large" textAlign="center">
	            {title}
	          </Header>
	        </Grid.Column>
	      </Grid.Row>
      )}
    </Fragment>
  );
}

PollsHeader.propTypes = {
  crumbs: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

PollsHeader.defaultProps = {
  title: '',
};

export default PollsHeader;
