import React from 'react';

export default function CartScreen(props){
    const productId = props.match.params.id;
    const qtd = props.location.search? Number(props.location.search.split('=')[1]): 1;
    return(
        <div>
            <h1>Carrinho</h1>
            <p>ADD TO CART: ProductID: {productId} Qtd: {qtd}</p>
        </div>
    )
}