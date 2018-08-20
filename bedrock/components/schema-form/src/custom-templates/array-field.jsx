import React from 'react';
import { FormIconButton, FormIconTray, FormArrayItem } from '@basalt/bedrock-atoms';

import { getRandomInt } from '../../../../packages/utils/src/index';

import upArrow from '../assets/angle-up.svg';
import downArrow from '../assets/angle-down.svg';
import add from '../assets/plus-square-o.svg';
import remove from '../assets/trash.svg';

// @todo add prop types
/* eslint-disable react/prop-types */
export default function CustomArrayField(props) {
  console.log(props);
  return (
    <div id={`field-array--${props.idSchema.$id}`} className={props.className}>
      <details>
        <summary>{props.title}</summary>
        {props.items &&
          props.items.map((element, index) => (
            <FormArrayItem className="field-array__item" key={element.index}>
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
                  active={true}
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
          <FormIconTray>
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
