import ProductItem from "./ProductItem";


const Basket = ({basketItems, onItemClick}) => {
    const basketItemsArray = basketItems.map((product) => {
        return <ProductItem product = {product} onItemClick={ onItemClick }/>
    });

    return (

    <li>
        {basketItemsArray}
    </li>
)

}




export default Basket;