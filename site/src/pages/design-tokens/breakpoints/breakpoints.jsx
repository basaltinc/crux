import React from 'react';
import PropTypes from 'prop-types';
import ApiDemo from '@basalt/bedrock-api-demo';
import { connectToContext, contextPropTypes } from '@basalt/bedrock-core';
import deviceWidths from './device-widths';
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
    };
    this.apiEndpoint = `${
      props.context.settings.urls.apiUrlBase
    }/design-token/breakpoints`;
  }

  componentDidMount() {
    window
      .fetch(this.apiEndpoint)
      .then(res => res.json())
      .then(breakpoints => {
        this.setState({ breakpoints });
      });
  }

  render() {
    return (
      <div className="docs">
        <h4 className="eyebrow">Visual Language</h4>
        <h2>Breakpoints</h2>
        <BreakpointsWrapper>
          <BreakpointList items={this.state.breakpoints} />
          <DeviceWidthList items={deviceWidths} />
        </BreakpointsWrapper>
        <br />

        <ApiDemo
          title="Breakpoints API"
          endpoint={this.apiEndpoint}
          requestType="get"
        />
      </div>
    );
  }
}

BreakpointsPage.propTypes = {
  context: contextPropTypes.isRequired,
};

export default connectToContext(BreakpointsPage);
