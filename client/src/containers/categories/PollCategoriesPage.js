import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Loader } from 'semantic-ui-react';

import { allPollCategories } from '../../actions/categories';

import Head from '../../components/shared/Head';
import PollsHeader from '../../components/polls/Header';
import PollCategories from '../../components/polls/PollCategories';

const crumbs = [
  { path: '/', name: 'Home', active: false },
  { path: '/polls', name: 'All Polls', active: false },
  { path: '/polls/Categories', name: 'Polls by Category', active: true },
];

class PollCategoriesPage extends Component {
	componentDidMount() {
    this.props.allPollCategories();
  }

  render() {
    const { categoriesList } = this.props;

    return (
      <Grid>
        <Head
          title="Pollstar | Poll Categories"
          description="Poll categories page of Pollstar"
        />
        <PollsHeader crumbs={crumbs} title="Categories" />
        {categoriesList.length === 0 ? (
          <Loader />
        ) : (
        	<Fragment>
        		<Grid.Row>
        			<Grid.Column>
          			<PollCategories categories={categoriesList} />
          		</Grid.Column>
          		<Grid.Column>
          			<Route path="/categories/:categoryName" component={() => (
					    		<div>
					    			{this.props.match.params.categoryName}
					    			Category Info
					    		</div>
					    	)} />
	          		</Grid.Column>
          	</Grid.Row>
          </Fragment>
        )}
      </Grid>
    );
  }
}

PollCategoriesPage.defaultProps = {
  categoriesList: [],
  error: null,
};

const mapStateToProps = ({ categories }) => {
  return {
    categoriesList: categories.categoriesList,
    error: categories.error,
  };
};

export default connect(
  mapStateToProps,
  { allPollCategories }
)(PollCategoriesPage);
