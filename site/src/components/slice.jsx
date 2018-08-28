import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormIconButton, FormIconTray } from '@basalt/bedrock-atoms';
import { FaChevronDown, FaChevronUp, FaTrashAlt, FaEdit } from 'react-icons/fa';
import Twig from './twig';

export default class Slice extends Component {
  static getDerivedStateFromProps(props, state) {
    return {
      data: state.data ? state.data : props.data,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(data) {
    this.setState({ data: data.formData });
  }

  showEditform() {
    this.props.showEditForm({
      data: this.state.data,
      schema: this.props.schema,
      // uiSchema: this.props.Component.schemas.uiSchema,
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit,
      handleError: data => console.error(data),
      sliceIndexCurrentlyBeingEdited: this.props.sliceIndex,
    });
  }

  render() {
    return (
      <div
        style={{
          border: `dotted 1px ${this.props.isBeingEdited ? 'blue' : '#ccc'}`,
        }}
      >
        <FormIconTray className="ei-content-block__button-tray field-array__item-button-tray">
          {this.props.sliceIndex !== 0 && (
            <FormIconButton
              className="ei-content-block__button"
              onKeyPress={() => this.props.moveUp()}
              onClick={() => this.props.moveUp()}
              role="button"
              aria-label="move item up"
              tabIndex="0"
            >
              <FaChevronUp fill="gray" />
            </FormIconButton>
          )}
          {this.props.sliceIndex < this.props.totalSlicesLength - 1 && (
            <FormIconButton
              className="ei-content-block__button"
              onKeyPress={() => this.props.moveDown()}
              onClick={() => this.props.moveDown()}
              role="button"
              aria-label="move item up"
              tabIndex="0"
            >
              <FaChevronDown fill="gray" />
            </FormIconButton>
          )}
          {/* {(this.props.sliceIndex !== 0 || */}
          {/* this.props.sliceIndex < this.props.contentBlocksLength - 1) && <hr />} */}
          <FormIconButton
            className="ei-content-block__button"
            onKeyPress={() => this.showEditform()}
            onClick={() => this.showEditform()}
            role="button"
            aria-label="being editing"
            tabIndex="0"
          >
            <FaEdit fill="gray" />
          </FormIconButton>
          {/* <hr /> */}
          <FormIconButton
            className="ei-content-block__button"
            onKeyPress={() => this.props.deleteMe()}
            onClick={() => this.props.deleteMe()}
            role="button"
            aria-label="delete component"
            tabIndex="0"
          >
            <FaTrashAlt fill="gray" />
          </FormIconButton>
        </FormIconTray>

        <Twig template={this.props.template} data={this.state.data} />
      </div>
    );
  }
}

Slice.defaultProps = {
  data: {},
};

Slice.propTypes = {
  template: PropTypes.string.isRequired,
  schema: PropTypes.object.isRequired,
  data: PropTypes.object, // eslint-disable-line react/no-unused-prop-types
  showEditForm: PropTypes.func.isRequired,
  sliceIndex: PropTypes.number.isRequired,
  totalSlicesLength: PropTypes.number.isRequired,
  deleteMe: PropTypes.func.isRequired,
  moveUp: PropTypes.func.isRequired,
  moveDown: PropTypes.func.isRequired,
  isBeingEdited: PropTypes.bool.isRequired,
};
