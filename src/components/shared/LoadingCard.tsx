import Card from "./Card";
import CircularProgress from '@mui/material/CircularProgress';

const LoadingCard = () => {
    return (
        <Card>
            <CircularProgress/>
        </Card>
    )
}

export default LoadingCard;