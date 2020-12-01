import React, { useState } from 'react'
import axios from 'axios'

const AddNewItem = () => {

    // const [itemInfo, setItemInfo] = useState({
    //     name: '',
    //     description: '',
    //     price: 0,
    // })

    const [file, setFile] = useState(null)
    const [filename, setFilename] = useState('choose File')
    const [uploadedFile, setUploadedFile] = useState({})

    const fileSelectedHandler = (e) => {
        setFile(e.target.files[0])
        setFilename(e.target.files[0].name)
    }

    const uploadHandler = () => {

        const fd = new FormData()

        //image refers to  the backend
        fd.append('image', file)
        
        axios
            .post(`/uploadImage`, fd, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then (res => {
                console.log(res)
                const { fileName, filePath } = res.data
                setUploadedFile({ fileName, filePath})
            })
            .catch (err => 
                console.log(err.response.data.message, err))    }
    return (
        <>
      {/* <form onSubmit={submitHandler} > */}
           {/*    <input type='text' placeholder='name' name='name' onChange={(e) => {setItemInfo({...itemInfo, name: e.target.value})}}/>
            <input type='text' placeholder='name' name='description' onChange={(e) => {setItemInfo({...itemInfo, description: e.target.value})}}/>
            <input type='number' placeholder='name' name='price' onChange={(e) => {setItemInfo({...itemInfo, price: e.target.value})}}/> */}
            
            <input type='file' name='file' onChange={fileSelectedHandler} />
            <button onClick={uploadHandler} type='submit'> Upload </button>
            {/* </form> */}
        </>
    )
}

export default AddNewItem
