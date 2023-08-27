import * as Types from '../types.d';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const NameDocument = gql`
    query Name {
  Page {
    characters {
      name {
        full
        native
      }
      image {
        medium
      }
      gender
      age
      siteUrl
    }
  }
}
    `;

/**
 * __useNameQuery__
 *
 * To run a query within a React component, call `useNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNameQuery({
 *   variables: {
 *   },
 * });
 */
export function useNameQuery(baseOptions?: Apollo.QueryHookOptions<Types.NameQuery, Types.NameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.NameQuery, Types.NameQueryVariables>(NameDocument, options);
      }
export function useNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.NameQuery, Types.NameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.NameQuery, Types.NameQueryVariables>(NameDocument, options);
        }
export type NameQueryHookResult = ReturnType<typeof useNameQuery>;
export type NameLazyQueryHookResult = ReturnType<typeof useNameLazyQuery>;
export type NameQueryResult = Apollo.QueryResult<Types.NameQuery, Types.NameQueryVariables>;