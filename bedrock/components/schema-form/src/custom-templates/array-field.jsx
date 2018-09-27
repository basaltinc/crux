import React from 'react';
import PropTypes from 'prop-types';
import {
  FormIconButton,
  FormIconTray,
  FormArrayItem,
} from '@basalt/bedrock-atoms';

import upArrow from '../assets/angle-up.svg';
import downArrow from '../assets/angle-down.svg';
import add from '../assets/plus-square-o.svg';
import remove from '../assets/trash.svg';

export default function CustomArrayField(props) {
  const numberofItems = props.items.length;
  return (
    <div id={`field-array--${props.idSchema.$id}`} className={props.className}>
      <details>
        <summary>{props.title}</summary>
        {props.items &&
          props.items.map(element => (
            <FormArrayItem className="field-array__item" key={element.index}>
              <p className="n-of-x">
                {element.index + 1} / {numberofItems}
              </p>
              {element.children}
              <FormIconTray className="field-array__item-button-tray">
                <FormIconButton
                  active={element.hasMoveUp}
                  backgroundImage={`url(${upArrow})`}
                  onKeyPress={element.onReorderClick(
                    element.index,
                    element.index - 1,
                  )}
                  onClick={element.onReorderClick(
                    element.index,
                    element.index - 1,
                  )}
                  role="button"
                  aria-label="move item up"
                  tabIndex="0"
                />
                <FormIconButton
                  active={element.hasMoveDown}
                  backgroundImage={`url(${downArrow})`}
                  onKeyPress={element.onReorderClick(
                    element.index,
                    element.index + 1,
                  )}
                  onClick={element.onReorderClick(
                    element.index,
                    element.index + 1,
                  )}
                  role="button"
                  aria-label="move item down"
                  tabIndex="0"
                />
                <FormIconButton
                  active
                  backgroundImage={`url(${remove})`}
                  onClick={element.onDropIndexClick(element.index)}
                  onKeyPress={element.onDropIndexClick(element.index)}
                  role="button"
                  aria-label="remove item"
                  tabIndex="0"
                />
              </FormIconTray>
            </FormArrayItem>
          ))}
        {props.canAdd && (
          <FormIconTray style={{ marginTop: '5px' }}>
            <FormIconButton
              style={{
                backgroundImage: `url(${add})`,
              }}
              onClick={props.onAddClick}
              onKeyPress={props.onAddClick}
              role="button"
              aria-label="add new item"
              tabIndex="0"
            />
          </FormIconTray>
        )}
      </details>
    </div>
  );
}

// CustomArrayField.defaultProps = {
//   isNested: false,
// };

CustomArrayField.propTypes = {
  /* eslint-disable-next-line react/boolean-prop-naming */
  canAdd: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  idSchema: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAddClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  // isNested: PropTypes.bool,
};
