import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'semantic-ui-react';

const styles = {
  active: {
    color: 'rgba(0, 0, 0, .87)',
  },
};

function Crumb({ path, name, active }) {
  return (
    <Fragment>
      <Breadcrumb.Section
        link={active}
        active={active}
        style={styles.active}
      >
        {!active ? <Link to={path}>{name}</Link> : name}
      </Breadcrumb.Section>
      {!active && <Breadcrumb.Divider icon="right angle" />}
    </Fragment>
  );
}

function PollsBreadcrumb({ crumbs }) {
  return (
    <Breadcrumb>
      {crumbs.map((crumb, index) => (
        <Crumb
          key={index}
          path={crumb.path}
          name={crumb.name}
          active={crumb.active}
        />
      ))}
    </Breadcrumb>
  );
}

PollsBreadcrumb.propTypes = {
	crumbs: PropTypes.array.isRequired,
}

export default PollsBreadcrumb;
