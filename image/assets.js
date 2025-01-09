import logo_removebg from './logo_removebg.png';
import facebook_icon from './facebook_icon.png'
import apk_icon from './apk_icon.png'

import drinks_category from './drinks_category.png';
import dessert_category from './dessert_category.png';
import fried_dish_category from './fried_dish_category.jpg';
import pancit_category from './pancit_category.jpg';
import sizzling_category from './sizzling_category.png';
import soup_category from './soup_category.png';


import sizzling_pusit from './sizzling_pusit.jpg';
import sizzling_sisig from './sizzling_sisig.jpg';
import sizzling_gambas from './sizzling_gambas.jpg';
import sizzling_beef_stew from './sizzling_beef_stew.jpg';

import spicy_chicken from './spicy_chicken.jpg';
import lumpiang_shanghai from './lumpiang_shanghai.jpg';
import letchon_kawali from './letchon_kawali.jpg';
import letchon_kawali_chicken from './letchon_kawali_chicken.jpg';

export const assets = {
    logo_removebg,
    facebook_icon,
    apk_icon,

    drinks_category,
    dessert_category,
    fried_dish_category,
    pancit_category,
    sizzling_category,
    soup_category,
};

export const menu_list = [
    {
        menu_name: "Sizzling",
        menu_image: sizzling_category
    },
    {
        menu_name: "Drinks",
        menu_image: drinks_category
    },
    {
        menu_name: "Dessert",
        menu_image: dessert_category
    },
    {
        menu_name: "Fried Dish",
        menu_image: fried_dish_category
    },
    {
        menu_name: "Pancit",
        menu_image: pancit_category
    },
    {
        menu_name: "Soup",
        menu_image: soup_category
    }
];

export const food_list = [ // Changed from food_list[ to food_list =
    {
        id: "1",
        name: "Sizzling Pusit",
        image: sizzling_pusit,
        description: "Sisig Pusit is juicy and tender and bursting with spicy and smoky flavors. It's delicious as an appetizer or as a main dish with steamed rice!",
        category: "Sizzling",
         price:  "₱100"
    },
    {
        id: "1",
        name: "Sizzling Gambas",
        image: sizzling_gambas,
        description: " sizzling seafood dish made with fresh peeled and deveined shrimps, in a sauce made with garlic, paprika, chili flakes, butter, salt, pepper and oil.!",
        category: "Sizzling"
    },
    {
        id: "1",
        name: "Sizzling beef stew",
        image: sizzling_beef_stew,
        description: "Beef Kaldereta (Sizzling Beef Stew). Beef stew with vegetables simmered in garlic, tomato sauce, cheese and spices!",
        category: "Sizzling",
        price:  "₱100"
    },
    {
        id: "1",
        name: "Sizzling sisig",
        image: sizzling_sisig,
        description: "Sizzling Sisig makes a great party appetizer as well as a hearty dinner entree. A delicious combination of juicy pork and tangy, savory, and spicy flavors, it's seriously addictive!",
        category: "Sizzling"
    },
    {
        id: "1",
        name: "Spicy chicken",
        image: spicy_chicken,
        description: "",
        category: "Fried Dish"
    },
    {
        id: "1",
        name: "Lumpaing shanghai",
        image: lumpiang_shanghai,
        description: "",
        category: "Fried Dish"
    },
    {
        id: "1",
        name: "Letchon kawali",
        image: letchon_kawali,
        description: "",
        category: "Fried Dish"
    },
    {
        id: "1",
        name: "Letchon kawali chicken",
        image: letchon_kawali_chicken,
        description: "",
        category: "Fried Dish"
    }



];
