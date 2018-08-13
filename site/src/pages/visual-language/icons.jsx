import React from 'react';
import VisualLanguagePage from '../../templates/visual-language-page';

function IconsPage() {
  return (
    <VisualLanguagePage className="docs">
      <h4 className="eyebrow">Visual Language</h4>
      <h2>Icons</h2>
      <hr />
      <blockquote>
        Trying to capture the essence of an object or an idea with only a few
        lines and at the same time maintaining its elegance is pretty much
        design in a nutshell. That’s what’s so great about icons, they’re tiny
        poems. - Kyle Tezak, The Four Icon Challenge
      </blockquote>
      <hr />
      <br />
      <h3>How to Use Icons</h3>
      <p>
        The icon name is next to each icon and is represented by ICON-NAME
        below.
      </p>
      <h4>In HTML</h4>
      <code>{'<i className="icon--ICON-NAME" />'}</code>
      <br />
      <br />
      <h4>In SASS</h4>
      <p>
        Use the mixin <code>@icon</code> with the argument of the icon name like
        this: <code>@include icon (facebook);</code>.
      </p>
      <code
        style={{
          whiteSpace: 'pre',
        }}
      >
        {'.class { '}
        <br />
        {'   @include icon(ICON-NAME);'}
        <br />
        {'}'}
      </code>
      <br />
      <br />
      <h4>Adding and generating icons</h4>
      <p>
        Add SVG files <code>images/icons/src/</code> to automatically add to
        this list.
      </p>
      <div className="icons-demo" id="icons">
        <div className="icons__item" data-name="close">
          <i className="icon--close" /> icon--close
        </div>

        <div className="icons__item" data-name="facebook">
          <i className="icon--facebook" /> icon--facebook
        </div>

        <div className="icons__item" data-name="icon-black-grey">
          <i className="icon--icon-black-grey" /> icon--icon-black-grey
        </div>

        <div className="icons__item" data-name="icon-black">
          <i className="icon--icon-black" /> icon--icon-black
        </div>

        <div className="icons__item" data-name="icon-color">
          <i className="icon--icon-color" /> icon--icon-color
        </div>

        <div className="icons__item" data-name="instagram">
          <i className="icon--instagram" /> icon--instagram
        </div>

        <div className="icons__item" data-name="linkedin">
          <i className="icon--linkedin" /> icon--linkedin
        </div>

        <div className="icons__item" data-name="menu">
          <i className="icon--menu" /> icon--menu
        </div>

        <div className="icons__item" data-name="search">
          <i className="icon--search" /> icon--search
        </div>

        <div className="icons__item" data-name="twitter">
          <i className="icon--twitter" /> icon--twitter
        </div>
      </div>
    </VisualLanguagePage>
  );
}

export default IconsPage;
