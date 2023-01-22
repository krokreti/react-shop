import { useEffect, useState } from "react";
import { Stack } from '@mui/material'
import useHttp from "../../hooks/use-http";
import CategoryItem from "../../components/CategoryItem";
import LoadingCard from "../../components/shared/LoadingCard";
import { useNavigate } from "react-router-dom";

const Categories = () => {
    const [category, setCategory] = useState<string[]>([])
    const { error, isLoading, sendRequest } = useHttp();
    const navigate = useNavigate();

    useEffect(() => {
        sendRequest({
            url: "https://dummyjson.com/products/categories"
        }, 
        (data: string[]) => {
            setCategory(data)
        })
    }, [])

    const categoryClickHandler = (item: string) => {
        console.log(item)
        navigate(`/category/${item}`)
    }

    return (
        <Stack direction={"column"} padding={4}>
              {isLoading && (
                <LoadingCard/>
              )}
              {error && !isLoading && (
                <span>{error}</span>
              )}

              {!isLoading && !error && (
                category.map((item) => (
                    <CategoryItem category={item} key={item} categoryClickHandler={categoryClickHandler}/>
                ))
              )}
        </Stack>
    )
}

export default Categories;