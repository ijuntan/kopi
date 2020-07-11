import React,{useRef} from 'react';
import {AppBar,Toolbar,CssBaseline,Grid,Button,Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FBwhite from './Images/fw.png';
import FBbrown from './Images/fb.png';
import Iwhite from './Images/iw.png';
import Ibrown from './Images/ib.png';
import Wwhite from './Images/ww.png';
import Wbrown from './Images/wb.png';
import LogoWhite from './Images/lw.png';
import LogoBrown from './Images/lb.png';
import bg from './Images/bg.jpg';
import Product from './Product.js';
import './Styling.css';

const useStyles = makeStyles(() => ({
  buttonHeader:{
    color:'white',
    fontSize: '2.2vh',
    margin:'0 0.6vw',
    "&:hover": {
      backgroundColor: 'transparent',
      "&::after": {
        width: '100%',
        left: '0',
      },
    },
    "&::after":{
      background: 'none repeat scroll 0 0 white',
      bottom: '0',
      content: "''",
      display: 'block',
      height: '2px',
      left: '50%',
      position: 'absolute',
      transition: 'width 0.3s ease 0s, left 0.3s ease 0s',
      width:'0'
    }
  },
  
  buttonLogo:{
    "&:hover": {
      backgroundColor: 'transparent',
    }
  }
}))

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   
// General scroll to element function

const App = (props) => {
  const homeRef = useRef(null);
  const ProductRef = useRef(null);
  const contactRef = useRef(null);
  const marketPlaceRef = useRef(null);
  const toHome = () => scrollToRef(homeRef);
  const toProduct = () => scrollToRef(ProductRef);
  const toContact = () => scrollToRef(contactRef);
  const toMarketPlace = () => scrollToRef(marketPlaceRef);
  const classes = useStyles();
  return (
      <div>
          <CssBaseline/>
          <AppBar>
              <Toolbar style={{backgroundColor:'#7a4a16'}}>
                {
                  [
                    {name:'Product',toRef:toProduct},
                    {name:'Marketplace',toRef:toMarketPlace},
                    {name:'Contact',toRef:toContact},
                  ].map((item)=>(
                      <Button onClick={item.toRef} className={classes.buttonHeader} disableRipple>
                        <div>
                          {item.name}
                        </div>
                      </Button>
                  ))
                }
                  <Grid container item xs={7} justify='center' style={{color:'black'}} ref={homeRef}>
                    <Button onClick={toHome} disableRipple className={classes.buttonLogo}>
                      <img src={LogoWhite} alt='logo' className='logoHeader'/>
                    </Button>
                  </Grid>

                  <Grid container item xs={3} justify='flex-end'>
                    {
                      [
                        {img:Iwhite},
                        {img:FBwhite},
                        {img:Wwhite},
                      ].map((item,index)=>(
                        <img src={item.img} alt={index} className='iconHeader'/>
                      ))
                    }
                  </Grid>
              </Toolbar>
          </AppBar>

          <div>
            {/* Front Page */}
            <Grid className='background' container justify='center' alignItems='center'>
              <img src={bg} alt='randompic' className='frontPageImage'/>
            </Grid>
            
            <div className='background' ref={ProductRef}>
              {/* Product Title */}
              <Grid 
                className='product' 
                container justify='center' alignItems='flex-end' 
              >
                  Product
              </Grid>
              
              {/* Product Content */}
              <Grid container>
                {
                  Product.map((item)=>(
                    <Grid className='isiProduct' item xs={12} container alignItems='center'>
                      <img src={item.img} alt={item.name} className='imgSize'/>
                      <div>
                        <div className='namaProduct'>
                          {item.name}
                          <div className='descProduct'>
                            {item.desc}
                          </div>
                        </div>
                        {
                          item.price.map((list)=>(
                            <div className='hargaProduct'>
                              {list.weight}
                            </div>
                          ))
                        }
                      </div>
                    </Grid>
                  ))
                }
              </Grid>
            </div>
            
            {/* MarketPlace */}
            <Grid className='marketPlace' ref={marketPlaceRef}>
                <Grid item xs={12} className='marketPlaceHead' container justify='center'>
                  Marketplace
                </Grid>
                <Paper className='marketPlacePaper'>

                <Grid item md={3} xs={6} container justify='center'>

                </Grid>
                </Paper>
            </Grid>

            {/* Footer and Contact */}
            <Grid container className='footer' ref={contactRef}>
              <Grid item xs={6} container justify='center' alignItems='center' >
                <img src={LogoBrown} alt='logoFooter' className='logoFooter'/>
              </Grid>
              <Grid item xs={6}  container justify='center' alignItems='center'>
                <div className='footerText'>
                  Hubungi kami

                  <div>
                    abadicoffee788@gmail.com
                  </div>

                  {
                    [
                      {img:Ibrown},
                      {img:FBbrown},
                      {img:Wbrown},
                    ].map((item,index)=>(
                      <img src={item.img} alt={index} className='iconFooter'/>
                    ))
                  }
                </div>
                
              </Grid>
            </Grid>
          </div>
      </div>
  );
}

export default App