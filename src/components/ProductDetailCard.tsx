import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../hooks/use-http";
import Product from "../models/Product";
import ProductDetailItem from "./ProductDetailItem";


const ProductDetail = () => {
   const [product, setProduct] = useState<Product>();
   const params = useParams();
   const { error, isLoading, sendRequest } = useHttp();
   useEffect(() => {
      sendRequest({
         url: `https://dummyjson.com/products/${params.id}`
      },
         (data: Product) => {
            setProduct(data)
         })
   }, [sendRequest, params.id])
   return <ProductDetailItem product={product} />
   
}

export default ProductDetail;