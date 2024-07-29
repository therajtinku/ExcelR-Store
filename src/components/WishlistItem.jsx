import './WishlistItem.jsx';

const WishlistItem = ({item}) =>{
    return(
        <div className="wishlist-item">
      <h2>{item.name}</h2>
      <p>{item.price}</p>
    </div>
    );
};
export default WishlistItem;
