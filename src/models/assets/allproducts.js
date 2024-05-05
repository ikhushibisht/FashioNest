import men1 from './men1.png'
import men2 from './men2.png'
import men3 from './men3.png'
import men4 from './men4.png'
import men5 from './men5.png'
import men6 from './men6.png'
import men7 from './men7.png'
import men8 from './men8.jpeg'
import men9 from './men9.jpeg'
import men10 from './men10.jpeg'
import men11 from './men11.jpg'
import men12 from './men12.jpeg'
import women1 from './women1.jpeg'
import women2 from './women2.jpeg'
import women3 from './women3.jpeg'
import women4 from './women4.jpeg'
import women5 from './women5.png'
import women6 from './women6.jpg'
import women7 from './women7.webp'
import women8 from './women8.webp'
import women9 from './women9.jpg'
import women10 from './women10.jpg'
import women11 from './women11.webp'
import women12 from './women12.jpeg'
import kids1 from './kids1.jpeg'
import kids2 from './kids2.jpg'
import kids3 from './kids3.jpg'
import kids4 from './kids4.png'
import kids5 from './kids5.jpg'
import kids6 from './kids6.png'
import kids7 from './kids7.png'
import kids8 from './kids8.png'
import kids9 from './kids9.png'
import kids10 from './kids10.png'
import kids11 from './kids11.png'
import kids12 from './kids12.png'

let all_prod= [
    {
        id:1,
        name: "Printed T-Shirt",
        category: "Men",
        image: men1,
        new_price: 799,
        old_price: 1599,
    },
    {
        id:2,
        name: "Black Printed Half sleeve shirt",
        category: "Men",
        image: men2,
        new_price: 599,
        old_price: 1199,
    },
    {
        id:3,
        name: "Jeans for Men",
        category: "Men",
        image: men3,
        new_price: 1099,
        old_price: 2199,
    },
    {
        id:4,
        name: "Running Shoes",
        category: "Men",
        image: men4,
        new_price: 1399,
        old_price: 2799,
    },
    {
        id:5,
        name: "Cargo Pants",
        category: "Men",
        image: men5,
        new_price: 999,
        old_price: 1999,
    },
    {
        id:6,
        name: "Black Kurta",
        category: "Men",
        image: men6,
        new_price: 799,
        old_price: 1599,
    },
    {
        id:7,
        name: "Ethnic wear Kurta set",
        category: "Men",
        image: men7,
        new_price: 1200,
        old_price: 2400,
    },
    {
        id:8,
        name: "Blazer for Men",
        category: "Men",
        image: men8,
        new_price: 1500,
        old_price: 3000,
    },
    {
        id:9,
        name: "Blue Half sleeve shirt",
        category: "Men",
        image: men9,
        new_price: 699,
        old_price: 1399,
    },
    {
        id:10,
        name: "Pants for Men",
        category: "Men",
        image: men10,
        new_price: 1100,
        old_price: 2200,
    },
    {
        id:11,
        name: "Half pants",
        category: "Men",
        image: men11,
        new_price: 800,
        old_price: 1600,
    },
    {
        id:12,
        name: "Striped sweatshirt",
        category: "Men",
        image: men12,
        new_price: 999,
        old_price: 1999,
    },
    {
        id:13,
        name: "Check midi dress",
        category: "Women",
        image: women1,
        new_price: 699,
        old_price: 1399,
    },
    {
        id:14,
        name: "Body fit frilled bottom dress",
        category: "Women",
        image: women2,
        new_price: 899,
        old_price: 1799,
    },
    {
        id:15,
        name: "Black Jumpsuit",
        category: "Women",
        image: women3,
        new_price: 600,
        old_price: 1200,
    },
    {
        id:16,
        name: "Satin top full neck and sleeves",
        category: "Women",
        image: women4,
        new_price: 999,
        old_price: 1999,
    },
    {
        id:17,
        name: "Suit ethnic wear",
        category: "Women",
        image: women5,
        new_price: 800,
        old_price: 1600,
    },
    {
        id:18,
        name: "Silk Saree",
        category: "Women",
        image: women6,
        new_price: 1100,
        old_price: 2200,
    },
    {
        id:19,
        name: "Elegant Saree",
        category: "Women",
        image: women7,
        new_price: 1600,
        old_price: 3200,
    },
    {
        id:20,
        name: "Kurta and plazzo set",
        category: "Women",
        image: women8,
        new_price: 1000,
        old_price: 2000,
    },
    {
        id:21,
        name: "High rise bootcut jeans",
        category: "Women",
        image: women9,
        new_price: 799,
        old_price: 1599,
    },
    {
        id:22,
        name: "High rise wide-leg jeans",
        category: "Women",
        image: women10,
        new_price: 899,
        old_price: 1799,
    },
    {
        id:23,
        name: "Purple shining wedged sandals",
        category: "Women",
        image: women11,
        new_price: 1200,
        old_price: 2400,
    },
    {
        id:24,
        name: "White ankle length boots",
        category: "Women",
        image: women12,
        new_price: 1500,
        old_price: 3000,
    },
    {
        id:25,
        name: "Mini Mouse sweatshirt set",
        category: "Kids",
        image: kids1,
        new_price: 999,
        old_price: 1999,
    },
    {
        id:26,
        name: "Prited sweatshirt",
        category: "Kids",
        image: kids2,
        new_price: 600,
        old_price: 1200,
    },
    {
        id:27,
        name: "Long coat for girls",
        category: "Kids",
        image: kids3,
        new_price: 1100,
        old_price: 2200,
    },
    {
        id:28,
        name: "Cute check frock with bow",
        category: "Kids",
        image: kids4,
        new_price: 599,
        old_price: 1199,
    },
    {
        id:29,
        name: "Cute sherwani set",
        category: "Kids",
        image: kids5,
        new_price: 1299,
        old_price: 2599,
    },
    {
        id:30,
        name: "Tracksuit for boys",
        category: "Kids",
        image: kids6,
        new_price: 1100,
        old_price: 2200,
    },
    {
        id:31,
        name: "Blue beach printed shirt",
        category: "Kids",
        image: kids7,
        new_price: 599,
        old_price: 1199,
    },
    {
        id:32,
        name: "Trouser Pants",
        category: "Kids",
        image: kids8,
        new_price: 899,
        old_price: 1799,
    },
    {
        id:33,
        name: "Set of 3 formal wear",
        category: "Kids",
        image: kids9,
        new_price: 1400,
        old_price: 2800,
    },
    {
        id:34,
        name: "Infant's cute bodysuit",
        category: "Kids",
        image: kids10,
        new_price: 599,
        old_price: 1199,
    },
    {
        id:35,
        name: "Heart printed frock",
        category: "Kids",
        image: kids11,
        new_price: 600,
        old_price: 1200,
    },
    {
        id:36,
        name: "Elegant summer floral frock",
        category: "Kids",
        image: kids12,
        new_price: 799,
        old_price: 1599,
    },
];

export default all_prod;