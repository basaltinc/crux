import React from 'react';
import PropTypes from 'prop-types';
import SchemaForm from '@basalt/bedrock-schema-form';

const PlaygroundEditForm = ({
  schema,
  data,
  handleChange,
  handleError,
  handleHideEditForm,
}) => (
  <div>
    <SchemaForm
      schema={schema}
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
    <button
      onClick={handleHideEditForm}
      onKeyPress={handleHideEditForm}
      type="submit"
      tabIndex="0"
    >
      Done
    </button>
  </div>
);

PlaygroundEditForm.defaultProps = {
  data: {},
};

PlaygroundEditForm.propTypes = {
  schema: PropTypes.object.isRequired,
  data: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
  handleError: PropTypes.func.isRequired,
  handleHideEditForm: PropTypes.func.isRequired,
};

export default PlaygroundEditForm;