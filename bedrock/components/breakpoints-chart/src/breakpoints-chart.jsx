import React from 'react';
import PropTypes from 'prop-types';
import deviceWidths from './device-widths';
import {
  BreakpointListItem,
  BreakpointsWrapper,
  DeviceListItem,
  DeviceWidthUl,
} from './breakpoints-chart.styles';

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

const BreakpointsChart = ({ breakpoints }) => (
  <BreakpointsWrapper>
    <BreakpointList items={breakpoints} />
    <DeviceWidthList items={deviceWidths} />
  </BreakpointsWrapper>
);

BreakpointsChart.propTypes = {
  breakpoints: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default BreakpointsChart;
