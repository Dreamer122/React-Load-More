import React, { useState } from 'react';
import ProductItems from "./Product.json";

const Load_More_Btn = () => {
    const [show, setShow] = useState(4); 

    const handleLoadMore = () => {
        setShow(prevShow => prevShow+4); 
    };

return(
  <>
  <h2 className='text-center my-4 '>  Load More  Button </h2>
    <div className="container mb-5">
  <div className="row gy-4" >
    {
        ProductItems.slice(0, show).map((item,i)=>{
            return (
                <div className="col-md-3 col-sm-6 item " key={i}>
                <div className="card item-card card-block p-3">
                 
                  <img
                    src={item.img}
                    alt="Photo of sunset"
                  />
                  <h5 className="item-card-title mt-3 mb-3">
                  {item.title}
                  </h5>
                  <p className="card-text">
                    This is a company that builds websites, web apps and e-commerce
                    solutions.
                  </p>
                </div>
              </div>
            )
        })
    }
  
  <div className='d-flex justify-content-center my-5'>
                <button className='btn btn-danger' onClick={handleLoadMore}>Load More...</button>
             </div>
  </div>
</div>
</>

)
};

export default Load_More_Btn;
