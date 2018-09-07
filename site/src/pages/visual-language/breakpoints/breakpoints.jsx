import React from 'react';
import PropTypes from 'prop-types';
import ApiDemo from '@basalt/bedrock-api-demo';
import { apiUrlBase } from '../../../../config';
import {
  BreakpointListItem,
  BreakpointsWrapper,
  DeviceListItem,
  DeviceWidthUl,
} from './breakpoints.styles';

const BreakpointsItems = items =>
  items.map(item => (
    <BreakpointListItem key={item.name} left={item.value}>
      <span className="label">
        {item.name}:<br />
        {item.value}
      </span>
    </BreakpointListItem>
  ));

const BreakpointList = ({ items }) => (
  <ul className="breakpoints">{BreakpointsItems(items)}</ul>
);

BreakpointList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const DeviceWidthsItems = items =>
  items.map(item => (
    <DeviceListItem key={item.name} width={item.width}>
      <span className="label">
        {item.name}: {item.width}
      </span>
    </DeviceListItem>
  ));

const DeviceWidthList = ({ items }) => (
  <DeviceWidthUl>{DeviceWidthsItems(items)}</DeviceWidthUl>
);

DeviceWidthList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

class BreakpointsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakpoints: [],
      deviceWidths: [],
    };
  }

  componentDidMount() {
    window
      .fetch(`${apiUrlBase}/breakpoints`)
      .then(res => res.json())
      .then(breakpoints => {
        this.setState({ breakpoints });
      });
    window
      .fetch(`${apiUrlBase}/devicewidths`)
      .then(res => res.json())
      .then(deviceWidths => {
        this.setState({ deviceWidths });
      });
  }

  render() {
    return (
      <div className="docs">
        <h4 className="eyebrow">Visual Language</h4>
        <h2>Breakpoints</h2>
        <BreakpointsWrapper>
          <BreakpointList items={this.state.breakpoints} />
          <DeviceWidthList items={this.state.deviceWidths} />
        </BreakpointsWrapper>
        <br />

        <ApiDemo
          title="Breakpoints API"
          endpoint={`${apiUrlBase}/breakpoints`}
          requestType="get"
        />
        <br />
        <ApiDemo
          title="Device Widths API"
          endpoint={`${apiUrlBase}/devicewidths`}
          requestType="get"
        />
      </div>
    );
  }
}

export default BreakpointsPage;
