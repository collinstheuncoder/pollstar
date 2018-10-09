import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Image } from 'semantic-ui-react';

const styles = {
	column: {
		marginBottom: '3.5%',
		display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
	},
	image: {
		maxWidth: '10rem',
	},
	name: {
		fontSize: '1.25rem',
		fontWeight: '600',
		textAlign: 'center',
		color: 'inherit',
	}
}

function PollCategories({ categories }) {
	return (
    <Grid.Row columns={5}>
    	{
    		categories.map(category => (
    			<Grid.Column style={styles.column} key={category._id}>
    				<Link to={`/categories/${category.name}`}>
			        <Image
						    src={`/images/${category.imgUrl}`}
						    alt={category.name}
						    style={styles.image}
						    size='medium'
						  />
						  <p style={styles.name}>{category.name}</p>
					  </Link>
		      </Grid.Column>
    		))
    	}
    </Grid.Row>
	);
}

PollCategories.propTypes = {
	categories: PropTypes.array.isRequired,
};

export default PollCategories;
