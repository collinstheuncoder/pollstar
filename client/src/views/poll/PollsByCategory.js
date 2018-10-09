import React, { Fragment } from 'react';
import { Grid } from 'semantic-ui-react';

import PollsHeader from '../../components/polls/Header';
import PollsCategories from '../../components/polls/Categories';

function PollsByCategory() {
	const crumbs = [
	  { path: '/', name: 'Home', active: false },
	  { path: '/polls', name: 'All Polls', active: false },
	  { path: '/polls/Categories', name: 'Polls by Category', active: true },
	];

	return (
		<Grid>
			<PollsHeader crumbs={crumbs} title="Poll Categories" />
			<PollsCategories />
		</Grid>
	);
}

export default PollsByCategory;
