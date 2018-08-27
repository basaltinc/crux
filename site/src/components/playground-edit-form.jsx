import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SchemaForm from '@basalt/bedrock-schema-form';

export default class PlaygroundEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.handleHideEditForm();
    // this.submitButton.click();
  }

  render() {
    const ButtonTray = (
      <div className="edit-form__button-tray">
        {/* <Button type="submit" handleClick={() => this.handleSubmit()}> */}
        {/* Save */}
        {/* </Button> */}
        {/* <Button bg="white" handleClick={() => this.props.handleHideEditForm()}> */}
        {/* Close */}
        {/* </Button> */}
        {/* <Button bg="white" handleClick={() => this.handleModalToggle()}> */}
        {/* <img */}
        {/* src={this.state.isModal ? compress : expand} */}
        {/* alt={this.state.isModal ? 'compress' : 'expand'} */}
        {/* style={{ */}
        {/* width: '21px', */}
        {/* height: '16px', */}
        {/* }} */}
        {/* /> */}
        {/* </Button> */}
      </div>
    );

    return (
      <div className="edit-form">
        <div
          className="edit-form__overlay"
          onClick={() => this.props.handleHideEditForm()}
          onKeyPress={() => this.props.handleHideEditForm()}
          role="button"
          tabIndex="0"
        />
        <div className="edit-form__content">
          {this.state.isModal && (
            <div className="edit-form__header">{ButtonTray}</div>
          )}
          <div className="edit-form__body">
            <SchemaForm
              schema={this.props.schema}
              formData={this.props.data}
              uiSchema={this.props.uiSchema}
              onChange={this.props.handleChange}
              onError={this.props.handleError}
              onSubmit={this.props.handleSubmit}
              debug
            />
          </div>
          {!this.state.isModal && (
            <div className="edit-form__footer">{ButtonTray}</div>
          )}
        </div>
      </div>
    );
  }
}
PlaygroundEditForm.defaultProps = {
  uiSchema: {},
  data: {},
  handleHideEditForm: () => {},
};

PlaygroundEditForm.propTypes = {
  schema: PropTypes.object.isRequired,
  data: PropTypes.object,
  uiSchema: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
  handleError: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleHideEditForm: PropTypes.func, // eslint-disable-line @todo consider removing
};
