import React from 'react';
import { Grid } from 'semantic-ui-react';

import Head from '../../components/shared/Head';
import PollsHeader from '../../components/polls/Header';
import PollsList from '../../components/polls/PollsList';

function AllPolls() {
  const crumbs = [
    { path: '/', name: 'Home', active: false },
    { path: '/polls', name: 'All Polls', active: true },
  ];

  return (
    <Grid>
      <Head
        title="Pollstar | Polls List"
        description="Polls list page of Pollstar"
      />
      <PollsHeader crumbs={crumbs} title="Polls List" />
      <PollsList />
    </Grid>
  );
}

export default AllPolls;
