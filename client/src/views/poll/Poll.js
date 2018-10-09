import React from 'react';
import { Grid } from 'semantic-ui-react';

import PollsHeader from '../../components/polls/Header';
import PollMain from '../../components/polls/PollMain';

function Poll() {
	const crumbs = [
	  { path: '/', name: 'Home', active: false },
	  { path: '/polls', name: 'All Polls', active: false },
	  { path: '/polls/category', name: 'Polls by Category', active: false },
	  { path: `/polls/${'poll.category'}/${'poll.title'}`, name: 'Poll', active: true },
	];

	return (
		<Grid>
			<PollsHeader crumbs={crumbs} title="Poll Categories" />
			<PollMain />
		</Grid>
	);
}

export default Poll;
