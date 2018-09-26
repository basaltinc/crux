import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connectToContext, contextPropTypes } from '@basalt/bedrock-core';
import urlJoin from 'url-join';
import SmartGrid from '@basalt/bedrock-smart-grid';
import {
  StyledPatternGridItem,
  PatternGridItemDescription,
  PatternGridItemThumb,
  PatternGridItemTitle,
} from './pattern-grid.styles';

class PatternGridItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: urlJoin(
        props.context.settings.patternIconBasePath,
        `${props.pattern.id}.svg`,
      ),
    };
    this.handleMissingImg = this.handleMissingImg.bind(this);
  }

  handleMissingImg() {
    console.info(
      `Could not find image for ${this.props.pattern.id} at "${
        this.state.imgSrc
      }", using default image instead.`,
    );
    this.setState({
      imgSrc: urlJoin(
        this.props.context.settings.patternIconBasePath,
        'default.svg',
      ),
    });
  }

  render() {
    return (
      <StyledPatternGridItem key={this.props.pattern.id}>
        <Link
          to={
            this.props.pattern.path
              ? this.props.pattern.path
              : `/patterns/components/${this.props.pattern.id}`
          }
        >
          <PatternGridItemThumb
            src={this.state.imgSrc}
            alt=""
            onError={this.handleMissingImg}
          />
          <PatternGridItemTitle>
            {this.props.pattern.title}
          </PatternGridItemTitle>
          <PatternGridItemDescription>
            {this.props.pattern.description}
          </PatternGridItemDescription>
        </Link>
      </StyledPatternGridItem>
    );
  }
}

function PatternGrid(props) {
  return (
    <SmartGrid
      className="pattern-grid-wrapper"
      row-items-xsmall={2}
      row-items-large={3}
      row-items-xlarge={5}
    >
      {props.patterns.map(pattern => (
        <PatternGridItem
          key={pattern.id}
          pattern={pattern}
          context={props.context}
        />
      ))}
    </SmartGrid>
  );
}

PatternGrid.propTypes = {
  patterns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      path: PropTypes.string,
    }),
  ).isRequired,
  context: contextPropTypes.isRequired,
};

PatternGridItem.propTypes = {
  pattern: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    path: PropTypes.string,
  }).isRequired,
  context: contextPropTypes.isRequired,
};

export default connectToContext(PatternGrid);
