import React from 'react';
import { string } from 'prop-types';
import { Helmet } from 'react-helmet';

function Head({ title, description }) {
	return (
		<Helmet>
			<meta name="description" content={description} />
      <meta name="theme-color" content="#008f68" />
			<title>{title}</title>
		</Helmet>
	);
}

Head.propTypes = {
	title: string.isRequired,
	description: string.isRequired,
}

export default Head;
