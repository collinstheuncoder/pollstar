import React from 'react';
import { Button, Grid, Header, Icon, Image } from 'semantic-ui-react';

//import AccountInfo from "../../containers/user/AccountInfo";

function AccountHeader() {
	return (
	  <Grid.Row>
	    <Grid.Column>
	    	<Grid.Row>
	    		<Grid.Column>
	    			<Image src='https://i.imgur.com/mVRm8tF.png' size='medium' wrapped />
	    		</Grid.Column>
	    		<Grid.Column>
	    			<Header size='large'>John Smith</Header>
	    			<p><Icon name='mail outline' size='mini' /> johnsmith@gmail.com</p>
	    		</Grid.Column>
	    	</Grid.Row>
	    </Grid.Column>
	    <Grid.Column>
	    	<Button color='red'>Edit Info</Button>
	    	<Button color='green'>Delete Account</Button>
	    </Grid.Column>
	  </Grid.Row>
	);
}

export default AccountHeader;
