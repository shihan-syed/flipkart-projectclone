import React, { useState } from 'react'
import axios from "axios";

function Addproduct() {

  // eslint-disable-next-line react-hooks/rules-of-hooks

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [name11 , setProductname11] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [category , setCategory] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [description , setDescription] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [imageurl , setImageurl] = useState('');
  const [keywords , setKeywords] = useState('');
  const [rating , setRating] = useState(''); 
  const [maxprice , setMaxprice] = useState('');
  const [price , setPrice] = useState('');
  const [discount , setDiscount] = useState('');

 

  const addproducts22=(e)=>{
    e.preventDefault()
    axios.post(`http://localhost:4000/adddata`, {
        name11: name11,
        category: category,
        description: description,
        imageurl: imageurl,
        keywords: keywords,
        rating: rating,
        maxprice : maxprice,
        price: price,
        discount: discount
     

      })
      .then((res)=> {
        console.log(res)
      
        alert("Sucessfully Added");
      
  
      })
      .catch(function (error) {
        alert(error);
      });
  }
  return (
    <div className='homebody'>
        <div className='d-flex justify-content-center'>

          <div className='forms234'>
          <form onSubmit={addproducts22}>
      <div className="mb-5 text-center">
    <h4>Add Product</h4>
  </div>
  <div className="mb-3">
    <label  className="form-label">Name</label>
    <input required name="name11" value={name11} onChange={(e)=>setProductname11(e.target.value)} type="string" class="form-control"/>
  </div>
  <div className="mb-3">
    <label className="form-label">Category</label>
    <input required name="category" value={category} onChange={(e)=>setCategory(e.target.value)} type="string" class="form-control" />
  </div>
  <div className="mb-3">
  <label className="form-label">Description</label>
    <input required name="description" value={description} onChange={(e)=>setDescription(e.target.value)} type="string" class="form-control" />
  </div>
  <div className="mb-3">
    <label className="form-label">Imageurl</label>
    <input required name="imageurl" value={imageurl} onChange={(e)=>setImageurl(e.target.value)} type="string" class="form-control" />
  </div>
  <div className="mb-3">
    <label className="form-label">Keywords</label>
    <input required name="keywords" value={keywords} onChange={(e)=>setKeywords(e.target.value)} type="string" class="form-control" />
  </div>
  <div className="mb-3">
    <label className="form-label">Rating</label>
    <input required name="rating" value={rating} onChange={(e)=>setRating(e.target.value)} type="string" class="form-control" />
  </div>
  <div className="mb-3">
    <label className="form-label">Maxprice</label>
    <input required name="maxprice" value={maxprice} onChange={(e)=>setMaxprice(e.target.value)} type="string" class="form-control" />
  </div>
  <div className="mb-3">
    <label className="form-label">price</label>
    <input required name="price" value={price} onChange={(e)=>setPrice(e.target.value)} type="string" class="form-control" />
  </div>
  <div className="mb-3">
    <label className="form-label">discount</label>
    <input required name="discount" value={discount} onChange={(e)=>setDiscount(e.target.value)} type="string" class="form-control" />
  </div>
  <div className="d-grid">
  <button type="submit" class="btn btn-primary">Add Product</button>

  </div>
</form>
          </div>
            
        </div>

    </div>
  )
}

export default Addproduct;