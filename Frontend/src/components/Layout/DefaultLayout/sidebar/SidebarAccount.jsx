import './sidebarAcc.css';
import { PermIdentity, AttachMoney } from '@mui/icons-material';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function SidebarAcc() {
    var location = useLocation();
    useEffect(() => {
        var pages = document.querySelectorAll('.link');
        pages.forEach((page) => {
            if (page.childNodes[0].attributes.name) {
                if (page.childNodes[0].attributes.name.value === location.pathname) {
                    page.childNodes[0].className = 'sidebarListItemAcc active';
                } else {
                    page.childNodes[0].className = 'sidebarListItemAcc';
                }
            }
        });
    });
    return (
        <div className='sidebarAcc'>
            <div className='sidebarWrapperAcc'>
                <div className='sidebarMenuAcc'>
                    <ul className='sidebarListAcc'>
                        <Link to='/myaccount/information' className='link'>
                            <li name='/myaccount/information' className='sidebarListItemAcc'>
                                <PermIdentity className='sidebarIconAcc' />
                                Users
                            </li>
                        </Link>
                        <Link to='/myaccount/transactions' className='link'>
                            <li name='/myaccount/transactions' className='sidebarListItemAcc'>
                                <AttachMoney className='sidebarIconAcc' />
                                Transactions
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}
