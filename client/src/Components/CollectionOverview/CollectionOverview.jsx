import React from "react";
import { selectCollectionsForPreview } from "../../redux/Shop/shop-selector";
import "./CollectionOverview.scss";
import CollectionPreview from "../CollectionPreview/CollectionPreview";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

const CollectionOverview = ({ collections }) => {
  return (
    <div>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
