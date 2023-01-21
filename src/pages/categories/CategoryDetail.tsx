import { useParams } from "react-router-dom";

const Category = () => {
    const params = useParams();
    return <>{params.idCategory}</>
}

export default Category;