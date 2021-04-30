import React, { useEffect } from "react";

import { Route } from "react-router-dom";

import CollectionsOverviewContainer from "../../Components/CollectionOverview/CollectionOverviewContainer";
import CollectionPageContainer from "../Collection/CollectionContainer";
import { fetchCollectionStart } from "../../redux/Shop/shop-actions";
import { connect } from "react-redux";

const Shop = ({ fetchCollectionStart }) => {
  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart]);
  return (
    <div>
      <Route exact path='/shop' component={CollectionsOverviewContainer} />
      <Route path='/shop/:id' component={CollectionPageContainer} />
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
});
export default connect(null, mapDispatchToProps)(Shop);
