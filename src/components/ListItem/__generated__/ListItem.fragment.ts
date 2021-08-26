import * as Types from '../../../__generated__/types';

import { DocumentNode } from 'graphql';
export type ListItemAuthor = { __typename: 'Author', id: number, firstName?: Types.Maybe<string>, lastName?: Types.Maybe<string>, posts: Array<{ __typename: 'Post', id: number, title: string }> };

export const ListItemAuthor = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ListItemAuthor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode;