import { Skeleton, Stack } from "@mui/material";

const ProductItemSkeleton = () => {
    return (
        <Stack direction={"column"} spacing={1}>
        <Skeleton variant="rounded" height={"7em"} width={"13em"} sx={{ bgcolor: "grey.700" }}/>
        <Skeleton variant="text" sx={{ fontSize: '1rem', bgcolor: "grey.700" }} />
        <Skeleton variant="text" sx={{ fontSize: '1rem', bgcolor: "grey.700" }} />
        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
            <Skeleton variant="rounded" width={"5em"} height={"2em"} sx={{ bgcolor: "grey.700", borderRadius:"10em" }}/>
            <Skeleton variant="rectangular" width={".1em"} height={"1.5em"} sx={{ bgcolor: "grey.700" }}/>
            <Skeleton variant="rounded" width={"5em"} height={"2em"} sx={{ bgcolor: "grey.700" }}/>
        </Stack>
        </Stack>
    )
}

export default ProductItemSkeleton;