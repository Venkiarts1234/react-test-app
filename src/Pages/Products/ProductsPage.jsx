import React from "react";
import {
    Grid,
    Chip,
    Typography,
    CardContent,
    Box,
    Paper
} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ReadMoreComponent from "../../Components/ReadMore/ReadMoreComponent";
import CurrencyFormatter from "../../Helpers/CurrencyFormatter";
import useMediaQuery from '@mui/material/useMediaQuery';

/**
 * IMPROVEMENTS
 * Css can be write in separate file since Its not requirement so I have written inline Css use advantage of Material UI
 * This page can be split in to small component that can be reusable for example each grid Item can keep separate component can reuse here.
 * */
export default function ProductPage({products, ...props}) {
    const largeScreens = useMediaQuery('(min-width:1024px)');
    return (
        <>
        {
            products.map( product => (
                <Paper sx ={{mb: 2, mt:2}} variant="outlined" key={product.BussinessId}>
                    <CardContent>
                        <Grid container >
                            <Grid item lg={4} sm={12} xs={12}>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Name
                                    </Typography>

                                    <Typography color="text.primary">
                                        {product.Name}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} variant="body2">
                                        {product.BusinessName}
                                    </Typography>
                                <Box>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Price
                                    </Typography>

                                    <Typography sx={{ mb: 1.5 }} color="text.primary">
                                        <CurrencyFormatter number= {product.Price} style='currency' currency={product.CurrencyCode}/>
                                    </Typography>
                                </Box>

                            </Grid>
                            {
                                largeScreens &&
                                    <>
                                        <Grid item lg={4} sm={12} xs={12}>
                                            {product.Description &&
                                            <Box>
                                                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                                    Description
                                                </Typography>
                                                <Typography sx={{mb: 1.5}} color="text.primary">
                                                    <ReadMoreComponent>
                                                        {product.Description}
                                                    </ReadMoreComponent>
                                                </Typography>
                                            </Box>
                                            }
                                        </Grid>
                                        <Grid item lg={4} sm={12} xs={12}>
                                            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                                Status
                                            </Typography>
                                            <Chip
                                                icon={product.Visible ? <VisibilityIcon/> : <VisibilityOffIcon/>}
                                                label={product.Visible ? "Published" : "Internal"}
                                                color={product.Visible ? "success" : "error"}
                                                sx={{borderRadius: '5px'}}
                                                size="small"
                                            />
                                        </Grid>
                                    </>
                            }
                        </Grid>
                    </CardContent>
                </Paper>
            ))
        }
        <Typography variant="h6" sx={{ mt: 2, mb: 2 }} color="text.primary">
            Total Products: {products.length}
        </Typography>
    </>
    )

}
