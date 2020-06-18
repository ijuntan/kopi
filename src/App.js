import React,{useRef} from 'react';
import {AppBar,Toolbar,CssBaseline,Grid,Button} from '@material-ui/core';
import Produk from './Product.js';
import './Styling.css';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   
// General scroll to element function

const App = (props) => {
    const produkRef = useRef(null)
    const contactRef = useRef(null)
    const marketPlaceRef = useRef(null)
    const toProduk = () => scrollToRef(produkRef)
    const toContact = () => scrollToRef(contactRef)
    const toMarketPlace = () => scrollToRef(marketPlaceRef)
    return (
        <div>
            <CssBaseline/>
            <AppBar>
                <Toolbar style={{backgroundColor:'white'}}>
                  {
                    [
                      {name:'Produk',toRef:toProduk},
                      {name:'Contact',toRef:toContact},
                      {name:'Marketplace',toRef:toMarketPlace}
                    ].map((item)=>(
                      <Grid container item xs={1} justify='center'>
                        <Button onClick={item.toRef} className='buttonHeader' disableRipple>
                          <div>
                            {item.name}
                          </div>
                        </Button>
                      </Grid>
                    ))
                  }
                    <Grid container item xs={7} justify='center' style={{color:'black'}}>
                      Logo
                    </Grid>
                    <Grid container item xs={3} justify='flex-end'>
                      {
                        [
                          {img:'/images/facebook.png'},
                          {img:'/images/whatsapp.png'},
                          {img:'/images/instagram.png'},
                        ].map((item,index)=>(
                          <img src={item.img} alt={index} className='iconSize'/>
                        ))
                      }
                    </Grid>
                </Toolbar>
            </AppBar>

            <div>
              <Grid className='background' container justify='center' alignItems='center'>
              </Grid>
              
              <Grid 
                className='produk' 
                ref={produkRef} 
                container justify='center' alignItems='flex-end' 
              >
                  Produk
              </Grid>

              <Grid container>
                {
                  Produk.map((item)=>(
                    <Grid className='isiProduk' item md={4} xs={6} container justify='center' alignItems='center'>
                      <img src={item.img} alt={item.name} className='imgSize'/>
                      <div>
                        <div className='namaProduk'>
                          {item.name}
                        </div>
                        {
                          item.price.map((list)=>(
                            <div className='hargaProduk250'>
                              {list.weight}
                            </div>
                          ))
                        }
                      </div>
                    </Grid>
                  ))
                }
              </Grid>

              <Grid className='contact' ref={contactRef} container justify='center'>
                <div>
                  Stay in Touch!
                </div>

                <Grid>

                </Grid>
              </Grid>

              <Grid className='marketPlace' ref={marketPlaceRef}>

              </Grid>

              <Grid container className='footer'>
                <Grid item xs={5} container justify='center' alignItems='center' >
                  Logo
                </Grid>
                <Grid item xs={4} style={{display:'inline-block',textAlign:'center'}} >
                  <div style={{padding:'5vh 0 0'}}>
                    Contact us!
                  </div>
                  <div style={{fontSize:'2vh'}}>
                    Phone Number
                  </div>
                </Grid>
              </Grid>
            </div>
        </div>
    );
}

export default App