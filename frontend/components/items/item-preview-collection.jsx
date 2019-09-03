import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import LoadingSpinner from '../loading-spinner';
import ItemPreview from './item-preview';
import itemPreviewQueries from './item-queries';

function ItemPreviewCollection({ header, type }) {
  const { data, error, loading } = useQuery(itemPreviewQueries[type], {
    variables: { first: 4 },
  });

  if (loading) return <LoadingSpinner />;

  if (error) {
    console.log(error);
    return null;
  }

  return (
    <>
      <CollectionHeader>{header}</CollectionHeader>
      <Collection>
        {data.items.map(item => (
          <ItemPreview item={item} />
        ))}
      </Collection>
    </>
  );
}

const Collection = styled.div`
  display: flex;
  padding-bottom: 30px;
  width: 100%;
`;

const CollectionHeader = styled.h2`
  letter-spacing: 1.2px;

  text-align: center;
  text-transform: uppercase;
`;

export default ItemPreviewCollection;
