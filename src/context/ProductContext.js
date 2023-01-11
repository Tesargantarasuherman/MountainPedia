import axios  from 'axios';
import React from 'react'
import { useEffect,useReducer } from 'react';
import { useState } from 'react';
import { createContext } from 'react'

function ProductContext() {
    const ProdContext = createContext();

    const ProductProvider =(props)=>{
        const [product, setProduct] = useState([])

        const getAllProduct =()=>{
            axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
                setProduct(res.data);
            })
        }

        const productState = { product,getAllProduct }

        return (
            <ProdContext.Provider value={productState}>
                {props.children}
            </ProdContext.Provider>
        )
    }

  return {
    ProdContext,ProductProvider
  }
  
}

export default ProductContext()