import React from 'react';
import {image, paragraph, text, title} from '@basalt/demo-data';
import Page from '../../templates/page';
import Demo from '../../components/demo';

const DSPage = () => (
  <Page>
    <div> {/* @todo temp fix - refactor templates to allow for pages w/o sidebars */}
      <h2>Welcome to the Design System!</h2>
      <section>
        <h3>Components</h3>

        <article>
          <h4>Hero</h4>
          <Demo
            template="@components/_hero.twig"
            data={{
              title: title(),
              body: paragraph(),
              image_overlay: 'black',
              image: image(),
              buttons: [
                {
                  text: text(),
                },
                {
                  text: text(),
                },
              ],
            }}
          />
        </article>

        <hr/>

        <article>
          <h4>Media Tile</h4>
          <div style={{
            width: '400px',
            margin: '0 auto',
            resize: 'both',
            overflow: 'scroll',
            border: 'dotted 1px grey',
            padding: '5px',
          }}>
            <Demo
              template="@components/_media-tile.twig"
              data={{
                title: title(),
                body: paragraph(),
                background_image: image(),
                title_text_color: 'white',
                body_text_color: 'white',
                content_padding: 'l',
                text_align: 'center',
                title_size: '2',
              }}
            />
          </div>
        </article>

        <hr/>

        <article>
          <h4>Media Block</h4>
          <div style={{
            width: '500px',
            margin: '0 auto',
            resize: 'both',
            overflow: 'scroll',
            border: 'dotted 1px grey',
            padding: '5px',
          }} >
            <Demo
              template="@components/_media-block.twig"
              data={{
                title: title(),
                body: paragraph(),
                media: image(),
                media_alignment: 'top',
              }}
            />
          </div>

          <br />

          <div style={{
            width: '800px',
            margin: '0 auto',
            resize: 'both',
            overflow: 'scroll',
            border: 'dotted 1px grey',
            padding: '5px',
          }}>
            <Demo
              template="@components/_media-block.twig"
              data={{
                title: title(),
                body: paragraph(),
                media: image(),
              }}
            />
          </div>
        </article>

        <hr/>

      </section>
    </div>
  </Page>
);

export default DSPage;
