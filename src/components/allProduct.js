import React, { useReducer, useEffect, useRef, useState, Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import * as images from '../assests/image'
import { Carousel } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../Service/api/fetchProducts';
import { useCustomSelector } from '../Service/allSelector/customSelector';
import { combineSlices } from '@reduxjs/toolkit';
import ProductLoading from './lazyLoad';


const Products = () => {
    const { reducerSlice } = useCustomSelector();
    const dispatch = useDispatch()
    
    const Product = lazy(() =>  wait(300).then(()=> import('./products')));

    const wait = (time)=>{
        return new Promise(resolve => {
            setTimeout(() => {
               resolve() 
            }, time);
            
        })
    }

    useEffect(()=>{
        dispatch(fetchProduct());
    },[])

    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    {reducerSlice?.isLoading && (
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    )}
                    <div className='container mt-4'>
                        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <Carousel>
                                    <Carousel.Item interval={1000}>
                                        <div className="carousel-item active">
                                            <img src={images.nature1} className="d-block w-100" alt="..." />
                                        </div>
                                    </Carousel.Item>
                                    <div className="carousel-item">
                                        <img src={images.nature2} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={images.nature3} className="d-block w-100" alt="..." />
                                    </div>
                                </Carousel>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                        <Suspense fallback={reducerSlice?.isLoading ? null : <ProductLoading/>  } >
                              <Product /> 
    
                    </Suspense>
                    
                </div>
            </div>
        </>
    );
};




export default Products;
