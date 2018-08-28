import React, { Component } from 'react';
import PropTypes from 'prop-types';
import arrayMove from 'array-move';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import uuid from 'uuid/v4';
import SchemaForm from '@basalt/bedrock-schema-form';
import Spinner from '@basalt/bedrock-spinner';
import Slice from '../components/slice';
import PlaygroundEditForm from '../components/playground-edit-form';
import Sidebar from '../components/sidebar';
import { apiUrlBase } from '../../config';

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

const PatternListItemWrapper = styled.li`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin: 1.5rem 0;
  img {
    width: 50px;
    height: 50px;
  }
  > div {
    &:hover,
    &:active {
      cursor: pointer;
    }
  }
  a {
    font-size: 13.5px;
  }
`;

class Playground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      example: {},
      slices: [],
      showEditForm: false,
      showPatternForm: false,
      editFormInsertionIndex: 0,
      editFormSchema: {},
      editFormSliceId: null,
    };
    this.moveSliceUp = this.moveSliceUp.bind(this);
    this.moveSliceDown = this.moveSliceDown.bind(this);
    this.deleteSlice = this.deleteSlice.bind(this);
    this.addSlice = this.addSlice.bind(this);
    this.hideEditForm = this.hideEditForm.bind(this);
    this.save = this.save.bind(this);
    this.renderSidebar = this.renderSidebar.bind(this);
    this.handleStartInsertSlice = this.handleStartInsertSlice.bind(this);
    this.addSlice = this.addSlice.bind(this);
    this.getTemplateFromPatternId = this.getTemplateFromPatternId.bind(this);
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

  hideEditForm() {
    this.setState({
      showEditForm: false,
      editFormSliceId: null,
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
  addSlice(patternId) {
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
        showEditForm: true,
        showPatternForm: false,
      };
    });
  }

  handleStartInsertSlice(index) {
    this.setState({
      showEditForm: false,
      showPatternForm: true,
      editFormInsertionIndex: index,
    });
  }

  renderPatternListItem(pattern) {
    return (
      <PatternListItemWrapper key={pattern.id} type="button">
        <Link to={`/patterns/components/${pattern.id}`}>View Details</Link>
        <div
          role="button"
          tabIndex="0"
          onKeyPress={() => this.addSlice(pattern.id)}
          onClick={() => this.addSlice(pattern.id)}
        >
          <h5 style={{ marginBottom: '0' }}>{pattern.title}</h5>
          <img
            src={`/assets/images/pattern-thumbnails/${pattern.id}.svg`}
            alt={pattern.title}
          />
        </div>
      </PatternListItemWrapper>
    );
  }

  renderSidebar() {
    if (this.state.showEditForm) {
      const { slices, editFormSliceId, editFormSchema } = this.state;
      return (
        <PlaygroundEditForm
          schema={editFormSchema}
          data={slices.find(s => s.id === editFormSliceId).data}
          handleChange={data => {
            this.setState(prevState => ({
              slices: prevState.slices.map(slice => {
                if (slice.id === editFormSliceId) {
                  slice.data = data.formData;
                }
                return slice;
              }),
            }));
          }}
          handleError={console.error}
          hideEditForm={this.hideEditForm}
        />
      );
    }
    if (this.state.showPatternForm) {
      return (
        <div>
          <h4>Patterns</h4>
          <ul>
            {this.props.patterns
              .filter(pattern => pattern.id !== 'site-footer')
              .filter(pattern => pattern.id !== 'site-header')
              .map(pattern => this.renderPatternListItem(pattern))}
          </ul>
        </div>
      );
    }
    return (
      <div>
        <h4>Playground</h4>
        <p>Edit, add, re-arrange, and delete slices.</p>
        <p>Wow, this is great copy!</p>
        <SchemaForm
          onChange={({ formData }) => {
            this.setState(prevState => ({
              example: Object.assign({}, prevState.example, formData),
            }));
          }}
          formData={this.state.example}
          schema={{
            title: 'Metadata',
            type: 'object',
            properties: {
              title: {
                title: 'Example Title',
                type: 'string',
              },
              description: {
                title: 'Description',
                type: 'string',
              },
              hasVisibleControls: {
                title: 'Show Edit Controls',
                type: 'boolean',
                default: true,
              },
            },
          }}
        />
      </div>
    );
  }

  render() {
    const { hasVisibleControls } = this.state.example;
    const sidebarContents = this.renderSidebar();

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
          {sidebarContents}
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
                <Slice
                  key={slice.id}
                  template={template.name}
                  data={slice.data}
                  showEditForm={() => {
                    this.setState({
                      editFormSliceId: slice.id,
                      editFormSchema: template.schema,
                      showEditForm: true,
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
                  key={`${slice.id}--addSlice`}
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
