import React, { Component } from 'react';
import PropTypes from 'prop-types';
import arrayMove from 'array-move';
import styled from 'styled-components';
import uuid from 'uuid/v4';
import Spinner from '@basalt/bedrock-spinner';
import PlaygroundSlice from './playground-slice';
import Sidebar from '../../components/sidebar';
import { apiUrlBase } from '../../../config';
import PlaygroundSidebar from './playground-sidebar';

const MainContent = styled.div`
  flex-grow: 1;
  padding: var(--spacing-l);
  overflow-y: scroll;
`;

const Page = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 175px);
  max-width: 100vw;
  // @todo fix this temp workaround for negatting the "MainContent" padding
  margin: calc(-1 * var(--spacing-l));
`;

const StartInsertSlice = styled.div`
  display: ${props => (props.hasVisibleControls ? 'block' : 'none')};
  border: dashed 1px lightgrey;
  text-align: center;
  cursor: pointer;
  padding: 1rem;
  margin: 1rem 0;
  transition: all 0.3s ease;
  &:hover,
  &:active {
    color: #e1c933;
    border: dashed 1px #e1c933;
    text-decoration: underline;
  }
`;

// Export of allowed sidebarContent states
export const SIDEBAR_DEFAULT = 'default';
export const SIDEBAR_FORM = 'form';
export const SIDEBAR_PATTERNS = 'patterns';

class Playground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      example: {},
      slices: [],
      sidebarContent: SIDEBAR_DEFAULT,
      editFormInsertionIndex: 0,
      editFormSchema: {},
      editFormSliceId: null,
      filterTerm: '',
    };
    this.moveSliceUp = this.moveSliceUp.bind(this);
    this.moveSliceDown = this.moveSliceDown.bind(this);
    this.deleteSlice = this.deleteSlice.bind(this);
    this.handleHideEditForm = this.handleHideEditForm.bind(this);
    this.save = this.save.bind(this);
    this.getTemplateFromPatternId = this.getTemplateFromPatternId.bind(this);
    this.handleAddSlice = this.handleAddSlice.bind(this);
    this.handleEditFormChange = this.handleEditFormChange.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleFilterReset = this.handleFilterReset.bind(this);
    this.handleMetaFormChange = this.handleMetaFormChange.bind(this);
    this.handleStartInsertSlice = this.handleStartInsertSlice.bind(this);
  }

  componentDidMount() {
    window
      .fetch(`${apiUrlBase}/example/${this.props.id}`)
      .then(res => res.json())
      .then(example => {
        this.setState({
          example,
          slices: example.slices,
          ready: true,
        });
      });
  }

  /**
   * @param {string} patternId - ID of Pattern, i.e. `media-block`
   * @return {{ name: string, schema: Object }} - First (main) template
   */
  getTemplateFromPatternId(patternId) {
    const pattern = this.props.patterns.find(p => p.id === patternId);
    // @todo Improve template grabbing method besides just "first" one
    return pattern.templates[0];
  }

  handleFilterReset() {
    this.setState({
      filterTerm: '',
    });
  }

  save() {
    const newExample = Object.assign({}, this.state.example, {
      slices: this.state.slices,
    });

    window
      .fetch(`${apiUrlBase}/example/${this.props.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newExample),
      })
      .then(res => res.json())
      .then(results => {
        console.log('Save Results:', results);
      });
  }

  handleHideEditForm() {
    this.setState({
      editFormSliceId: null,
      sidebarContent: SIDEBAR_DEFAULT,
    });
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

  /**
   * @param {Object} patternId - a pattern id
   * @param {string} slice.id - uuid
   * @param {string} slice.patternId - ID of Pattern, i.e. `media-block`
   * @param {Object} slice.data - Data for Pattern, usually `{}`
   * @returns {null} - sets state
   */
  handleAddSlice(patternId) {
    const { schema } = this.getTemplateFromPatternId(patternId);
    const id = uuid();
    this.setState(prevState => {
      prevState.slices.splice(prevState.editFormInsertionIndex, 0, {
        id,
        patternId,
        data: schema.examples ? schema.examples[0] : {},
      });
      return {
        slices: prevState.slices,
        editFormSliceId: id,
        editFormSchema: schema,
        sidebarContent: SIDEBAR_FORM,
      };
    });
    this.handleFilterReset();
  }

  handleStartInsertSlice(index) {
    this.setState({
      sidebarContent: SIDEBAR_PATTERNS,
      editFormInsertionIndex: index,
    });
  }

  handleEditFormChange(data) {
    this.setState(prevState => ({
      slices: prevState.slices.map(slice => {
        if (slice.id === prevState.editFormSliceId) {
          slice.data = data.formData;
        }
        return slice;
      }),
    }));
  }

  handleFilterChange(event) {
    this.setState({ filterTerm: event.target.value });
  }

  handleMetaFormChange(formData) {
    this.setState(prevState => ({
      example: Object.assign({}, prevState.example, formData),
    }));
  }

  render() {
    const { hasVisibleControls } = this.state.example;

    if (!this.state.ready) {
      return <Spinner />;
    }

    return (
      <Page>
        <Sidebar>
          <button type="submit" onKeyPress={this.save} onClick={this.save}>
            Save Everything
          </button>
          <small>Warning: server unresponsive for ~3s upon save</small>
          {/* @todo Fix unresponsive server triggered by save. Since this writes to the JSON files in `server/data/examples/*.json` and the `watch:server` task watches that directory for changes, it cause server to restart. It can't be fixed by just moving the files: cause then those files are cached. */}
          <PlaygroundSidebar
            editFormSchema={this.state.editFormSchema}
            editFormSliceId={this.state.editFormSliceId}
            filterTerm={this.state.filterTerm}
            handleAddSlice={this.handleAddSlice}
            handleEditFormChange={this.handleEditFormChange}
            handleHideEditForm={this.handleHideEditForm}
            handleFilterChange={this.handleFilterChange}
            handleFilterReset={this.handleFilterReset}
            handleMetaFormChange={this.handleMetaFormChange}
            metaFormData={this.state.example}
            patterns={this.props.patterns}
            sidebarContent={this.state.sidebarContent}
            slices={this.state.slices}
          />
        </Sidebar>
        <MainContent>
          {/* <h2>Playground for id: {this.props.id}</h2> */}
          <h4 className="eyebrow">Prototyping Sandbox</h4>
          <h2>{this.state.example.title}</h2>

          <StartInsertSlice
            onClick={() => this.handleStartInsertSlice(0)}
            onKeyPress={() => this.handleStartInsertSlice(0)}
            hasVisibleControls={hasVisibleControls}
          >
            <h6>Click to Insert Content Here</h6>
          </StartInsertSlice>
          {this.state.slices.map((slice, sliceIndex) => {
            const template = this.getTemplateFromPatternId(slice.patternId);
            return (
              <React.Fragment key={`${slice.id}--fragment`}>
                <PlaygroundSlice
                  key={slice.id}
                  template={template.name}
                  data={slice.data}
                  showEditForm={() => {
                    this.setState({
                      editFormSliceId: slice.id,
                      editFormSchema: template.schema,
                      sidebarContent: SIDEBAR_FORM,
                    });
                  }}
                  deleteMe={() => this.deleteSlice(slice.id)}
                  moveUp={() => this.moveSliceUp(sliceIndex)}
                  moveDown={() => this.moveSliceDown(sliceIndex)}
                  hasVisibleControls={hasVisibleControls}
                  isBeingEdited={this.state.editFormSliceId === slice.id}
                  isFirst={sliceIndex === 0}
                  isLast={this.state.slices.length - 1 === sliceIndex}
                />
                <StartInsertSlice
                  key={`${slice.id}--handleAddSlice`}
                  onClick={() => this.handleStartInsertSlice(sliceIndex + 1)}
                  onKeyPress={() => this.handleStartInsertSlice(sliceIndex + 1)}
                  hasVisibleControls={hasVisibleControls}
                >
                  <h6>Click to Insert Content Here</h6>
                </StartInsertSlice>
              </React.Fragment>
            );
          })}
        </MainContent>
      </Page>
    );
  }
}

Playground.propTypes = {
  patterns: PropTypes.array.isRequired, // eslint-disable-line
  example: PropTypes.object.isRequired, // eslint-disable-line
  id: PropTypes.string.isRequired, // @todo save/show playgrounds based on `id`
};

export default Playground;
