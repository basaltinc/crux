import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import VisualLanguagePage from '../../templates/visual-language-page';
import { apiUrlBase } from '../../../config';
import ApiDemo from '../../bedrock/components/api-demo';

const BreakpointListItem = styled.li`
  left: ${props => props.left};
  position: absolute;
  border-left: solid 3px hsl(0, 0%, 35%);
  height: 100%;
  > .label {
    display: block;
    background: hsl(0, 0%, 35%);
    padding: 3px;
    color: white;
  }
  &:hover {
    // stylelint-disable max-nesting-depth, selector-max-specificity
    border-left-color: hsla(0, 0%, 35%, 0.3);
    > .label {
      opacity: 0;
    }
    // stylelint-enable max-nesting-depth, selector-max-specificity
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
  padding-top: 20px;
`;

const BreakpointsWrapper = styled.div`
  overflow: hidden;
  position: relative;
  resize: horizontal;
  li {
    list-style-type: none;
  }
`;

const breakpoints = items =>
  items.map(item => (
    <BreakpointListItem key={item.name} left={item.value}>
      <span className={'label'}>
        {item.name}:<br />
        {item.value}
      </span>
    </BreakpointListItem>
  ));

const BreakpointList = ({ items }) => (
  <ul className={'breakpoints'}>{breakpoints(items)}</ul>
);

BreakpointList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const deviceWidths = items =>
  items.map(item => (
    <DeviceListItem key={item.name} width={item.width}>
      <span className={'label'}>
        {item.name}: {item.width}
      </span>
    </DeviceListItem>
  ));

const DeviceWidthList = ({ items }) => (
  <DeviceWidthUl>{deviceWidths(items)}</DeviceWidthUl>
);

DeviceWidthList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      width: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

class BreakpointsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bp: [],
      dw: [],
    };
  }

  componentDidMount() {
    window
      .fetch(`${apiUrlBase}/breakpoints`)
      .then(res => res.json())
      .then(bp => {
        this.setState({ bp });
      });
    window
      .fetch(`${apiUrlBase}/devicewidths`)
      .then(res => res.json())
      .then(dw => {
        this.setState({ dw });
      });
  }

  render() {
    return (
      <VisualLanguagePage className="docs">
        <div className="body">
          <h4 className="eyebrow">Visual Language</h4>
          <h2>Breakpoints</h2>
          <BreakpointsWrapper>
            <BreakpointList items={this.state.bp} />
            <DeviceWidthList items={this.state.dw} />
          </BreakpointsWrapper>
          {/* <pre> */}
          {/* <code>{JSON.stringify(this.state.breakpoints, null, '  ')}</code> */}
          {/* </pre> */}
        </div>
        <ApiDemo
          title={'Breakpoints API'}
          endpoint={`${apiUrlBase}/breakpoints`}
          querySchema=""
          requestType={'GET'}
        />
        <ApiDemo
          title={'Device Widths API'}
          endpoint={`${apiUrlBase}/devicewidths`}
          querySchema=""
          requestType={'GET'}
        />
      </VisualLanguagePage>
    );
  }
}

export default BreakpointsPage;
