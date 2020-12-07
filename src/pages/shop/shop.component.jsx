import { Component } from "react";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import SHOP_DATA from "../../data/shop.data";

class ShopPage extends Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...collectionProps }) => (
          <CollectionPreview key={id} {...collectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
