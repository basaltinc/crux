import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@basalt/bedrock-atoms';
import { PlaygroundStyledSchemaForm } from './playground.styles';

const PlaygroundEditForm = ({
  schema,
  data,
  handleChange,
  handleError,
  handleHideEditForm,
  handleClearData,
  uiSchema,
}) => (
  <div>
    <h4>Edit</h4>
    <PlaygroundStyledSchemaForm
      schema={schema}
      uiSchema={uiSchema}
      formData={data}
      onChange={handleChange}
      onError={handleError}
      onSubmit={() =>
        console.log(
          'Playground Edit Form was submitted, but it is not wired up to anything....',
        )
      }
      debug
    />
    <Button
      onClick={handleHideEditForm}
      onKeyPress={handleHideEditForm}
      type="submit"
      tabIndex="0"
      className="button button--color-blue button--size-small"
      primary
    >
      Done
    </Button>
    <Button
      style={{ marginLeft: '1rem' }}
      onClick={handleClearData}
      onKeyPress={handleClearData}
      type="submit"
      tabIndex="0"
      className="button button--color-iron button--size-small"
    >
      Clear
    </Button>
  </div>
);

PlaygroundEditForm.defaultProps = {
  data: {},
};

PlaygroundEditForm.propTypes = {
  schema: PropTypes.object.isRequired,
  uiSchema: PropTypes.object.isRequired,
  data: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
  handleError: PropTypes.func.isRequired,
  handleHideEditForm: PropTypes.func.isRequired,
  handleClearData: PropTypes.func.isRequired,
};

export default PlaygroundEditForm;
