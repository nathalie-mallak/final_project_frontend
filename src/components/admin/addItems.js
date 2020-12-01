import React, { useState } from 'react'
import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'

// TO DO:
// ADD FILEs
// add snackBar 

function rand() {
  return Math.round(Math.random() * 20) - 10
}

function getModalStyle() {
  const top = 50 + rand()
  const left = 50 + rand()

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const SimpleModal = () => {
    const classes = useStyles()
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = useState(getModalStyle)
    const [flowerOpen, setFlowerOpen] = useState(false)
    const [basketOpen, setBasketOpen] = useState(false)
    const [bouquetOpen, setBouquetOpen] = useState(false)

    const [file, setFile] = useState(null)
    const [filename, setFilename] = useState('choose File')
    const [uploadedFile, setUploadedFile] = useState({})

    const [itemInfo, setItemInfo] = useState({
        name: '',
        description: '',
        price: '',
        color: '',
        type: ''
    })

    const flowerOpenHandler = () => {
        setFlowerOpen(true)
    }
    
    const basketOpenHandler = () => {
        setBasketOpen(true)
    }
    
    const bouquetOpenHandler = () => {
        setBouquetOpen(true)
    }

    const handleClose = () => {
        setFlowerOpen(false)
        setBasketOpen(false)
        setBouquetOpen(false)
    }

    const flowerHandler = (e) => {
        e.preventDefault()
        setFlowerOpen(false)

		const data = {
			name: itemInfo.name,
			description: itemInfo.description,
			price: itemInfo.price,
			color: itemInfo.color,
			type: 'flower'
	    }

        axios
            .post('/api/items/newFlower', data)
            .then(res => {
                console.log(res)
                alert('created successfully')
            })
            .catch(err => console.log(err))
    } 
    
    const bouquetHandler = (e) => {
        e.preventDefault()
        setBouquetOpen(false)

		const data = {
			name: itemInfo.name,
			price: itemInfo.price,
			type: itemInfo.type
	    }

        axios
            .post('/api/occasions/', data)
            .then(res => {
                console.log(res)
                alert('created successfully')
            })
            .catch(err => console.log(err))
    } 
    
    const basketHandler = (e) => {
        e.preventDefault()
        setBasketOpen(false)

		const data = {
			name: itemInfo.name,
			description: itemInfo.description,
			price: itemInfo.price,
			type: 'basket'
	    }

        axios
            .post('/api/items/newBasket', data)
            .then(res => {
                console.log(res)
                alert('created successfully')
            })
            .catch(err => console.log(err))
    }

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
                console.log(err.response.data.message, err))    
    }

    return (
        <>
            <button 
                type='button' onClick={flowerOpenHandler}
                style={{backgroundColor: 'rgb(243, 162, 176)', color: '#63393c'}}>
                New Flower
            </button>
 
            <Modal
                open={flowerOpen}
                onClose={handleClose}
                aria-labelledby='simple-modal-title'
                aria-describedby='simple-modal-description'>
                <div style={modalStyle} className={classes.paper}>

                    <TextField className={classes.textField} label='Item Name' type='text' name='name' onChange={(e) => {setItemInfo({...itemInfo, name: e.target.value})}} variant='outlined' value={itemInfo.name} required/> 

                    <TextField className={classes.textField} label='Color' select name='color' onChange={(e) => {setItemInfo({...itemInfo, color: e.target.value})}} value={itemInfo.color} variant='outlined' required> 
                        <MenuItem value={1}> Pink </MenuItem>
                        <MenuItem value={2}> Red </MenuItem> 
                        <MenuItem value={3}> White </MenuItem> 
                        <MenuItem value={4}> Yellow </MenuItem> 
                        <MenuItem value={5}> Orange </MenuItem> 
                        <MenuItem value={6}> Purple </MenuItem> 
                    </TextField>

                    <TextField className={classes.textField} label='Description' type='text' name='description' onChange={(e) => {setItemInfo({...itemInfo, description: e.target.value})}} variant='outlined' value={itemInfo.description} required/> 
                    
                    <TextField className={classes.textField} label='Price' type='number' name='price' onChange={(e) => {setItemInfo({...itemInfo, price: e.target.value})}} variant='outlined' value= {itemInfo.price} required/>

                    <input type='file' name='image' onChange={fileSelectedHandler} />
                    <button type='submit' onClick={uploadHandler}> upload </button>
                    
                    <button 
                        onClick={flowerHandler} 
                        type='submit'
                        style={{backgroundColor: 'rgb(243, 162, 176)', color: '#63393c'}}
                        disabled= {itemInfo.price === '' || itemInfo.name === '' || itemInfo.description === '' || file === ''}
                    >
                        Add Flower
                    </button>
                </div>
            </Modal>
                       
            <button 
                type='button' 
                onClick={basketOpenHandler}
                style={{backgroundColor: 'rgb(243, 162, 176)', color: '#63393c'}}>
                    New Basket
            </button>

            <Modal
                open={basketOpen}
                onClose={handleClose}
                aria-labelledby='simple-modal-title'
                aria-describedby='simple-modal-description'>
                <div style={modalStyle} className={classes.paper}>

                    <TextField className={classes.textField} label='Item Name' type='text' name='name' onChange={(e) => {setItemInfo({...itemInfo, name: e.target.value})}} variant='outlined' value={itemInfo.name} required/> 

                    <TextField className={classes.textField} label='Description' type='text' name='description' onChange={(e) => {setItemInfo({...itemInfo, description: e.target.value})}} variant='outlined' value={itemInfo.description} required/> 
                    
                    <TextField className={classes.textField} label='Price' type='number' name='price' onChange={(e) => {setItemInfo({...itemInfo, price: e.target.value})}} variant='outlined' value= {itemInfo.price} required/>

                    <input type='file' name='image' onChange={fileSelectedHandler} />
                    <button type='submit' onClick={uploadHandler}> upload </button>

                    <button 
                        onClick={basketHandler} 
                        type='submit'
                        disabled= {itemInfo.price === '' || itemInfo.name === '' || itemInfo.description === '' || file === ''}
                        style={{backgroundColor: 'rgb(243, 162, 176)', color: '#63393c'}}
                    >
                        Add basket
                    </button> 
                </div>
            </Modal>
            
            <button 
                type='button' 
                onClick={bouquetOpenHandler}
                style={{backgroundColor: 'rgb(243, 162, 176)', color: '#63393c'}}>
                New Bouquet
            </button>

            <Modal
                open={bouquetOpen}
                onClose={handleClose}
                aria-labelledby='simple-modal-title'
                aria-describedby='simple-modal-description'>
                <div style={modalStyle} className={classes.paper}>

                    <TextField className={classes.textField} label='Type' select name='type' onChange={(e) => {setItemInfo({...itemInfo, type: e.target.value})}} value={itemInfo.type} variant='outlined' required> 
                            <MenuItem value={1}> Valentine </MenuItem>
                            <MenuItem value={2}> Birthday </MenuItem> 
                            <MenuItem value={3}> Christmas </MenuItem> 
                            <MenuItem value={4}> Anniversary </MenuItem> 
                            {/* <MenuItem value={5}> Orange </MenuItem> 
                            <MenuItem value={6}> Purple </MenuItem>  */}
                    </TextField>

                    <TextField className={classes.textField} label='Bouquet Name' type='text' name='name' onChange={(e) => {setItemInfo({...itemInfo, name: e.target.value})}} variant='outlined' value={itemInfo.name} required/> 
                    
                    <TextField className={classes.textField} label='Price' type='number' name='price' onChange={(e) => {setItemInfo({...itemInfo, price: e.target.value})}} variant='outlined' value= {itemInfo.price} required/>

                    <input type='file' name='image' onChange={fileSelectedHandler} />
                    <button type='submit' onClick={uploadHandler}> upload </button>   

                    <button 
                        onClick={bouquetHandler} 
                        type='submit'
                        disabled= {itemInfo.price === '' || itemInfo.name === '' || itemInfo.type === '' || file === ''}
                        style={{backgroundColor: 'rgb(243, 162, 176)', color: '#63393c'}}
                    >     
                        Add Bouquet
                    </button>
                </div>
            </Modal>
        </>
    )
}

export default SimpleModal

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    textField: {
		marginBottom: '15px',
	},
  }))
