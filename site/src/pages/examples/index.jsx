import React, { Component } from 'react';
import { TwoUp, BlockQuoteWrapper } from '@basalt/bedrock-atoms';
import { Link, Redirect } from 'react-router-dom';
import uuid from 'uuid/v4';
import { apiUrlBase } from '../../../config';

class ExamplesLandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exampleLinks: [],
      redirect: '',
    };
    this.makeNewExample = this.makeNewExample.bind(this);
  }

  componentDidMount() {
    window
      .fetch(`${apiUrlBase}/examples`)
      .then(res => res.json())
      .then(examples => {
        const exampleLinks = examples.map(example => ({
          id: example.id,
          title: example.title,
          path: `/examples/${example.id}`,
        }));

        this.setState({
          exampleLinks,
        });
      });
  }

  makeNewExample() {
    const id = uuid();
    window
      .fetch(`${apiUrlBase}/example/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          title: 'My New Example',
          slices: [],
        }),
      })
      .then(res => res.json())
      .then(results => {
        console.log(results);
        this.setState({
          redirect: id,
        });
      });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/examples/${this.state.redirect}`} />;
    }
    const examples = this.state.exampleLinks.map(exampleLink => (
      <li key={exampleLink.id}>
        <Link to={exampleLink.path}>{exampleLink.title}</Link>
      </li>
    ));
    return (
      <div>
        <h4 className="eyebrow">Prototyping and Samples</h4>
        <h2>Examples</h2>
        <BlockQuoteWrapper>
          When I design buildings, I think of the overall composition, much as
          the parts of a body would fit together. On top of that, I think about
          how people will approach the building and experience that space.
          <footer>Tadao Ando</footer>
        </BlockQuoteWrapper>
        <TwoUp>
          <div>
            <h3>What is prototyping?</h3>
            <p>
              Website prototypes are mock-ups or demos of what a website will
              look like when it is in production. Our powerful prototyping tool
              allows designers to quickly assemble, arrange, and add content to
              the reusable components of a design system. This allows designers
              and content editors to rapidly test new ideas, create example page
              layouts, and share ideas with the rest of the team.
            </p>
          </div>
          <div>
            <h3>Interactive Examples</h3>
            <ul>{examples}</ul>
          </div>
        </TwoUp>
        <div>
          <h3>Create a New Example</h3>
          <button
            className="button button--color-blue button--size-large"
            onClick={this.makeNewExample}
            onKeyPress={this.makeNewExample}
            type="submit"
          >
            Get Started
          </button>
        </div>
      </div>
    );
  }
}

ExamplesLandingPage.propTypes = {};

export default ExamplesLandingPage;
