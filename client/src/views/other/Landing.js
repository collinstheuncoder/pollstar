import React from 'react';
import { Divider, Grid, Header, Icon } from 'semantic-ui-react';

const styles = {
  row: {
    top: {
      textAlign: 'center',
    },
    bottom: {},
  },
  column: {
    marginTop: '2rem',
  },
  header: {
    one: {
      fontSize: '3rem',
      fontWeight: 200,
    },
    three: {
      fontSize: '1.5rem',
    },
  },
  subheader: {
    fontSize: '1.25rem',
  },
  copy: {
    fontSize: '1rem',
  },
};

function Landing() {
  return (
    <Grid divided>
      <Grid.Row style={styles.row.top}>
        <Grid.Column style={styles.column}>
          <Header as="h1" icon style={styles.header.one}>
            <Icon name="pie chart" />
            Pollstar <span style={styles.copy}>&copy;</span>
            <Header.Subheader style={styles.subheader}>
              Vote in your favorite polls and add new polls
            </Header.Subheader>
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Divider />
      <Grid.Row columns={3}>
        <Grid.Column>
          <Header as="h3" style={styles.header.three}>
            Column 1
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Header as="h3" style={styles.header.three}>
            Column 2
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Header as="h3" style={styles.header.three}>
            Column 3
          </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Landing;
