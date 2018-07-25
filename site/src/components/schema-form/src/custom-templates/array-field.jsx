import React from 'react';
import { getRandomInt } from '../../../../../utils';
import './array-field.styles.css';
import upArrow from './../assets/angle-up.svg';
import downArrow from './../assets/angle-down.svg';
import add from './../assets/plus-square-o.svg';
import remove from './../assets/trash.svg';

// @todo add prop types
/* eslint-disable react/prop-types */
export default function CustomArrayField(props) {
  return (
    <div id={`field-array--${getRandomInt(1000)}`} className={props.className}>
      <details>
        <summary>{props.title}</summary>
        {props.items &&
          props.items.map(element => (
            <div className="field-array__item" key={element.index}>
              <div className="field-array__item-button-tray">
                {element.hasMoveUp && (
                  <div
                    className="field-array__item-button"
                    style={{
                      backgroundImage: `url(${upArrow})`,
                    }}
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
                )}
                {element.hasMoveDown && (
                  <div
                    className="field-array__item-button"
                    style={{
                      backgroundImage: `url(${downArrow})`,
                    }}
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
                )}
                {(element.hasMoveDown || element.hasMoveUp) && <hr />}
                <div
                  className="field-array__item-button"
                  style={{
                    backgroundImage: `url(${remove})`,
                  }}
                  onClick={element.onDropIndexClick(element.index)}
                  onKeyPress={element.onDropIndexClick(element.index)}
                  role="button"
                  aria-label="remove item"
                  tabIndex="0"
                />
              </div>
              <div className="field-array__item-field">{element.children}</div>
            </div>
          ))}
        {props.canAdd && (
          <div className="field-array__item-button-tray">
            <div
              className="field-array__item-button"
              style={{
                backgroundImage: `url(${add})`,
              }}
              onClick={props.onAddClick}
              onKeyPress={props.onAddClick}
              role="button"
              aria-label="add new item"
              tabIndex="0"
            />
          </div>
        )}
      </details>
    </div>
  );
}
