import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { getAllProducts } from "../../../app/services/productsServices";


export const DetailCart = () => {
  
    const[products,setProducts] = useState([]);
    useEffect (() =>{
        getAllProducts()
            .then((allProductsFormDB)=> setProducts(allProductsFormDB))
    },[])

    return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Category</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
       
         {products.length > 0 &&
           products.map((product, index)=> (
          <tr key= {index}> 
             <td>{product.id}</td>
             <td>{product.title}</td>
             <td>{product.categoty}</td>
             <td>{product.price}</td>
             </tr>
            ) )}
    
      </tbody>
    </Table>
  );
};
