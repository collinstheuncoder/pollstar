import React from 'react';
import { Grid } from 'semantic-ui-react';

import PollsHeader from '../../components/polls/Header';
import PollCategories from '../../components/polls/PollCategories';

function PollsByCategory() {
	const crumbs = [
	  { path: '/', name: 'Home', active: false },
	  { path: '/polls', name: 'All Polls', active: false },
	  { path: '/polls/Categories', name: 'Polls by Category', active: true },
	];

	const categories = [
		{ name: 'Sport', path: 'sport' },
		{ name: 'Science', path: 'science' },
		{ name: 'Education', path: 'education' },
		{ name: 'Politics', path: 'politics' },
		{ name: 'Travel & Tourism', path: 'travel-tourism' },
		{ name: 'Animals', path: 'animals' },
		{ name: 'Technology', path: 'technology' },
		{ name: 'Cars', path: 'cars' },
		{ name: 'To Be Added', path: 'to-be-added' },
		{ name: 'To Be Added', path: 'to-be-added' },
		{ name: 'To Be Added', path: 'to-be-added' },
		{ name: 'To Be Added', path: 'to-be-added' },
		{ name: 'To Be Added', path: 'to-be-added' },
		{ name: 'To Be Added', path: 'to-be-added' },
		{ name: 'Miscellaneous', path: 'miscellaneous' },
	]

	return (
		<Grid>
			<PollsHeader crumbs={crumbs} title="Categories" />
			<PollCategories categories={categories} />
		</Grid>
	);
}

export default PollsByCategory;
