import { useParams } from "react-router-dom";

const ProductDetail = () => {
   const params = useParams();
   return <>{params.id}</>
   
}

export default ProductDetail;