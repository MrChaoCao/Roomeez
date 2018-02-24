import React from 'react';
import ReactModal from 'react-modal';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Dashboard
        <a href="/survey">Take Survey</a>
      </div>
    );
  }
}

export default Dashboard;
