// External
import React from 'react';
import { useQuery } from '@apollo/react-hooks';

// Components
import LoadingSpinner from '../loading-spinner';
import ItemPreview from './item-preview';
import itemPreviewQueries from './item-queries';

// Styles
import { Collection, CollectionHeader } from './styles/item-preview-collection.styles';

function ItemPreviewCollection({ header, type }) {
  const { data, error, loading } = useQuery(itemPreviewQueries[type], {
    variables: { first: 4 },
  });

  if (loading) return <LoadingSpinner />;

  if (error) {
    return null;
  }

  return (
    <>
      <CollectionHeader>{header}</CollectionHeader>
      <Collection>
        {data.items.map(item => (
          <ItemPreview key={item.title} item={item} />
        ))}
      </Collection>
    </>
  );
}

export default ItemPreviewCollection;
