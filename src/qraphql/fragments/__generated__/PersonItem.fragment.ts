import * as Types from '../../../__generated__/types';

import { DocumentNode } from 'graphql';
export type ListItemPerson = { __typename: 'Person', _id: string, name: string, hobbies: Array<{ __typename: 'Hobby', _id: string, name: string }> };

export const ListItemPerson = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ListItemPerson"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"hobbies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"populate"},"value":{"kind":"BooleanValue","value":true}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode;