import { BiHome, BiInfoCircle, BiSolidBriefcase, BiSolidContact} from "react-icons/bi";

export const Menuitem = [
    {
        title: 'Home',
        url: '/',
        cName: 'nav-links',
        icon: <BiHome />
    },
    {
        title: 'About',
        url: '/about',
        cName: 'nav-links',
        icon: <BiInfoCircle />

    },
    {
        title: 'Service',
        url: '/service',
        cName: 'nav-links',
        icon: <BiSolidBriefcase />
    },
    {
        title: 'Contact',
        url: '/contact',
        cName: 'nav-links',
        icon: <BiSolidContact />
    },
    {
        title: 'Sign Up',
        url: '/login',
        cName: 'nav-links-mobile',
        icon: null
    },
]