import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BlockQuoteWrapper } from '@basalt/bedrock-atoms';
import { apiUrlBase } from '../../../config';

const ReleaseWrapper = styled.div`
  padding: 1rem;
`;

const ReleaseVersion = styled.h3`
  margin-bottom: 0.5rem;
`;

const ReleaseDate = styled.h5`
  margin-bottom: 1rem;
`;

const ReleaseCommit = styled.p`
  margin-bottom: 0;
  line-height: 2;
`;

const CommitHash = styled.a`
  background-color: #9a9b9f;
  padding: 0.35rem 0.75rem;
  color: black !important;
  border-radius: 0;
  width: 92px;
`;

const releaseNote = items =>
  items.map(item => (
    <ReleaseWrapper key={item.title}>
      <ReleaseVersion>{item.title}</ReleaseVersion>
      <ReleaseDate>{item.niceDate}</ReleaseDate>
      {item.commits.map(commit => (
        <ReleaseCommit key={commit.shorthash}>
          <CommitHash href={commit.href} target="_blank">
            {commit.shorthash}
          </CommitHash>{' '}
          {commit.message}
        </ReleaseCommit>
      ))}
    </ReleaseWrapper>
  ));

const ReleaseNoteList = ({ items }) => <div>{releaseNote(items)}</div>;

ReleaseNoteList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      niceDate: PropTypes.string.isRequired,
      commits: PropTypes.arrayOf(
        PropTypes.shape({
          href: PropTypes.string.isRequired,
          shorthash: PropTypes.string.isRequired,
          message: PropTypes.string.isRequired,
        }),
      ),
    }),
  ).isRequired,
};

class ReleaseNotesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      releaseNotes: [],
    };
  }

  componentDidMount() {
    window
      .fetch(`${apiUrlBase}/releasenotes`)
      .then(res => res.json())
      .then(releaseNotes => {
        this.setState({ releaseNotes });
      });
  }

  render() {
    return (
      <div>
        <div className="body">
          <h4 className="eyebrow">About</h4>
          <h2>Release Notes</h2>
          <BlockQuoteWrapper>
            Take note, we are releasing some amazing things.
            <footer>Evan Lovely, CTO</footer>
          </BlockQuoteWrapper>
        </div>
        <ReleaseNoteList items={this.state.releaseNotes} />
      </div>
    );
  }
}

export default ReleaseNotesPage;
