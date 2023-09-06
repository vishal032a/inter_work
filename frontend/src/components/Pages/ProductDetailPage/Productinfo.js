import React from 'react'
import { Grid, Typography,Button} from '@mui/material'
import profile from './profile2.png'
const Productinfo = () => {
    const colorOptions = [
        { color: 'red' },
        { color: 'blue' },
        { color: 'green' },
        // Add more color options as needed
      ];
      const sizes = [
        {si:'S'},
        {si:'L'},
        {si:'XL'},
        {si:'2XL'}
      ]
  return (
     <div>
        <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        >
            <Grid item padding={4}>
                <Typography variant="h5" color="initial">Game Over Men T-shirt</Typography>
                <Typography variant="subtitle2" color="initial" style={{marginLeft:'8%'}}>description ;kadkflkajdadf kadjfaokdjflka jdkflas lfkalksdf;lkajfaie aldjoifaj;lidfj iae fioaj diofjaisfjjoilsdf</Typography>
                <div style={{display:'flex',marginTop:'10%',marginLeft:'6%'}}>
                  <img src={profile} alt='profile' style={{width:'20px',backgroundColor:'blue',borderRadius: '50%',aspectRatio:'1'}}/>
                  <Typography variant='subtitle2' style={{marginLeft:'4%'}}>Designed by Artist</Typography>
                </div>
                <Typography variant="h6" color="initial" style={{fontWeight:'600',margin:'5%'}}>Rs 205</Typography>
                <Typography variant="h6" color="initial">Color</Typography>
                <div>
                {colorOptions.map((option, index) => (
                <Button
                key={index}
                variant='contained'
                style={{
                  backgroundColor: option.color,
                  height:'30px',
                  width:'30px',
                  margin: '5px',
                }}
              ></Button>
            ))}
          </div>
                <Typography variant="h6" color="initial">sizes</Typography>
                <div>
                {sizes.map((option, index) => (
                <Button
                key={index}
                variant='outlined'
                style={{
                  margin:'2%'
                }}
              >{option.si}</Button>
            ))}
          </div>
                <Typography variant="h6" color="initial">location</Typography>
                <div>
                  <Button variant="outlined" size='small' style={{margin:'5px'}} >front</Button>
                  <Button variant="outlined" size='small' style={{margin:'5px'}}>back</Button>
                </div>
            </Grid>
        </Grid>
        </div>
  )
}

export default Productinfo