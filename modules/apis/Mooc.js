// @flow

import fetch from 'node-fetch';

import type { QueryType } from '../Url.js';
import Url from '../Url.js';

export type ContextType = {
  authorization?: string,
  subdomain?: string,
};

type ApiVersionType = 'v1' | 'v2';

const DEFAULT_API_VERSION: ApiVersionType = 'v2';

/**
 * Documentation: <DOMAIN>/explorer
 */
export default class Mooc {
  static callApi(
    path: Array<string> = [],
    query: QueryType = {},
    context: ContextType = {},
    apiVersion?: ApiVersionType,
  ): Promise<Object> {
    if (!context.authorization) {
      throw new Error('Your authorization header is missing.');
    }

    if (!context.subdomain) {
      throw new Error('Your X-Subdomain header is missing');
    }

    const url =
      `https://${context.subdomain}.coorpacademy.com` +
      Mooc.getPath(path, apiVersion) +
      Url.buildParameters(query);
    const parameters = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: context.authorization,
      },
    };

    console.log('API call', url);

    return fetch(url, parameters).then(
      response =>
        response.headers.get('content-type').includes('application/json')
          ? response.json()
          : undefined,
    );
  }

  static disciplines(query?: QueryType, context: ContextType) {
    return Mooc.callApi(['disciplines'], query, context);
  }

  static chapters(ref: string, query?: QueryType, context: ContextType) {
    return Mooc.callApi(['chapters', ref], query, context);
  }

  static chapterSlides(ref: string, query?: QueryType, context: ContextType) {
    return Mooc.callApi(
      ['slides'],
      {
        ...query,
        conditions: JSON.stringify({ chapter_id: ref }),
      },
      context,
      'v1',
    );
  }

  static getPath(
    path: Array<string>,
    apiVersion?: ApiVersionType = DEFAULT_API_VERSION,
  ) {
    const basePath = ['api', apiVersion];

    return Url.buildPath(basePath.concat(path));
  }
}
