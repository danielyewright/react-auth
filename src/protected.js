import React from 'react';
import authGuard from './auth-guard';
import Navbar from './navbar';

class ProtectedPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container-fluid pt-3">
          <p className="lead text-center mt-5 pt-5">This page is protected. You will only be able to view it if you're logged in :)</p>
        </div>
      </div>
    )
  }
}

export default authGuard(ProtectedPage);
