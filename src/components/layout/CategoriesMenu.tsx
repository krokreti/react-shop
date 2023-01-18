import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useEffect, useState } from 'react';
import useHttp from '../../hooks/use-http';
import { useNavigate } from 'react-router-dom';
import CapitalizeFirstLetter from '../helpers/CapitalizeFirstLetter';

const CategoriesMenu = () => {
    const [categories, setCategories] = useState<string[]>([]);
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, categorie: string) => {
        console.log(categorie)
        navigate(`/categories/${categorie}`)
        setAnchorEl(null);
    }
    const { error, isLoading, sendRequest } = useHttp();

    useEffect(() => {
        sendRequest({
            url: "https://dummyjson.com/products/categories"
        }, 
            ((data: string[]) => {
                // console.log(data)
                setCategories(data);
            })
        )
    }, [sendRequest])

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ color:'white' }}
            >
                Categories
                <KeyboardArrowDownIcon/>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                {categories.map(categorie => (
                    <MenuItem key={categorie} onClick={(event) => handleMenuItemClick(event, categorie)}> 
                         {CapitalizeFirstLetter(categorie).replace("-", " ")}
                    </MenuItem>
                ))}

            </Menu>
        </div>
    )
}

export default CategoriesMenu;