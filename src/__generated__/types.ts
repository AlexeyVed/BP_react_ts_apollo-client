export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateHobbyInput = {
  name: Scalars['String'];
};

export type CreatePersonInput = {
  hobbies: Array<Scalars['String']>;
  name: Scalars['String'];
};

export type Hobby = {
  __typename?: 'Hobby';
  _id: Scalars['String'];
  name: Scalars['String'];
};

export type ListHobbyInput = {
  _id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ListPersonInput = {
  _id?: Maybe<Scalars['String']>;
  hobbies?: Maybe<Array<Scalars['String']>>;
  name?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createHobby: Hobby;
  createPerson: Person;
  deleteHobby: Hobby;
  deletePerson: Person;
  updateHobby: Hobby;
  updatePerson: Person;
};


export type MutationcreateHobbyArgs = {
  payload: CreateHobbyInput;
};


export type MutationcreatePersonArgs = {
  payload: CreatePersonInput;
};


export type MutationdeleteHobbyArgs = {
  _id: Scalars['String'];
};


export type MutationdeletePersonArgs = {
  _id: Scalars['String'];
};


export type MutationupdateHobbyArgs = {
  payload: UpdateHobbyInput;
};


export type MutationupdatePersonArgs = {
  payload: UpdatePersonInput;
};

export type Person = {
  __typename?: 'Person';
  _id: Scalars['String'];
  hobbies: Array<Hobby>;
  name: Scalars['String'];
};


export type PersonhobbiesArgs = {
  populate: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  hobbies: Array<Hobby>;
  hobby: Hobby;
  person: Person;
  persons: Array<Person>;
};


export type QueryhobbiesArgs = {
  filters?: Maybe<ListHobbyInput>;
};


export type QueryhobbyArgs = {
  _id: Scalars['String'];
};


export type QuerypersonArgs = {
  _id: Scalars['String'];
};


export type QuerypersonsArgs = {
  filters?: Maybe<ListPersonInput>;
};

export type UpdateHobbyInput = {
  _id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type UpdatePersonInput = {
  _id: Scalars['String'];
  hobbies?: Maybe<Array<Scalars['String']>>;
  name?: Maybe<Scalars['String']>;
};
