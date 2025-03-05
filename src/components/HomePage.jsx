import React from 'react';
import Dashboard from './Dashboard';
import VisitScheduler from './VisitScheduler';

function HomePage({ budgets, customers, visits, setVisits }) {
  return (
    <div className="home-page">
      <Dashboard budgets={budgets} customers={customers} visits={visits} />
      <VisitScheduler visits={visits} setVisits={setVisits} onVisitAdded={() => {
        // This will be called after a visit is added
        console.log("Visit added, updating dashboard...");
      }} />
    </div>
  );
}

export default HomePage;
