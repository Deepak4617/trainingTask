import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const ProtectedRoute = ({ Component }) => {

  const navigate = useNavigate()

  const getStorageData = localStorage.getItem('userData')
  const isLoggedIn = Boolean(getStorageData)

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/')
      
    }
  },[])


  return (<Component />)
};