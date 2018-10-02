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
import {
  StyledPatternGridListItem,
  PatternGridListItemDescription,
  PatternGridListItemTitle,
  PatternGridList,
} from './pattern-list.styles';

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
    this.defaultImgPath = urlJoin(
      this.props.context.settings.patternIconBasePath,
      'default.svg',
    );
  }

  handleMissingImg() {
    console.info(
      `Could not find image for ${this.props.pattern.id} at "${
        this.state.imgSrc
      }", using default image instead.`,
    );
    this.setState({
      imgSrc: this.defaultImgPath,
    });
  }

  render() {
    const { id, path, meta } = this.props.pattern;
    const { hasIcon, title, description } = meta;
    return (
      <StyledPatternGridItem key={id}>
        <Link to={path || `/patterns/${id}`}>
          <PatternGridItemThumb
            src={hasIcon !== false ? this.state.imgSrc : this.defaultImgPath}
            onError={this.handleMissingImg}
          />
          <PatternGridItemTitle>{title}</PatternGridItemTitle>
          <PatternGridItemDescription>{description}</PatternGridItemDescription>
        </Link>
      </StyledPatternGridItem>
    );
  }
}

function PatternGridListItem(props) {
  return (
    <StyledPatternGridListItem key={props.pattern.id}>
      <Link
        to={
          props.pattern.path
            ? props.pattern.path
            : `/patterns/${props.pattern.id}`
        }
      >
        <PatternGridListItemTitle>
          {props.pattern.meta.title}
        </PatternGridListItemTitle>
        <PatternGridListItemDescription>
          {props.pattern.meta.description}
        </PatternGridListItemDescription>
      </Link>
    </StyledPatternGridListItem>
  );
}

function PatternGrid(props) {
  const { enablePatternIcons } = props.context.settings;
  return (
    <React.Fragment>
      {enablePatternIcons ? (
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
      ) : (
        <PatternGridList>
          {props.patterns.map(pattern => (
            <PatternGridListItem key={pattern.id} pattern={pattern} />
          ))}
        </PatternGridList>
      )}
    </React.Fragment>
  );
}

PatternGrid.propTypes = {
  patterns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      path: PropTypes.string,
      hasIcon: PropTypes.bool,
    }),
  ).isRequired,
  context: contextPropTypes.isRequired,
};

PatternGridItem.propTypes = {
  pattern: PropTypes.shape({
    id: PropTypes.string,
    path: PropTypes.string,
    meta: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      hasIcon: PropTypes.bool,
    }).isRequired,
  }).isRequired,
  context: contextPropTypes.isRequired,
};

PatternGridListItem.propTypes = {
  pattern: PropTypes.shape({
    id: PropTypes.string,
    path: PropTypes.string,
    meta: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      hasIcon: PropTypes.bool,
    }).isRequired,
  }).isRequired,
};

export default connectToContext(PatternGrid);
