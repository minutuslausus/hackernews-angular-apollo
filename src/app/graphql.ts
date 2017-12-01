import { Link } from './types';
import gpl from 'graphql-tag';

export const ALL_LINKS_QUERY = gpl`
  query AllLinksQuery {
    allLinks {
      id
      createdAt
      url
      description
    }
  }
  `;

export interface AllLinkQueryResponse {
  allLinks: Link[];
  loading: boolean;
}

export const CREATE_LINK_MUTATION = gpl`
  mutation CreateLinkMutation($description: String!, $url: String!) {
    createLink(
      description: $description,
      url: $url
    ) {
      id
      createdAt
      url
      description
    }
  }
`;

export interface CreateLinkMutationResponse {
  createLink: Link;
  loading: boolean;
}
