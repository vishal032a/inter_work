import React, { useState } from 'react';
import { Button, Container, Grid, Input, TextareaAutosize, Select, MenuItem, Typography,TextField} from '@mui/material';
import { useDropzone } from 'react-dropzone';
import Nav2 from '../../Layouts/Navbar/Nav2';
import Footer from '../../Layouts/Footer/Footer';

const ProductUpload = () => {
  const [productTitle, setProductTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages([...images, ...files]);
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setImages([...images, ...acceptedFiles]);
    }
  });

  return (
    <>
    <Nav2/>
    <Container  style={{backgroundColor:'white',maxWidth:'100vw',maxHeight:'100vh',paddingTop:'20px',paddingLeft:'10vw',paddingRight:'20vw'}}>
      <h2>Upload Product</h2>
      <form>
        <Grid container spacing={2}
        style={{display:'flex',justifyContent:'center'}}
        >
          <Grid item xs={7} style={{marginRight:'4vw'}}>
            <Typography variant="subtitle2" >Product Title*</Typography>

            <TextField 
            fullWidth
            value={productTitle}
            onChange = {(e)=>setProductTitle(e.target.value)}
            variant="outlined" 
            style={{backgroundColor:'#FAFAFA',marginBottom:'20px'}}
            />
          <Typography variant="subtitle2" > Add Description*</Typography>
            <TextareaAutosize
              minRows={6}
              maxRows={8}
              cols={55}
              value={description}
              style={{backgroundColor:'#FAFAFA',marginBottom:'20px',resize:'none',}}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Select
              fullWidth
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              displayEmpty
              style={{backgroundColor:'#FAFAFA',marginBottom:'20px',resize:'none',}}
            >
              <MenuItem value="" disabled>
                Select Category
              </MenuItem>
              <MenuItem value="Category 1">Category 1</MenuItem>
              <MenuItem value="Category 2">Category 2</MenuItem>
            </Select>


            <Select
              fullWidth
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              displayEmpty
              style={{backgroundColor:'#FAFAFA',marginBottom:'20px',resize:'none',}}
            >
              <MenuItem value="" disabled>
                Select Sub Category
              </MenuItem>
              <MenuItem value="SubCategory 1">SubCategory 1</MenuItem>
              <MenuItem value="SubCategory 2">SubCategory 2</MenuItem>
            </Select>


            </Grid>

          <Grid item xs={3} style={{border:'2px solid red',marginLeft:'4vw'}}>

            <div {...getRootProps()} className="dropzone">
              <input {...getInputProps()} />
            </div>
            <Typography variant="subtitle2" >drop files in the box</Typography>

          </Grid>
        </Grid>

        <h3>Design Preview:</h3>
        <div className="image-preview">
            {images.map((image, index) => (
              <div key={index} style={{ display: 'inline-block',margin:'5px', width: '80px', height: '80px',}}>
                    <img src={URL.createObjectURL(image)} alt={`DesignImage ${index}`} width="80" height="80"/>
              </div>
            ))}
          </div>
            
            <Button variant="contained" color="primary" type="submit">Submit</Button>
      </form>
    </Container>
    <Footer bgcol="white" textcol="black"/>
    </>
  );
};

export default ProductUpload;
