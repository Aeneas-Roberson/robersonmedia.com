// src/types/facebook.d.ts
declare global {
  interface Window {
    FB: {
      init: (params: {
        appId: string;
        cookie: boolean;
        xfbml: boolean;
        version: string;
      }) => void;
      login: (
        callback: (response: FacebookLoginResponse) => void,
        options?: { scope?: string }
      ) => void;
      logout: (callback: (response: any) => void) => void;
      api: (
        path: string,
        paramsOrCallback: FacebookApiParams | ((response: FacebookApiResponse) => void),
        callback?: (response: FacebookApiResponse) => void
      ) => void;
      getLoginStatus: (callback: (response: FacebookLoginResponse) => void) => void;
      AppEvents: {
        logPageView: () => void;
      };
    };
    fbAsyncInit: () => void;
  }

  interface FacebookLoginResponse {
    status: 'connected' | 'not_authorized' | 'unknown';
    authResponse?: {
      accessToken: string;
      expiresIn: number;
      signedRequest: string;
      userID: string;
    };
  }

  interface FacebookApiParams {
    fields?: string;
    [key: string]: any;
  }

  interface FacebookApiResponse {
    name?: string;
    email?: string;
    id?: string;
    picture?: {
      data?: {
        url?: string;
      };
    };
    error?: {
      message: string;
      type: string;
      code: number;
    };
  }
}

export {};