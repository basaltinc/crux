import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getTypeColor } from '../../theme';

const ShadowWrap = styled.div`
  position: relative;
  &:after {
    z-index: -1;
    position: absolute;
    content: '';
    bottom: 15px;
    right: 10px;
    width: 50%;
    top: 80%;
    max-width: 300px;
    background: ${props => props.colorTheme};
    box-shadow: 0 15px 10px ${props => props.colorTheme};
    transform: rotate(3deg);
  }
`;

const HeaderRegion = styled.div`
  border: 1px solid ${props => props.colorTheme};
  border-right: 5px solid ${props => props.colorTheme};
  border-top-right-radius: 7px;
  border-top-left-radius: 7px;
  display: flex;
  padding: 30px;
  line-height: 1;
  position: relative;
  code {
    color: ${props => props.colorTheme};
    background: ${props => props.colorThemeAccent};
  }
`;

const CopyThis = styled.div`
  fill: ${props => props.colorTheme};
  position: absolute;
  cursor: pointer;
  right: 20px;
  transition: fill 0.3s ease-in-out;
  &:hover {
    fill: #000;
  }
`;

const DemoStage = styled.div`
  background: #fff;
  border-width: 9px 5px 1px 1px;
  border-style: solid;
  border-color: ${props => props.colorTheme};
  border-bottom-right-radius: 7px;
  border-bottom-left-radius: 7px;
  padding: 30px;
`;

const FooterRegion = styled.div`
  border-top: 1px solid ${props => props.colorTheme};
  padding-top: 1.5rem;
  margin-bottom: -0.5rem;
  h5 {
    color: ${props => props.colorTheme};
    margin-bottom: 0.5rem;
  }
`;

class TabbedPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: props.items[0].id,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(item) {
    this.setState({
      activeId: item.id,
    });
  }

  render() {
    const colorTheme = `var(${getTypeColor(this.props.color)})`;
    const colorThemeAccent = `var(${getTypeColor(this.props.color, 'accent')})`;
    const tabs = this.props.items.map(item => {
      const isPropVariation = !!item.children.props.prop;
      return (
        <div
          key={item.id}
          role="button"
          tabIndex={0}
          onClick={() => this.handleClick(item)}
          style={{
            background: '#FFF',
            outline: 'none',
            padding: '0',
            margin: '0',
            borderBottom:
              this.state.activeId === item.id
                ? `5px solid ${colorTheme}`
                : '5px solid transparent',
            color: this.state.activeId === item.id ? colorTheme : 'black',
            cursor: 'pointer',
            userSelect: 'none',
          }}
        >
          {isPropVariation ? item.children.props.prop.title : item.title}
        </div>
      );
    });

    const content = this.props.items.map(item => (
      <div
        key={item.id}
        style={{
          display: this.state.activeId === item.id ? 'block' : 'none',
        }}
      >
        {item.header && (
          <HeaderRegion
            colorTheme={colorTheme}
            colorThemeAccent={colorThemeAccent}
          >
            {item.header}
            <CopyThis colorTheme={colorTheme}>
              <svg
                width="26"
                height="26"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1696 384q40 0 68 28t28 68v1216q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-288h-544q-40 0-68-28t-28-68v-672q0-40 20-88t48-76l408-408q28-28 76-48t88-20h416q40 0 68 28t28 68v328q68-40 128-40h416zm-544 213l-299 299h299v-299zm-640-384l-299 299h299v-299zm196 647l316-316v-416h-384v416q0 40-28 68t-68 28h-416v640h512v-256q0-40 20-88t48-76zm956 804v-1152h-384v416q0 40-28 68t-68 28h-416v640h896z" />
              </svg>
            </CopyThis>
          </HeaderRegion>
        )}
        {item.children && (
          <DemoStage colorTheme={colorTheme}>
            {item.children}
            {item.notes && (
              <FooterRegion colorTheme={colorTheme}>
                <h5>Notes</h5>
                {item.notes}
              </FooterRegion>
            )}
          </DemoStage>
        )}
      </div>
    ));
    return (
      <div {...this.props} {...this.state}>
        <div
          style={{
            margin: '0 0 -3px',
            display: 'flex',
            justifyContent: 'space-evenly',
          }}
        >
          {tabs}
        </div>
        <ShadowWrap colorTheme={colorTheme}>{content}</ShadowWrap>
      </div>
    );
  }
}

TabbedPanel.defaultProps = {
  color: 'none',
  type: 'none',
};

TabbedPanel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      header: PropTypes.node,
      children: PropTypes.node.isRequired,
      footer: PropTypes.node,
    }),
  ).isRequired,
  color: PropTypes.string,
};

export default TabbedPanel;
