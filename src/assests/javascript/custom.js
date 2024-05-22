export const submitFormData = (formData, setData, data, imageFile, setFormData) => {
    !formData.firstName ? console.log('first name is requried') :
        !formData.lastName ? console.log('last name is requried') :
            !formData.email ? console.log('e-mail is requried') :
                !formData.imageValue ? console.log('image is required') :

                    setFormData({
                        ...formData,
                        imageValue: imageFile
                    })

    setData([...data, formData ])

    // setFormData({
    //     ...formData,
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     imageValue: null
    // }
    // )

}
export const deleteValue = (indexValue, data, setData) => {
    const deleteData = data?.filter((value, index) => index !== indexValue)
    setData(deleteData)

}

export const update = (i, value, setEditValue, setFormData, setIndex, data, formData) => {
    setEditValue(true)
    setIndex(i)

    setFormData({
        ...formData,
        firstName: value.firstName,
        lastName: value.lastName,
        email: value.email
    })
}

export const updateinfo = (data, setData, setEditValue, setFormData, index, formData,setImageFile, imageFile) => {
    const updatedData = data.map((item, idx) => {
        if (idx === index) {
            return {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email

            };
        }
        return item;
    });

    setData(updatedData);
    setEditValue(false);
    setFormData({ firstName: '', lastName: '', email: '', imageValue: null });
    setImageFile(null)

};


export const uploadImage = (e, setImageFile) => {

    const file = e.target.files[0]
    if (file) {
        setImageFile(file)
    }
}




    
   