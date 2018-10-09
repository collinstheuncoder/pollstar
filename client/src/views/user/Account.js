import React from 'react';
import { Grid } from 'semantic-ui-react';

import AccountHeader from '../../components/user/AccountHeader';
import AccountMain from '../../components/user/AccountMain';

function Account() {
	return (
		<Grid>
			<AccountHeader />
			<AccountMain />
		</Grid>
	);
}

export default Account;
