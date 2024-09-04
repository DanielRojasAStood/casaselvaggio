import { gql } from '@apollo/client';

export default function SingleExperiencia(props) {
  const { title, content } = props.data.nodeByUri;

  return (
    <>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}

SingleExperiencia.variables = ({ uri }) => {
  return { uri };
};

SingleExperiencia.query = gql`
  query GetMovieByUri($uri: String!) {
    nodeByUri(uri: $uri) {
      ... on NodeWithTitle {
        title
      }
      ... on NodeWithContentEditor {
        content
      }
    }
  }
`;