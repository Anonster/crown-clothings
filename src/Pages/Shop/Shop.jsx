import React, { useEffect } from "react";

import { Route } from "react-router-dom";

import CollectionsOverviewContainer from "../../Components/CollectionOverview/CollectionOverviewContainer";
import CollectionPageContainer from "../Collection/CollectionContainer";
import { fetchCollectionStartAsync } from "../../redux/Shop/shop-actions";
import { connect } from "react-redux";

const Shop = ({ fetchCollectionStartAsync }) => {
  useEffect(() => {
    fetchCollectionStartAsync();
  }, [fetchCollectionStartAsync]);
  return (
    <div>
      <Route exact path='/shop' component={CollectionsOverviewContainer} />
      <Route path='/shop/:id' component={CollectionPageContainer} />
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
});
export default connect(null, mapDispatchToProps)(Shop);
