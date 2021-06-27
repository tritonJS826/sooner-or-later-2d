import { generatePath, RouteComponentProps, ExtractRouteParams } from 'react-router';

// eslint-disable-next-line no-unused-vars
export type RouteRenderer<Params> = (props: RouteComponentProps<Params>) => React.ReactNode;

export interface PageMetaConfig<
    PageObject extends unknown = void,
    PagePathTemplate extends string = string,
    PagePathParameters extends { [K : string]: string | undefined } = ExtractRouteParams<PagePathTemplate, string>,
> {
        path: PagePathTemplate;

        render: RouteRenderer<PagePathParameters>;

        // eslint-disable-next-line no-unused-vars
        renderParameters?: (value: PageObject) => PagePathParameters;
}

export type PageRouteCollection = {
  homePage: PageMeta<void>,
  [K: string]: PageMeta<any>,
}

export default class PageMeta<T extends unknown, PathTemplate extends string = string> {
    private readonly config: PageMetaConfig<T, PathTemplate>;

    constructor(config: PageMetaConfig<T, PathTemplate>) {
      this.config = config;
    }

    get path(): string {
      return this.config.path;
    }

    toUrl(object?: T): string {
      const params = object != null ? this.config.renderParameters!(object) : {};

      return this.renderUrl(params);
    }

    render(props: RouteComponentProps): React.ReactNode {
      return this.config.render(props);
    }

    renderUrl(params: ExtractRouteParams<PathTemplate>) {
      return generatePath(this.config.path, params);
    }
}
