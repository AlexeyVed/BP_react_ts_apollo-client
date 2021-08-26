import * as Types from '../../../__generated__/types';

import { ListItemAuthor } from '../../../components/ListItem/__generated__/ListItem.fragment';
import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type AuthorListVariables = Types.Exact<{ [key: string]: never; }>;


export type AuthorList = { __typename: 'Query', authors: Array<(
    { __typename: 'Author' }
    & ListItemAuthor
  )> };


export const AuthorListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AuthorList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ListItemAuthor"}}]}}]}},...ListItemAuthor.definitions]} as unknown as DocumentNode;

/**
 * __useAuthorList__
 *
 * To run a query within a React component, call `useAuthorList` and pass it any options that fit your needs.
 * When your component renders, `useAuthorList` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthorList({
 *   variables: {
 *   },
 * });
 */
export function useAuthorList(baseOptions?: Apollo.QueryHookOptions<AuthorList, AuthorListVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AuthorList, AuthorListVariables>(AuthorListDocument, options);
      }
export function useAuthorListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthorList, AuthorListVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AuthorList, AuthorListVariables>(AuthorListDocument, options);
        }
export type AuthorListHookResult = ReturnType<typeof useAuthorList>;
export type AuthorListLazyQueryHookResult = ReturnType<typeof useAuthorListLazyQuery>;
export type AuthorListQueryResult = Apollo.QueryResult<AuthorList, AuthorListVariables>;