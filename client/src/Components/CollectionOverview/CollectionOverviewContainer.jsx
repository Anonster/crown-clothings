import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/Shop/shop-selector";
import WithSpinner from "../withSpinner/WithSpinner";
import CollectionsOverview from "./CollectionOverview";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
