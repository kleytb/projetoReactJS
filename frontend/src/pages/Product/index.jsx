import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { detailsProducts } from "../../actions/productActions";
import LoadingBox from "../../components/LoadingBox";
import MessageBox from "../../components/MessageBox";
import Rating from "../../components/Rating";



export default function ProductScreen(props){
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const [qtd, setQtd] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() =>{
        dispatch(detailsProducts(productId ));
    }, [dispatch, productId] );
    const addToCartHandler = () =>{
        props.history.push(`/cart/${productId}?qtd=${qtd}`);
    }
   
    return(
        <div>
        
        {
          loading? ( <LoadingBox></LoadingBox>) :error? (<MessageBox variant="danger">{error}</MessageBox>) :
          (
          <div>
            <Link to='/'>Voltar para Home</Link>
            <div className='row top'>
                <div className='col-2'>
                    <img className='large' src={product.imagem} alt={product.name}></img>

                </div>
                <div className='col-1'>
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                        </li>
                        <li>
                            Preço : R${product.price}
                        </li>
                        <li>
                            <p>Descrição: {product.description}</p>
                        </li>
                    </ul>
                </div>
                <div className='col-1'>
                    <div className='card card-body'>
                        <ul>
                            <li>
                                <div className='row'>
                                    <div>Preço</div>
                                    <div className='price'>R${product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className='row'>
                                    <div>Status</div>
                                    <div>
                                        {product.countInStock>0? <span className='sucess'>Em Estoque</span>:<span className='error'>Produto Não Disponível</span>}
                                    </div>
                                </div>
                            </li>
                            {
                                product.countInStock > 0 && (
                                    <>
                                    <li>
                                        <div className='row'>
                                            <div>Qtd</div>
                                            <div>
                                                <select value={qtd} onChange={e => setQtd(e.target.value)}>
                                                    {
                                                        [...Array(product.countInStock).keys()].map( x => (
                                                            <option key={x+1} value={x+1}>{x+1}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <button onClick={addToCartHandler} className='primary block'>Adicionar ao carrinho</button>
                                    </li> 
                                    </>
                                     
                                )
                            }
                            
                        </ul>
                    </div>

                </div>
            </div>
        </div>

          )}         
      </div>
        
    )
}