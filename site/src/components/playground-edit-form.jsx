import React from 'react';
import PropTypes from 'prop-types';
import SchemaForm from '@basalt/bedrock-schema-form';

const PlaygroundEditForm = ({
  schema,
  data,
  handleChange,
  handleError,
  hideEditForm,
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
      onClick={hideEditForm}
      onKeyPress={hideEditForm}
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
  hideEditForm: PropTypes.func.isRequired,
};

export default PlaygroundEditForm;
