import React, { Component } from 'react';
import { BedrockContextConsumer } from '@basalt/bedrock-core';
import SchemaForm from '@basalt/bedrock-schema-form';
import PropTypes from 'prop-types';
import settingsSchema from '../../settings.schema';

class SettingsPage extends Component {
  render() {
    return (
      <BedrockContextConsumer>
        {({ settings, theme }) => (
          <div>
            <h4 className="eyebrow">Configuration</h4>
            <h2>Settings</h2>
            <hr />
            <br />
            <h3>
              <b style={{ color: 'red' }}>Warning</b>
            </h3>
            <p>
              Editing the site settings, especially those related to source
              directories and server configuration, may cause this site to
              break. This feature is intended for development mode only.
            </p>
            <br />
            <hr />
            <SchemaForm schema={settingsSchema} formData={settings} />
          </div>
        )}
      </BedrockContextConsumer>
    );
  }
}

SettingsPage.propTypes = {};

export default SettingsPage;
