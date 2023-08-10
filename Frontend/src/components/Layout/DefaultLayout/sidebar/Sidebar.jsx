import './sidebar.css';
import { LineStyle, Timeline, TrendingUp, PermIdentity, Storefront, AttachMoney, } from '@mui/icons-material';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
    var location = useLocation();
    useEffect(() => {
        var pages = document.querySelectorAll('li');
        pages.forEach((page) => {
            if (page.attributes.name) {
                if (page.attributes.name.value === location.pathname) {
                    page.className = 'sidebarListItem active';
                } else {
                    page.className = 'sidebarListItem';
                }
            }
        });
    });
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Dashboard</h3>
                    <ul className='sidebarList'>
                        <Link to='/admin' className='link'>
                            <li name='/admin' className='sidebarListItem'>
                                <LineStyle className='sidebarIcon' />
                                Home
                            </li>
                        </Link>
                        <li className='sidebarListItem'>
                            <Timeline className='sidebarIcon' />
                            Analytics
                        </li>
                        <li className='sidebarListItem'>
                            <TrendingUp className='sidebarIcon' />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Quick Menu</h3>
                    <ul className='sidebarList'>
                        <Link to='/admin/userslist' className='link'>
                            <li name='/admin/userslist' className='sidebarListItem'>
                                <PermIdentity className='sidebarIcon' />
                                Users
                            </li>
                        </Link>
                        <Link to='/admin/productslist' className='link'>
                            <li name='/admin/productslist' className='sidebarListItem'>
                                <Storefront className='sidebarIcon' />
                                Products
                            </li>
                        </Link>
                        <li className='sidebarListItem'>
                            <AttachMoney className='sidebarIcon' />
                            Transactions
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
