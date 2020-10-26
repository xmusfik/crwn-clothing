import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import './collection-overview.styles.scss';
import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionOverview = ({ collections }) => (
  <div className='collection-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
    ))}
  </div>
);

const mapDispatchToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapDispatchToProps)(CollectionOverview);
