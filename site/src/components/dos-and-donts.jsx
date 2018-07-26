import React from 'react';
import PropTypes from 'prop-types';
import './dos-and-donts.css';

class DosAndDonts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const items = this.props.items.map((item, i) => (
      <figure key={i} className={item.do ? 'comparisons__item comparisons__item--do' : 'comparisons__item comparisons__item--dont'}>
        <img src={item.image} />
        <figcaption><span>{item.do ? 'Do ' : 'Don\'t '}</span>{item.caption}</figcaption>
      </figure>
    ));

    return (
      <div className="comparisons">
        {this.props.title && <h4>{this.props.title}</h4>}
        {this.props.description && <p>{this.props.description}</p>}
          <div className={'comparisons__inner'}>
          {items}
        </div>
      </div>
    );
  }
}

DosAndDonts.defaultProps = {
  title: 'Test',
  description: '',
};

DosAndDonts.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      caption: PropTypes.string,
      do: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default DosAndDonts;
