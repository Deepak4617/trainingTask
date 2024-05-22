import { Routes, Route } from 'react-router-dom'
import { ProductDetails } from '../components/fetchData'
import  Products  from '../components/allProduct'
import { ProtectedRoute } from '../pages/protectedRoute'
import Home from '../pages/home'
import Blog from '../pages/blog'
import Contact from '../pages/contact'
import { Login } from '../pages/loginPage'
import Cart from '../pages/cart'
import ProductWait from '../components/lazyLoad'
import Product from '../components/products'
import TeamNotes from '../components/teamNotes'


export const AppRoutes = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/home' element={<ProtectedRoute Component={Home}></ProtectedRoute>} />
        <Route path='/blog' element={<ProtectedRoute Component={Blog}></ProtectedRoute>} />
        <Route path='/contact' element={<ProtectedRoute Component={Contact}></ProtectedRoute>} />
        <Route path='/Login' element={<Login />} />
        <Route path='/product-detail/:id' element={<ProtectedRoute Component={ProductDetails}></ProtectedRoute>} />
        <Route path='/cart' element={<ProtectedRoute Component={Cart}></ProtectedRoute>} />

      </Routes>
      {/* <TeamNotes/> */}
      {/* <Product/> */}
      {/* <ProductWait/> */}
      



    </>
  )
}