import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    const tabs = this.props.items.map(item => (
      <div
        key={item.id}
        role="button"
        tabIndex={0}
        onClick={() => this.handleClick(item)}
        style={{
          border: 'solid black 1px',
          borderBottom: 'none',
          padding: '5px',
          margin: '0 5px',
          textDecoration:
            this.state.activeId === item.id ? 'underline' : 'none',
        }}
      >
        {item.title}
      </div>
    ));
    const content = this.props.items.map(item => (
      <div
        key={item.id}
        style={{
          display: this.state.activeId === item.id ? 'block' : 'none',
        }}
      >
        {item.children}
      </div>
    ));
    return (
      <div>
        <div
          style={{
            display: 'flex',
            marginBottom: '-5px',
          }}
        >
          {tabs}
        </div>
        <div>{content}</div>
      </div>
    );
  }
}

TabbedPanel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      children: PropTypes.node.isRequired,
    }),
  ).isRequired,
};

export default TabbedPanel;
