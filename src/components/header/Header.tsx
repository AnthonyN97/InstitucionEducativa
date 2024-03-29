import { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import logo from '../../assets/logo.jpg';

const Header: React.FC = () => {
    const [visibleRight, setVisibleRight] = useState(false);
    const links = [
        { name: 'Inicio', href: '/' },
        { name: 'Niveles' , href: '/Niveles'},
        { name: 'Sobre Nosotros', href: '/sobreNosotros' },
        { name: 'Normas', href: '/Normas' },
        { name: 'Contactanos', href: '/Contactanos' },
        { name: 'Área Deportes' , href: '/AcademiaDeportiva' }
    ];

    return (
        <>
            <nav className="bg-blue-dark">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center">
                        <img src={logo} className="h-12 mr-3" alt="Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Corpaidos</span>
                    </a>

                    <Button icon="pi pi-bars" onClick={() => setVisibleRight(true)} className='inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 bg-blue-dark hover:bg-blue-light focus:ring-gray-600' />

                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                            {links.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="block py-2 pl-3 pr-4 text-gray-900 rounded text-white">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
            <Sidebar visible={visibleRight} className="bg-gray-700" position="right" onHide={() => setVisibleRight(false)}>
                <ul className="font-medium text-sm flex flex-col p-2 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 border border-gray-700 bg-blue-dark">
                    {links.map((link, index) => (
                        <li key={index}>
                            <a href={link.href} className="block py-2 pl-3 pr-4 rounded text-white">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </Sidebar>
        </>
    );
};

export default Header;