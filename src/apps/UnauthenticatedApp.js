import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppTemplate from 'components/templates/AppTemplate';
import HomePage from 'components/pages/HomePage';
import AboutPage from 'components/pages/AboutPage';
import ProjectsPage from 'components/pages/ProjectsPage';
import ProjectsItemPage from 'components/pages/ProjectsItemPage';
import BlogPage from 'components/pages/BlogPage';
import BlogPostPage from 'components/pages/BlogPostPage';


function UnauthenticatedApp() {
  return (
    <AppTemplate>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/o-mnie" component={AboutPage} />
        <Route exact path="/projekty" component={ProjectsPage} />
        <Route exact path="/projekty/:id" component={ProjectsItemPage} /> 
        <Route exact path="/blog" component={BlogPage} /> 
        <Route exact path="/blog/:id" component={BlogPostPage} /> 
      </Switch>
    </AppTemplate>
  );
}

export default UnauthenticatedApp;
