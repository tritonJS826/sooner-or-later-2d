import { Switch, Redirect, Route } from 'react-router-dom';
import PageMeta, { PageRouteCollection, RouteRenderer } from 'Kit/PageMeta';

export interface PageRouterProps {
    routes: PageRouteCollection;
    renderNotFound: RouteRenderer<any>;
}

export const PageRouter: React.FC<PageRouterProps> = (props: PageRouterProps) => {
  const { homePage } = props.routes;

  const redirectTo = (to: PageMeta<void> | string, fromPath?: string) => {
    const pathname = to instanceof PageMeta ? to.toUrl() : to;
    return <Redirect to={{ pathname, state: { fromPath } }} />;
  };

  const renderRoute = (route: PageMeta<any>) => (
    <Route
      key={route.path}
      render={(p) => route.render(p)}
    />
  );

  return (
    <Switch>
      {Object.keys(props.routes).map((it) => (renderRoute(props.routes[it])))}

      <Route exact path="/" render={() => redirectTo(homePage)} />

      <Route path="*" render={props.renderNotFound} />
    </Switch>
  );
};
