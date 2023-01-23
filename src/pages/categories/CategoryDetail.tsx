import { Stack } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import CapitalizeFirstLetter from '../../components/helpers/CapitalizeFirstLetter';
import ProductItem from '../../components/ProductItem';
import Card from '../../components/shared/Card';
import useHttp from '../../hooks/use-http';
import Product from '../../models/Product';

const Category = () => {
    const params = useParams();
    const { error, isLoading, sendRequest} = useHttp();
    const [products, setProducts] = useState<Product[]>([])
    
    let category: string = '';
    if(params) {
        category = params.idCategory!;
    }

    useEffect(() => {
        sendRequest({url: `https://dummyjson.com/products/category/${params.idCategory}`},
        (data: { limit: number, products: Product[], skip: number, total: number } ) => {
            setProducts(data.products);
        })
    }, [sendRequest, params])
    
    return (<>
        <Card>
            <h1>{CapitalizeFirstLetter(category)}</h1>
        </Card>
        <Card >
            <Stack direction={'row'} flexWrap={'wrap'} gap={2} display={'flex'} justifyContent={'center'}>
                {products.map((product) => (
                    <ProductItem product={product} key={product.id}/>
                ))}
            </Stack>
        </Card>
    </>)
}

export default Category;