/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateClothes = /* GraphQL */ `
  subscription OnCreateClothes($filter: ModelSubscriptionClothesFilterInput) {
    onCreateClothes(filter: $filter) {
      id
      type
      notes
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateClothes = /* GraphQL */ `
  subscription OnUpdateClothes($filter: ModelSubscriptionClothesFilterInput) {
    onUpdateClothes(filter: $filter) {
      id
      type
      notes
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteClothes = /* GraphQL */ `
  subscription OnDeleteClothes($filter: ModelSubscriptionClothesFilterInput) {
    onDeleteClothes(filter: $filter) {
      id
      type
      notes
      createdAt
      updatedAt
    }
  }
`;
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($filter: ModelSubscriptionNoteFilterInput) {
    onCreateNote(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($filter: ModelSubscriptionNoteFilterInput) {
    onUpdateNote(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($filter: ModelSubscriptionNoteFilterInput) {
    onDeleteNote(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
