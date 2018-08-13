import React from 'react';
import styled from 'styled-components';

import { TwoUp } from '../../bedrock/components/atoms';
import DosAndDonts from '../../bedrock/components/dos-and-donts';

const LetteredList = styled.ol`
  list-style: upper-alpha;
`;

function LogoUsage() {
  return (
    <div>
      <h3 className="eyebrow">Resources</h3>
      <h2>Logo Usage</h2>
      <h4>Primary Logo</h4>
      <TwoUp>
        <div>
          <p>
            Basalt’s primary logo incorporates the icon into the wordmark
            creating a clean and boldly affective brand identity. The use of all
            caps brings a modern sense of strength and stability. The icon
            represents an abstracted and geometric tent but also mimics the
            structure of basalt columns bringing the overall tone back to the
            natural world and creating a playful sense of adventure.
          </p>
          <p>
            This is the main logo that will be used across all primary brand
            applications and platforms. It is the main touch point for your
            audience to identity Basalts product, web presence, social media,
            ads, and other brand materials. It is imperative that the logo
            always be applied with consideration and accordance to the brand
            guidelines to maximize the success of Basalts brand presence.
          </p>
          <h5>Minimum Size</h5>
          <p>
            The smallest the Basalt logo should be presented is 1.5 inches wide,
            when representing the logo on a scale below 1.5 inches, it is best
            to use the icon only.
          </p>
        </div>
        <img src={'/assets/images/logo--color.svg'} alt="Basalt Logo" />
      </TwoUp>
      <h4>Construction</h4>
      <TwoUp>
        <img
          src={'/assets/images/logo-construction.png'}
          alt="Basalt Logo Construction"
        />
        <div>
          <p>
            The Basalt logo has been constructed with care, to ensure that it is
            always legible in context it is important to maintain the minimum
            “clear space”. This space isolates the logo from any potentially
            competing graphic elements or margins that may conflict with the
            impact of the logo.
          </p>
          <p>
            The clear space is equal to the width of the ‘B’ to preserve
            proportions.
          </p>
        </div>
      </TwoUp>
      <h4>Color Treatment</h4>
      <TwoUp>
        <div>
          <p>
            The color usage within the Basalt logo is minimal and will always
            appear as black or white and often will include a pop of color
            against neutral tones.
          </p>
          <h5>Tips</h5>
          <ul>
            <li>
              Use contrasting colors (white text on dark tones/ black text on
              light tones)
            </li>
            <li>
              Use solid logo marks on colored backgrounds to minimize
              competition{' '}
            </li>
            <li>
              When placing logomarks on photographic back-grounds refer to the
              photo guidelines
            </li>
          </ul>
        </div>
        <img
          src={'/assets/images/logo-on-color-bgs.png'}
          alt="Basalt Logo Treatment Examples"
        />
      </TwoUp>
      <h4>Photo Backgrounds</h4>
      <p>
        Exercise care when placing the logo mark over photographic backgrounds.
        It’s important to ensure that the logomark does not compete with
        elements in the photo and always remains legible. In most cases either a
        solid white or solid black logo on top of a background image will work.
      </p>
      <DosAndDonts
        items={[
          {
            image: '/assets/images/logo-on-photo-bg.png',
            caption:
              'Fig. A and B illustrate how to best place a logo on a photographic background.',
            do: true,
          },
          {
            image: '/assets/images/logo-on-photo-bg2.png',
            caption: 'Figure C illustrates unacceptable logo placement.',
            do: false,
          },
        ]}
      />
      <br />
      <h5>Tips</h5>
      <ul>
        <li>Avoid busy images with lots of detail</li>
        <li>
          When working with high contrast images, turn down the opacity for
          better legibility
        </li>
        <li>Apply overlays when appropriate</li>
        <li>Photos with a shallow depth-of-field work well</li>
      </ul>
      <br />
      <h4>Photo Overlays</h4>
      <p>
        Photo Overlays can be used to add variety within graphic elements when
        appropriate but a few rules apply when adding an overlay to a
        photographic background.
      </p>
      <DosAndDonts
        items={[
          {
            image: '/assets/images/logo-on-photo-overlay.png',
            caption:
              'Fig. A and B illustrate how to best place an overlay on a photographic background.',
            do: true,
          },
          {
            image: 'assets/images/logo-on-photo-overlay2.png',
            caption: 'Figure C illustrates Unacceptable use of an overlay.',
            do: false,
          },
        ]}
      />
      <br />
      <h5>Tips</h5>
      <ul>
        <li>Overlays should come all the way to at least 1 edge</li>
        <li>Overlays should be placed at 80%–50% opacity</li>
        <li>
          Overlays work best when either text or graphic elements are placed
          within them
        </li>
        <li>
          Ensure overlays do not obstruct or conflict with elements in the photo
        </li>
      </ul>
      <br />
      <h4>Unacceptable Logo Formatting</h4>
      <p>
        Rules are an important part of maintaining your logos integrity within
        the Basalt brand. Don’t compromise the look of the logo and brand
        identity by altering the logo in any way including adding unnecessary
        text decorations or graphic elements as drop shadows or outlines. The
        following examples are some of the ways you should never alter the
        Basalt logo.
      </p>
      <LetteredList>
        <li>Don&#39;t rotate</li>
        <li>Don&#39;t stretch or squash</li>
        <li>Don&#39;t place graphics in the designated “clear space”</li>
        <li>Don&#39;t resize the proportions</li>
        <li>
          Don&#39;t re-arrange elements or create new graphics that have not
          been provided by your designer
        </li>
        <li>
          Don&#39;t use a logo variation next to the primary logo on the same
          page
        </li>
        <li>Don&#39;t use o brand or non provided colors</li>
        <li>Don&#39;t add drop shadows or select to the type</li>
        <li>Don&#39;t place the logo in a solid box over a background image</li>
      </LetteredList>
      <img
        src={'assets/images/logo-unacceptable-formats.png'}
        alt="Unacceptable Logo Usages"
      />
    </div>
  );
}

LogoUsage.propTypes = {};

export default LogoUsage;
