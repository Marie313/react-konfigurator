import shop from './Shop.jpg'

const Shop = () => {
    return (
        <div className="shopContent">
            <h2>Shop</h2>
            <div className='shopImg'>
                <img src ={shop} alt="Shop"/>
            </div>
        </div> 
    );
}
 
export default Shop;