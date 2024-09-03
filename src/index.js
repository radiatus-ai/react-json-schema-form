import React from 'react';
import JsonSchemaForm from './components/JsonSchemaForm';
import GCPRegionsComponent from './plugins/customComponents/GCPRegions';

import { ErrorProvider } from './context/ErrorContext';
import { I18nProvider } from './context/I18nContext';

const WrappedJsonSchemaForm = (props) => (
  <ErrorProvider>
    <I18nProvider locale="en">
      <JsonSchemaForm {...props} />
    </I18nProvider>
  </ErrorProvider>
);

export default WrappedJsonSchemaForm;

export { GCPRegionsComponent, React };
