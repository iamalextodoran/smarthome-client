import React from 'react';
import Button from './components/Button';
import Card from './components/Card';

function App() {
  return (
      <div class="layout-row layout-align-center-center">
        <Card title="First react app" content="Not that hard, sometimes tricky, but not hard" buttonType="" buttonText="Click me"/>
        <Card title="First react app" content="Not that hard, sometimes tricky, but not hard" buttonType="primary" buttonText="Click me"/>
        <Card title="First react app" content="Not that hard, sometimes tricky, but not hard" buttonType="accent" buttonText="Click me"/>
      </div>
  );
}

export default App;