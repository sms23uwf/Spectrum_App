import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import DashboardPage from '../components/DashboardPage';
import FileSelectionDashboard from '../components/FileSelectionDashboard';
import MissionDataDashboard from '../components/MissionDataDashboard';
import SimulationsDashboard from '../components/SimulationsDashboard';
import ToolsDashboard from '../components/ToolsDashboard';
import AboutPage from '../components/AboutPage';
import Header from '../components/Header';

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/fileSelectionDashboard" component={FileSelectionDashboard} />
        <Route path="/missionDataDashboard" component={MissionDataDashboard} />
        <Route path="/simulationsDashboard" component={SimulationsDashboard} />
        <Route path="/toolsDashboard" component={ToolsDashboard} />
        <Route path="/aboutPage" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
