import business from '../courseImages/business.png'
import businessOne from '../courseImages/business-1.png'
import design from '../courseImages/design.png'
import html from '../courseImages/html.png'

const courses = [
    {   
        id:1,
        courseImage:html,
        description: 'Best course to learn HTML',
        ratingTotal: 15,
        starRating:5,
        price: 100,
        name: 'HTML',
    },

    {   
        id:2,
        courseImage:design,
        description: 'Best course to learn Web Design',
        ratingTotal: 15,
        starRating:4,
        price: 100, 
        name: 'Design'
    },

    {   
        id:3,
        courseImage:business,
        description: 'Best course to learn Business',
        ratingTotal: 15,
        starRating:5,
        price: 100, 
        name: 'Business',
    },

    {   
        id:4,
        courseImage:businessOne,
        description: 'Best course for people who want to start a start-up',
        ratingTotal: 15,
        starRating:4,
        price: 100, 
        name: 'Start-up',
    },


];

export default courses;