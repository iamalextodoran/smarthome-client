import React from 'react';
import Button from './components/Button';
import Card from './components/Card';
import { BrowserRouter, Route, Link, Router } from "react-router-dom";

function App() {
  return (
      <div class="layout-row layout-align-center-end">
        <Card title="First react app" content="Not that hard, sometimes tricky, but not hard" buttonText="Click me"/>
        <Card title="Second react app" content="Not that hard, sometimes tricky, but not hard" buttonType="primary" buttonText="Click me"/>
        <Card title="Third react app" content="Not that hard, sometimes tricky, but not hard" buttonType="accent" buttonText="Click me"/>
      </div>
  );
}

export default App;