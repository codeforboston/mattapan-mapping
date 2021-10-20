declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_MAPBOX_ENV: string;
      NODE_ENV: 'development' | 'production';
    }
  }
}

export {}
