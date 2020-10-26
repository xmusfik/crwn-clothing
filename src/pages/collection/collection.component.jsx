import React from 'react';
// import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
  const { name, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{name}</h2>
      <div className='items'>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapDispatchToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionID)(state),
});

export default connect(mapDispatchToProps)(CollectionPage);
