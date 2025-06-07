import Caurosal1 from '../../../Assets/caurosal1.jpg'
import Caurosal2 from '../../../Assets/caurosal2.jpg'
import Caurosal3 from '../../../Assets/caurosal3.jpg'
import Caurosal4 from '../../../Assets/caurosal4.jpg'
import Caurosal5 from '../../../Assets/caurosal5.png'


export const getSlidesData = () => {
    const slidesData  = [
        {
            id: 1, 
            image: Caurosal1,
            text: "Your Trusted Legislative Compliance Partner"
        },
        {
            id: 2, 
            image: Caurosal2,
            text: " Highly Skilled and Industry-Trained Workforce"
        },
        {
            id: 3, 
            image: Caurosal3,
            text: "Streamlined Recruitment and Fast Placement"
        },
        {
            id: 4, 
            image: Caurosal4,
            text: "Commitment to Workplace Safety and Quality"
        },
        {
            id: 5, 
            image: Caurosal5,
            text: " Flexible Solutions for a Dynamic Industry"
        }
    ]
    return slidesData;
}