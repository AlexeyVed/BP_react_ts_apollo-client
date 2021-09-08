import * as Types from '../../../__generated__/types';

import { ListItemPerson } from '../../fragments/__generated__/PersonItem.fragment';
import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type PersonListVariables = Types.Exact<{ [key: string]: never; }>;


export type PersonList = { __typename: 'Query', persons: Array<(
    { __typename: 'Person' }
    & ListItemPerson
  )> };


export const PersonListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PersonList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"persons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ListItemPerson"}}]}}]}},...ListItemPerson.definitions]} as unknown as DocumentNode;

/**
 * __usePersonList__
 *
 * To run a query within a React component, call `usePersonList` and pass it any options that fit your needs.
 * When your component renders, `usePersonList` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePersonList({
 *   variables: {
 *   },
 * });
 */
export function usePersonList(baseOptions?: Apollo.QueryHookOptions<PersonList, PersonListVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PersonList, PersonListVariables>(PersonListDocument, options);
      }
export function usePersonListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PersonList, PersonListVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PersonList, PersonListVariables>(PersonListDocument, options);
        }
export type PersonListHookResult = ReturnType<typeof usePersonList>;
export type PersonListLazyQueryHookResult = ReturnType<typeof usePersonListLazyQuery>;
export type PersonListQueryResult = Apollo.QueryResult<PersonList, PersonListVariables>;