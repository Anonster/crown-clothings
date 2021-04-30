import React from "react";
import { connect } from "react-redux";
import Custombutton from "../Custombutton/Custombutton";
import { addItem } from "../../redux/Cart/cart-action";
import "./CollectionItem.scss";
const ComponentItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <Custombutton isInverted onClick={() => addItem(item)}>
        Add to Cart
      </Custombutton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ComponentItem);
