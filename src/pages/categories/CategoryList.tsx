import { useEffect, useState } from "react";
import { Stack } from '@mui/material'
import useHttp from "../../hooks/use-http";
import CategoryItem from "../../components/CategoryItem";
import LoadingCard from "../../components/shared/LoadingCard";

const Categories = () => {
    const [category, setCategory] = useState<string[]>([])
    const { error, isLoading, sendRequest } = useHttp();

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