import './card.css'

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addCard, decreaseCard, deleteCard, getTotals, getallCard, increaseCard } from '../../store/cardSlice';

import { BiChevronLeft } from 'react-icons/bi'
import { BiChevronRight } from 'react-icons/bi'

import { shop } from './data.js'

const CardComponent = () => {
  const [pay, setPay] = useState(false)
  const card = useSelector((state) => state.card)
  const dispatch = useDispatch()

  useEffect(() => {
    const handleget = async () => {
      const res = await fetch('https://bodybuild-api.cyclic.cloud/card', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          "Access-Control-Allow-Origin" : "*", 
          "Access-Control-Allow-Credentials" : true,
          "Access-Control-Expose-Headers": "*",
          "Access-Control-Allow-Methods": "*" 
        }
      })
      const response = await res.json()
      dispatch(getallCard(response))
    }
    handleget()
  }, [])

  const handleDelete = async (product) => {
    await fetch('https://bodybuild-api.cyclic.cloud/card/' + product._id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true,
        "Access-Control-Expose-Headers": "*",
        "Access-Control-Allow-Methods": "*" 
      }
    })
    dispatch(deleteCard(product))
  }

  
  const handleAdd = async (product) => {
    if(card.cardItems.find((item) => item._id == product._id )) {
      const item = card.cardItems.find((item) => item._id == product._id)
      if(item.quantity < 5) {
        dispatch(addCard(product))
        await fetch('https://bodybuild-api.cyclic.cloud/card', {
          method: 'POST',
          body: JSON.stringify(product),
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Access-Control-Allow-Origin" : "*", 
            "Access-Control-Allow-Credentials" : true,
            "Access-Control-Expose-Headers": "*",
            "Access-Control-Allow-Methods": "*" 
          }
        })
      }
    }else {
      dispatch(addCard(product))
      await fetch('https://bodybuild-api.cyclic.cloud/card', {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          "Access-Control-Allow-Origin" : "*", 
          "Access-Control-Allow-Credentials" : true,
          "Access-Control-Expose-Headers": "*",
          "Access-Control-Allow-Methods": "*" 
        }
      })
    }
  }
  
  const handleDecrease = async (product) => {
    console.log( product.quantity)
    let value = product.quantity
    if(value > 1) {
      value = value - 1 
    }
    dispatch(decreaseCard(product))
    await fetch('https://bodybuild-api.cyclic.cloud/card/' + product._id, {
      method: 'PATCH',
      body: JSON.stringify({"quantity" : value}),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true,
        "Access-Control-Expose-Headers": "*",
        "Access-Control-Allow-Methods": "*" 
      }
    })
  }
  
  const handleIncrease = async (product) => {
    let value = product.quantity
    if(value < 5) {
      value = value + 1 
    }
    dispatch(increaseCard(product))
    await fetch('https://bodybuild-api.cyclic.cloud/card/' + product._id, {
      method: 'PATCH',
      body: JSON.stringify({"quantity" : value}),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true,
        "Access-Control-Expose-Headers": "*",
        "Access-Control-Allow-Methods": "*" 
      }
    })
  }

  const handlePrice = (price) => {
    price = Math.floor(price * 100) / 100;
    return price.toFixed(2)
  }

  useEffect(() => {
    dispatch(getTotals())
  }, [card, dispatch])

  const handlePay = () => {
    setPay(!pay)
  }

  return (
      <section id='header' className='shoppingcard'>
        <div className="shoppingcard-container">
          <div className="shoppingcard__content-container">
            {card.cardItems &&
              card.cardItems.map((product) => {
              return (
                <div key={product._id} className="shoppingcard-content">
                    <div className='shoppingcard-top'>
                      <h1>Shopping Cart</h1>
                      <div><small>price</small></div>
                    </div>
                    <div className="shoppingcard-body">
                      <div className="shoppingcard-img">
                        <img src={product.image} alt="" />
                      </div>
                      <div className="shoppingcard-details">
                        <div className='top-details'>
                          <h3>{product.title}</h3>
                          <h3>{product.price}$</h3>
                        </div>
                        <p>{product.dis}</p>
                        <div className="middle-details1">
                          <h4>{product.size && `size: ${product.size}`}</h4>
                          <h4>{product.color && `color: ${product.color}`}</h4>
                        </div>
                        <div className='middle-details2'>
                          <div className='quantity'>
                            {
                              product.size &&
                              <>
                                <button onClick={() => handleDecrease(product)} className='quantity-btn1'><BiChevronLeft/></button>
                                <button onClick={() => handleIncrease(product)} className='quantity-btn2'><BiChevronRight/></button> 
                              </>
                            }
                            <h4 className='h4-det'>Qty: {product.quantity}</h4>
                          </div>
                          <p>{product.limitations}</p>
                          <h5 onClick={() => handleDelete(product)}>Delete</h5>
                        </div>
                      </div>
                    </div>
                    <div className="shoppingcard-bottom">
                    <h3>Subtotal ({product.quantity} item{product.quantity > 1 && 's'})
                      : {handlePrice(product.quantity * product.price)}$</h3>
                    </div>
                </div>
              )
            })}
          </div>
          <div className="right-shoppingcard">
            <div className="pricehandler-content"> 
              <div className="pricehandler-top">
                <h3>Subtotal ({card.cardTotalQuantity} item{card.cardTotalQuantity > 1 && 's'}): {card.cardTotalPrice}$</h3>
              </div>
              <button>proceed to checkout({card.cardTotalQuantity} item{card.cardTotalQuantity > 1 && 's'})</button>       
            </div>
            <h3>Check our Suggested Products</h3>
            {shop.map((product) => {
              return (         
              <div key={product._id} className="suggestions">          
                <img src={product.image} alt="" />            
                <div className="suggestions-text">           
                  <h3>{product.title}</h3>           
                  <p>{product.dis}</p>           
                  <h4>{product.price}$</h4>           
                  <button onClick={() => handleAdd(product)}>Add to Cart</button>            
                </div>           
              </div>
              )
            })}
          </div>
        </div>
      </section>
  )  
}

export default CardComponent