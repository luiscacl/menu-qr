

type Category = {
    category: string;
    emoji: string;
    meals: Meals[]
}

type Meals = {
    imageUrl: string;
    name: string;
    price: number
}

export const categories: Category[] = [{
    category: 'Bebidas',
    emoji: '🍹',
    meals: [
        {imageUrl: 'https://gruposudesa.com.mx/blog/wp-content/uploads/2021/09/5-platillos-mexicanos-para-el-mes-patrio.jpg', name: 'Platillo 1', price: 14},
        {imageUrl: 'https://www.marthadebayle.com/wp-content/uploads/2021/10/Platillos-tipicos-guadalajara.jpg', name: 'Platillo 2', price: 14},
        {imageUrl: 'https://media.admagazine.com/photos/618a627f29327ed3de99d5f2/master/w_1600%2Cc_limit/81819.jpg', name: 'Platillo 3', price: 14},
        {imageUrl: 'https://productoschata.com/wp-content/uploads/2023/01/aguachile.jpg', name: 'Platillo 4', price: 14},
        {imageUrl: 'https://gruposudesa.com.mx/blog/wp-content/uploads/2021/09/5-platillos-mexicanos-para-el-mes-patrio.jpg', name: 'Platillo 4', price: 14},
        {imageUrl: 'https://www.unileverfoodsolutions.com.mx/tendencias/de-mexico-para-el-mundo/platillos-mexicanos/top10-platillos/jcr:content/parsys/content-aside-footer/columncontrol_copy/columnctrl_parsys_2/textimage/image.transform/jpeg-optimized/image.1592429869891.jpg', name: 'Platillo 5', price: 14},
        {imageUrl: 'https://www.garzablancaresort.com.mx/blog/wp-content/uploads/elementor/thumbs/Traditional-Food-in-Puerto-Vallarta-You-Have-Try-in-Your-Next-Visit-q2sbf29oyqpp7r5g9tdeali1bhaug8af1iyyx6vlvc.jpg', name: 'Platillo 6', price: 14},
        {imageUrl: 'https://media.admagazine.com/photos/618a627f29327ed3de99d5f2/master/w_1600%2Cc_limit/81819.jpg', name: 'Platillo 7', price: 14},
        {imageUrl: 'https://media.admagazine.com/photos/618a627f29327ed3de99d5f2/master/w_1600%2Cc_limit/81819.jpg', name: 'Platillo 7', price: 14},
        {imageUrl: 'https://media.admagazine.com/photos/618a627f29327ed3de99d5f2/master/w_1600%2Cc_limit/81819.jpg', name: 'Platillo 7', price: 14},
        {imageUrl: 'https://media.admagazine.com/photos/618a627f29327ed3de99d5f2/master/w_1600%2Cc_limit/81819.jpg', name: 'Platillo 7', price: 14},
        {imageUrl: 'https://media.admagazine.com/photos/618a627f29327ed3de99d5f2/master/w_1600%2Cc_limit/81819.jpg', name: 'Platillo 7', price: 14},
        {imageUrl: 'https://media.admagazine.com/photos/618a627f29327ed3de99d5f2/master/w_1600%2Cc_limit/81819.jpg', name: 'Platillo 7', price: 14},
        ],
}, {
    category: 'Entrees',
    emoji: '🍔',
    meals: [
        {imageUrl: 'https://gruposudesa.com.mx/blog/wp-content/uploads/2021/09/5-platillos-mexicanos-para-el-mes-patrio.jpg', name: 'Platillo 1', price: 14},
        {imageUrl: 'https://www.marthadebayle.com/wp-content/uploads/2021/10/Platillos-tipicos-guadalajara.jpg', name: 'Platillo 2', price: 14},
        {imageUrl: 'https://media.admagazine.com/photos/618a627f29327ed3de99d5f2/master/w_1600%2Cc_limit/81819.jpg', name: 'Platillo 3', price: 14},
        {imageUrl: 'https://productoschata.com/wp-content/uploads/2023/01/aguachile.jpg', name: 'Platillo 4', price: 14},
        {imageUrl: 'https://gruposudesa.com.mx/blog/wp-content/uploads/2021/09/5-platillos-mexicanos-para-el-mes-patrio.jpg', name: 'Platillo 4', price: 14},
        {imageUrl: 'https://www.unileverfoodsolutions.com.mx/tendencias/de-mexico-para-el-mundo/platillos-mexicanos/top10-platillos/jcr:content/parsys/content-aside-footer/columncontrol_copy/columnctrl_parsys_2/textimage/image.transform/jpeg-optimized/image.1592429869891.jpg', name: 'Platillo 5', price: 14},
        {imageUrl: 'https://www.garzablancaresort.com.mx/blog/wp-content/uploads/elementor/thumbs/Traditional-Food-in-Puerto-Vallarta-You-Have-Try-in-Your-Next-Visit-q2sbf29oyqpp7r5g9tdeali1bhaug8af1iyyx6vlvc.jpg', name: 'Platillo 6', price: 14},
        {imageUrl: 'https://media.admagazine.com/photos/618a627f29327ed3de99d5f2/master/w_1600%2Cc_limit/81819.jpg', name: 'Platillo 7', price: 14},
        {imageUrl: 'https://media.admagazine.com/photos/618a627f29327ed3de99d5f2/master/w_1600%2Cc_limit/81819.jpg', name: 'Platillo 7', price: 14},
        {imageUrl: 'https://media.admagazine.com/photos/618a627f29327ed3de99d5f2/master/w_1600%2Cc_limit/81819.jpg', name: 'Platillo 7', price: 14},
        {imageUrl: 'https://media.admagazine.com/photos/618a627f29327ed3de99d5f2/master/w_1600%2Cc_limit/81819.jpg', name: 'Platillo 7', price: 14},
        {imageUrl: 'https://media.admagazine.com/photos/618a627f29327ed3de99d5f2/master/w_1600%2Cc_limit/81819.jpg', name: 'Platillo 7', price: 14},
        {imageUrl: 'https://media.admagazine.com/photos/618a627f29327ed3de99d5f2/master/w_1600%2Cc_limit/81819.jpg', name: 'Platillo 7', price: 14},
        ],
}, {
    category: 'Soups and Salads',
    emoji: '🥗',
    meals: []
}, {
    category: 'Desserts',
    emoji: '🍰',
    meals: []
}, {
    category: 'Meals',
    emoji: '🍽️',
    meals: []
}, {
    category: 'Specialties',
    emoji: '🥩',
    meals: []
}
];

