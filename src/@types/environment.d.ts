declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_MAPBOX_ENV: string;
      REACT_APP_GRAPHQL_ENDPOINT: string;
      NODE_ENV: 'development' | 'production';
    }
  }
}

export {}
