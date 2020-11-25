import axios from 'axios'
import React, { useState } from 'react'

const AddNewItem = () => {

    const [itemInfo, setItemInfo] = useState({
        name: '',
       description: '',
        price: '',
       imgUrl: '',
    })

    const submitHandler = (e) => {
        e.preventDefault()

        const data = {
            name: itemInfo.name,
            description: itemInfo.description,
            price: itemInfo.price,
        }

        // const data1 = {
        //     imgUrl: itemInfo.imgUrl
        // }

        let formData = new FormData();

        formData.append("file", itemInfo.imgUrl);
    
        axios
            .post(`/api/img_data`, formData)
            .then (res => {
                console.log(res)
            })
            .catch(err => console.log(err))
     
    }



    return (
        <>
        <form onSubmit={submitHandler} >
            <input type='text' placeholder='name' name='name' onChange={(e) => {setItemInfo({...itemInfo, name: e.target.value})}}/>
            <input type='text' placeholder='name' name='description' onChange={(e) => {setItemInfo({...itemInfo, description: e.target.value})}}/>
            <input type='number' placeholder='name' name='price' onChange={(e) => {setItemInfo({...itemInfo, price: e.target.value})}}/>
            <input type='file' name='imgUrl' oonChange={(e) => {setItemInfo({...itemInfo,imgUrl: e.target.value})}} />
            </form>
        </>
    )
}

export default AddNewItem
