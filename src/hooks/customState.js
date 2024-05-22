import React, { useState } from "react"

export const useCustomState = () => { 
    const [imageFile, setImageFile] = useState(null);

    return {
         imageFile, setImageFile
    }

}
export const useCustomData = () => {
    const [data, setData] = useState([]);
    return {
        data, setData

    }

}
export const useCustomObject = () => {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', imageValue: null });
    return {
        formData, setFormData
    }
}
export const useCustomValue = () => {
    const [editValue, setEditValue] = useState(false)
    const [index, setIndex] = useState(0)

    return {
        editValue,setEditValue,index,setIndex
    }
}

export const useCustomCartValue = () => {
    const [quantity, setQuantity] = useState(1);
    const [index, setIndex] = useState(null);
    const [type , setType] = useState(null);
    const [modalMessage,setModalMessage] = useState(null);

    return {
        quantity,setQuantity,index,setIndex,type,setType,modalMessage,setModalMessage
    }


}




