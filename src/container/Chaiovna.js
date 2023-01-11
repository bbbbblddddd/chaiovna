import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "../components/HomePage";
import Products from "../components/Products";
import Basket from "../components/Basket";
import NavBar from "../components/NavBar";




const Chaiovna = () => {

    const [basketItems, setBasketItems] = useState([]);


    let TeaProducts = [
        { name: "Earl Gray", price: 5, image: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Earl_Grey_Tea.jpg" },
        { name: "Darjeeling", price: 10, image: "https://upload.wikimedia.org/wikipedia/commons/5/54/Loose_leaf_darjeeling_tea_twinings.jpg" },
        { name: "Roobios", price: 15, image: "https://upload.wikimedia.org/wikipedia/commons/4/46/Rooibos_geschnitten.jpg" },
        { name: "Tennents", price: 0.80, image: "https://upload.wikimedia.org/wikipedia/commons/0/09/Tennent%27s_%2829398635824%29.jpg"}
    ];

    

    const onItemClick = function (product) {
        const toBeAddedToBasket = [...basketItems]
        toBeAddedToBasket.push(product)
        setBasketItems(toBeAddedToBasket)

    }






    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={< HomePage />} />
                <Route path="/products" element={< Products TeaProducts={TeaProducts} onItemClick={onItemClick} />} />
                <Route path="/basket" element={< Basket  basketItems={basketItems} />} />
                {/* <Route path="/choices/:choice" element={< Choice />} /> */}
                {/* <Route path="*" element={< ErrorPage />} /> */}
            </ Routes>
        </Router>


    )

}

export default Chaiovna;