import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ApiDemo from '@basalt/bedrock-api-demo';
import { apiUrlBase } from '../../../config';

const BreakpointListItem = styled.li`
  left: ${props => props.left};
  position: absolute;
  border-left: solid 3px hsl(0, 0%, 35%, 0.4);
  height: 100%;
  > .label {
    display: block;
    background: hsl(0, 0%, 35%, 0.4);
    padding: 3px;
    color: white;
  }
  &:hover {
    border-left-color: hsla(0, 0%, 35%);
    z-index: 2;
    > .label {
      background: hsl(0, 0%, 35%);
    }
  }
`;

const DeviceListItem = styled.li`
  width: ${props => props.width}px;
  border-bottom: solid 3px hsl(0, 0%, 80%);
  text-align: right;
  margin-bottom: 15px;
  padding-right: 15px;
  border-right: solid 3px hsl(0, 0%, 80%);
`;

const DeviceWidthUl = styled.ul`
  max-width: calc(75vw - 2 * var(--spacing-l));
  padding-top: 20px;
`;

const BreakpointsWrapper = styled.div`
  width: 100%;
  position: relative;
  overflow-y: hidden;
  li {
    list-style-type: none;
  }
`;

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
