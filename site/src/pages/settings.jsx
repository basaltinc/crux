import React from 'react';
import { BedrockContextConsumer } from '@basalt/bedrock-core';
import SchemaForm from '@basalt/bedrock-schema-form';
import settingsSchema from '../../settings.schema';
import { isDevMode } from '../../config';

function SettingsPage() {
  return (
    <BedrockContextConsumer>
      {({ settings, setSettings }) => (
        <div>
          <h4 className="eyebrow">Configuration</h4>
          <h2>Settings</h2>
          {(isDevMode && (
            <React.Fragment>
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
              <SchemaForm
                schema={settingsSchema}
                formData={settings}
                onChange={({ formData }) => setSettings(formData)}
              />
            </React.Fragment>
          )) || (
            <React.Fragment>
              <h5>Oops ¯\_(ツ)_/¯</h5>
              <p>
                Seems you have reached this page in error. <br /> Adjusting site
                wide settings is a feature of Dev Mode. <br /> To enable,
                install the site locally and run `y start`.
              </p>
            </React.Fragment>
          )}
        </div>
      )}
    </BedrockContextConsumer>
  );
}

export default SettingsPage;
