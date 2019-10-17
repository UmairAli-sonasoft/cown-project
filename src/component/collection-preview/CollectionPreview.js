import React from 'react';
import './collection-preview.styles.scss'
import CollectionItem from '../../component/collection-Item/CollectionItem';

export default function CollectionPreview({ items, title }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items.filter((item, index) => index < 4).map( item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
