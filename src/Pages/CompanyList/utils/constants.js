
import company1 from '../../../Assets/AdhiArientLogo.png'
import company2 from '../../../Assets/Kusauto.jpg'
import company3 from '../../../Assets/Longnew.png'
import company9 from '../../../Assets/Crowntech.png'
import company8 from '../../../Assets/Procandour.jpg'
import company6 from '../../../Assets/nikita.jpg'

export const getCompanyList = () => {
    const companyListData  = [
        {
            id: 1, 
            icon: company1,
            title: "Adhi Arihant Press Tool",
            subTitle: "We are expert in Press Tool Manufaturing,Injection Moulding and Rubber"
        },
        {
            id: 2, 
            icon: company2,
            title: "KUSAUTO INDIA PVT LTD",
            subTitle: ""
        },
        {
            id: 3, 
            icon: company3,
            title: "Longnew india Pvt Ltd ",
            subTitle: ""
        },
       
        {
            id: 6, 
            icon: company6,
            title: "Nikita containers pvt ltd",
            subTitle: ""
        },
        
        {
            id: 8, 
            icon: company8,
            title: "Pro candour automotive  system pvt ltd",
            subTitle: ""
        },
        {
            id: 9, 
            icon: company9,
            title: "crowntech surface finishings pvt ltd",
            subTitle: ""
        },
        {
            id: 10, 
            icon: company9,
            title: "Crowntech surface treatment Pvt Ltd",
            subTitle: ""
        },
        {
            id: 4, 
            icon: null,
            title: "FD ELECTRO PLATERS",
            subTitle: ""
        },
        {
            id: 5, 
            icon: null,
             title: "Star electroplaters pvt ltd",
            subTitle: ""
        },
        {
            id: 7, 
            icon: null,
            title: "Pondy polymers",
            subTitle: ""
        },
    ]
    return companyListData;
}