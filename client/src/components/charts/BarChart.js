import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

class PollBarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.dataset,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.dataset !== this.props.dataset) {
      this.setState({ data: nextProps.dataset });
    }
  }

  render() {
    const { data } = this.state;

    return (
      <ResponsiveContainer>
        <BarChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Bar dataKey="votes" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

PollBarChart.propTypes = {
  dataset: PropTypes.array,
};

PollBarChart.defaultProps = {
  dataset: [],
};

export default PollBarChart;
