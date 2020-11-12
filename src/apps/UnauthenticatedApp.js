import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppTemplate from 'components/templates/AppTemplate';
import AboutPage from 'components/pages/AboutPage';
import ProjectsPage from 'components/pages/ProjectsPage';
import ProjectsItemPage from 'components/pages/ProjectsItemPage';


function UnauthenticatedApp() {
  return (
    <AppTemplate>
      <Switch>
        <Route exact path="/" component={AboutPage} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route exact path="/projects/:id" component={ProjectsItemPage} /> 
      </Switch>
    </AppTemplate>
  );
}

export default UnauthenticatedApp;
