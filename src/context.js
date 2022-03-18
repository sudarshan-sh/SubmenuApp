import React, { useContext, useState } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [location, setLocation] = useState({});
    const [page, setPage] = useState({ page:'', links: [] });

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    const openSubmenu = (text, coordinates) => {
        const specificPage = sublinks.find((link) => link.page === text);
        setPage(specificPage);
        setLocation(coordinates);
        setIsSubmenuOpen(true);
    }
    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }

    return <AppContext.Provider value={{ 
        isSidebarOpen,isSubmenuOpen,openSidebar,closeSidebar,openSubmenu,closeSubmenu,location,page
     }}>
        { children }
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };