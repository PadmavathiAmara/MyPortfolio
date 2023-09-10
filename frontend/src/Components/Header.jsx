import LightModeIcon from '@mui/icons-material/LightMode';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useNavigate } from 'react-router-dom';


export const Header = () => {

    const navigate = useNavigate();

    return(
        
        <header className=" w-1/12 h-screen flex flex-col ">
<div className=' w-full h-16 flex justify-evenly items-center cursor-pointer '>Logo
<LightModeIcon />
</div>
<div className=' w-full custom-height flex ' >
<ul className=' flex w-full h-26 pt-40 flex-col justify-evenly items-center cursor-pointer '>
    <li onClick={ () => navigate('/') } > Home </li>
    <li onClick={ () => navigate('/projects') } > Projects </li>
    <li onClick={ () => navigate('/skills') } > Skills </li>
    <li onClick={ () => navigate('/') } > Contact </li>
</ul>
</div>

{/* <div className=' flex justify-end items-center w-1/2 pr-16 '>
<MenuRoundedIcon className=' sm:block '/>

</div> */}
            </header>
    
    )
}

export default Header;