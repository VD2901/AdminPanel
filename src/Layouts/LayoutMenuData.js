import { icon } from "leaflet";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navdata = () => {
    const history = useNavigate();
    //state data
    const [isDashboard, setIsDashboard] = useState(false);
    const [isInvoices, setIsInvoices] = useState(false);
    const [isEcommerce , setIsEcommerce] = useState(false);
   

    const [iscurrentState, setIscurrentState] = useState('Dashboard');
    function updateIconSidebar(e) {
        if (e && e.target && e.target.getAttribute("subitems")) {
            const ul = document.getElementById("two-column-menu");
            const iconItems = ul.querySelectorAll(".nav-icon.active");
            let activeIconItems = [...iconItems];
            activeIconItems.forEach((item) => {
                item.classList.remove("active");
                var id = item.getAttribute("subitems");
                if (document.getElementById(id))
                    document.getElementById(id).classList.remove("show");
            });
        }
    }

    useEffect(() => {
        document.body.classList.remove('twocolumn-panel');
        if (iscurrentState !== 'Dashboard') {
            setIsDashboard(false);
        }
        if (iscurrentState !== 'Invoices') {
            setIsInvoices(false);
        }
        if (iscurrentState !== 'ecommerce') {
            setIsEcommerce(false);
        }
   
    }, [
        history,
        iscurrentState,
        isDashboard,
        isInvoices,
        isEcommerce,
    ]);

    const menuItems = [
        {
            label: "Menu",
            isHeader: true,
        },
        {
            id: "dashboard",
            label: "Dashboards",
            icon: "ri-dashboard-2-line",
            link: "/#",
            stateVariables: isDashboard,
            click: function (e) {
                e.preventDefault();
                setIsDashboard(!isDashboard);
                setIscurrentState('Dashboard');
                updateIconSidebar(e);
            },
            
        },
        {
            id: "invoices",
            label: "Invoices",
            icon: "ri-dashboard-2-line",
            link: "/#",
            stateVariables: isInvoices,
            click: function (e) {
                e.preventDefault();
                setIsInvoices(!isInvoices);
                setIscurrentState('Invoices');
                updateIconSidebar(e);
            },
            subItems: [
                { id: 1,
                    label: "List View",
                    link: "/apps-invoices-list",
                    parentId: "Invoices"}
            ]
        },
        {
            id: "ecommerce",
            label: "Ecommerce",
            icon : "ri-dashboard-2-line",
            link:"/#",
            stateVariables: isEcommerce,
            click: function (e) {
                e.preventDefault();
                setIsEcommerce(!isEcommerce);
                setIscurrentState('ecommerce');
                updateIconSidebar(e);
                
            },
            subItems: [
                {
                    id: "1",
                    label : "Create Product",
                    link: "/apps-ecommerce-add-product",
                    parentId: "ecommerce"
                },
                {
                    id: "2",
                    label : "Product Details",
                    link: "/apps-ecommerce-product-details",
                    parentId: "ecommerce"
                },
            ]
        }
       
    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;