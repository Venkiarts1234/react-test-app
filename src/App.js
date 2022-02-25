import React, {useState} from "react";
import {useEffect} from "react";
import {getAccessToken, getProducts} from './Services/Api';
import { Grid, Container, Box } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import ProductsPage from "./Pages/Products/ProductsPage";


/**
 * IMPROVEMENTS
 * Css can be write in separate file since Its not requirement so I have written inline Css use advantage of Material UI
 * This page can be split in to small component that can be reusable for example each grid Item can keep separate component can reuse here.
 * */
function App() {

    const[products, setProducts] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    // NOTE : We can fetch the products by storing access token in to cookie and using for each subsequent calls
    // Once token has expired we can use refresh token to fetch the Access token again
    // Also Can use Redux global state to keep the products in other component since It test So I am not doing this
    useEffect(() => {
       const fetchProductsData = async () => {
           const tokenResp = await getAccessToken();
           if (tokenResp.data.access_token) {
               const productsResp = await getProducts(tokenResp.data.access_token);
               setProducts(productsResp.data?.Records);
               setIsLoading(false);
           }
       }
       fetchProductsData();
    },[])

    return (
    <Container maxWidth={"lg"} sx={{backgroundColor:"#f4f4f4"}}>
        <Grid container justifyContent="center" >
            <Grid item lg={12} sm={12} xs={12}>
                {
                    isLoading?
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <CircularProgress />
                        </Box>
                        : products ?
                        <ProductsPage products={products}/>
                        : 'No Products found.'
                }

            </Grid>
        </Grid>
    </Container>

    );
}

export default App;
