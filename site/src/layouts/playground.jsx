import React, { Component } from 'react';
import PropTypes from 'prop-types';
import arrayMove from 'array-move';
import Slice from '../components/slice';
import PlaygroundEditForm from '../components/playground-edit-form';

class Playground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slices: props.slices || [],
      showEditForm: false,
      editForm: {
        sliceIndexCurrentlyBeingEdited: null,
        schema: {},
        data: {},
        uiSchema: {},
        handleSubmit: () => {},
        handleChange: () => {},
        handleError: () => {},
      },
    };
    this.showEditForm = this.showEditForm.bind(this);
    this.moveSliceUp = this.moveSliceUp.bind(this);
    this.moveSliceDown = this.moveSliceDown.bind(this);
    this.deleteSlice = this.deleteSlice.bind(this);
  }

  componentDidMount() {}

  /**
   * @param {Object} editForm - Options
   * @param {Object} editForm.data - Current data to pass to Pattern
   * @param {Object} editForm.uiSchema - Schema Form Ui Schema @todo not used currently
   * @param {Object} editForm.schema - Schema of Pattern
   * @param {Function} editForm.handleSubmit - Handle Schema Form submit
   * @param {Function} editForm.handleChange - Handle Schema Form change
   * @param {Function} editForm.handleError - Handle Schema Form error
   * @param {number} editForm.contentBlockIndexCurrentlyBeingEdited - Which Slice
   * @return {null} - sets state
   */
  showEditForm(editForm) {
    this.setState({
      showEditForm: true,
      editForm,
    });
  }

  hideEditForm() {
    this.setState({ showEditForm: false });
  }

  /**
   * @param {number} index - Index of item in `this.state.slices` to move up
   * @return {null} - sets state
   */
  moveSliceUp(index) {
    this.setState(prevState => ({
      slices: arrayMove(prevState.slices, index, index - 1),
    }));
  }

  /**
   * @param {number} index - Index of item in `this.state.slices` to move down
   * @return {null} - sets state
   */
  moveSliceDown(index) {
    this.setState(prevState => ({
      slices: arrayMove(prevState.slices, index, index + 1),
    }));
  }

  deleteSlice(sliceId) {
    this.setState(prevState => ({
      slices: prevState.slices.filter(slice => slice.id !== sliceId),
    }));
  }

  render() {
    return (
      <article>
        <h2>Playground for id: {this.props.id}</h2>
        {this.state.showEditForm && (
          <PlaygroundEditForm
            schema={this.state.editForm.schema}
            data={this.state.editForm.data}
            handleChange={this.state.editForm.handleChange}
            handleSubmit={this.state.editForm.handleSubmit}
            handleError={this.state.editForm.handleError}
          />
        )}
        <hr />
        {/* <ul> */}
        {/* {this.props.patterns.map(p => ( */}
        {/* <li key={p.id}>{p.id}</li> */}
        {/* ))} */}
        {/* </ul> */}
        <hr />
        {this.state.slices.map((slice, sliceIndex) => {
          const pattern = this.props.patterns.find(
            p => p.id === slice.patternId,
          );
          const template = pattern.templates[0];
          return (
            <Slice
              key={slice.id}
              template={template.name}
              schema={template.schema}
              data={slice.data}
              showEditForm={this.showEditForm}
              sliceIndex={sliceIndex}
              totalSlicesLength={this.state.slices.length}
              deleteMe={() => this.deleteSlice(slice.id)}
              moveUp={() => this.moveSliceUp(sliceIndex)}
              moveDown={() => this.moveSliceDown(sliceIndex)}
              isBeingEdited={
                this.state.editForm.sliceIndexCurrentlyBeingEdited ===
                sliceIndex
              }
              // handleSubmit={data =>
              //   this.handleSave(blockId, data, moduleName, packageVersion)
              // }
            />
          );
        })}
      </article>
    );
  }
}

Playground.propTypes = {
  patterns: PropTypes.array.isRequired, // eslint-disable-line
  slices: PropTypes.array.isRequired, // eslint-disable-line
  id: PropTypes.string.isRequired, // @todo save/show playgrounds based on `id`
};

export default Playground;
