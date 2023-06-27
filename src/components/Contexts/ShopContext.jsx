import { createContext  } from "react";
export const ShopContext = createContext();
function ShopProvider(props) {
    const featuredProducts =[
        {
          id:"1",
          img:"https://preview.colorlib.com/theme/eiser/img/product/feature-product/f-p-1.jpg.webp",
          name:"LATEST MEN'S SNEAKER",
          category:"Shoes",
          brand:"NewYorker",
          price:"$30",
          star:"4.1"
        },
        {
          id:"2",
          img:"https://preview.colorlib.com/theme/eiser/img/product/feature-product/f-p-2.jpg.webp",
          name:"RED WOMEN PURSES",
          category:"Backpacks",
          brand:"Zara",
          price:"$70",
          star:"4.3"
        },
        {
          id:"3",
          img:"https://preview.colorlib.com/theme/eiser/img/product/feature-product/f-p-3.jpg.webp",
          name:"MEN STYLISH SMART WATCH",
          category:"Watches",
          brand:"Pull&Bear",
          price:"$54",
          star:"4.0"
        },
        {
          id:"4",
          img:"https://preview.colorlib.com/theme/eiser/img/product/feature-product/f-p-1.jpg.webp",
          name:"NIKE LATEST SNEAKER",
          category:"Shoes",
          brand:"LC Waikiki",
          price:"$20",
          star:"3.6"
        },
        {
          id:"5",
          img:"https://preview.colorlib.com/theme/eiser/img/product/new-product/n2.jpg.webp",
          name:"MEN'S DENIM JEANS",
          category:"Jeans",
          brand:"Pull&Bear",
          price:"$150",
          star:"4.4"
        },
        {
          id:"6",
          img:"https://preview.colorlib.com/theme/eiser/img/product/new-product/n3.jpg.webp",
          name:"MEN'S LATEST JEANS",
          category:"Jeans",
          brand:"NewYorker",
          price:"$30",
          star:"4.1"
        },
        {
          id:"7",
          img:"https://preview.colorlib.com/theme/eiser/img/product/new-product/n4.jpg.webp",
          name:"ADIDAS SPORT SHOE",
          category:"Shoes",
          brand:"Zara",
          price:"$100",
          star:"4.3"
        },
        {
          id:"8",
          img:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/i7.jpg.webp",
          name:"WOMEN'S BAG",
          category:"Backpacks",
          brand:"Pull&Bear",
          price:"$48",
          star:"4.2"
        },
        {
          id:"9",
          img:"https://ciseco-reactjs.vercel.app/static/media/17.7701cf9446a6b588de67.png",
          name:"RAY NYLON BACKPACK",
          category:"Backpacks",
          brand:"Polo",
          price:"$400",
          star:"4.4"
        },
        {
          id:"10",
          img:"https://ciseco-reactjs.vercel.app/static/media/2.0fda32f45e4cd5e368ea.png",
          name:"ROUND BACKLE BELT",
          category:"New Arrivals",
          brand:"LC Waikiki",
          price:"$250",
          star:"4.1"
        },
        {
          id:"11",
          img:"https://ciseco-reactjs.vercel.app/static/media/16.5ed8bd8a65af67fd6c5c.png",
          name:"WAFFLE KNIT BEANIE",
          category:"New Arrivals",
          brand:"NewYorker",
          price:"$180",
          star:"4.5"
        },
        {
          id:"12",
          img:"https://ciseco-reactjs.vercel.app/static/media/4.7342ded3cf1426f3ce5e.png",
          name:"TRAVEL PET CARRIER",
          category:"New Arrivals",
          brand:"Zara",
          price:"$30",
          star:"4.1"
        },
        {
          id:"13",
          img:"https://ciseco-reactjs.vercel.app/static/media/5.9ddc0dff360795c6f5b5.png",
          name:"LEATHET GLOVES",
          category:"New Arrivals",
          brand:"Polo",
          price:"$120",
          star:"4.6"
        },
        {
          id:"14",
          img:"https://ciseco-reactjs.vercel.app/static/media/6.ed4616e785835c927ad1.png",
          name:"HOODIE SWEATSHIRT",
          category:"New Arrivals",
          brand:"LC Waikiki",
          price:"$50",
          star:"4.4"
        },
        {
          id:"15",
          img:"https://ciseco-reactjs.vercel.app/static/media/9.838d27ae66ef44d4a73b.png",
          name:"WOOL CASHMARE JACHKET",
          category:"Jeans",
          brand:"Zara",
          price:"$40",
          star:"4.1"
        },
        {
          id:"16",
          img:"https://ciseco-reactjs.vercel.app/static/media/8.cb062df1bb925627f03d.png",
          name:"ELLA LEATHER TOTE",
          category:"New Arrivals",
          brand:"NewYorker",
          price:"$70",
          star:"4.7"
        }
      ]


    return <ShopContext.Provider value={{featuredProducts}}>
        {props.children}
    </ShopContext.Provider>

}
export default ShopProvider;