const axios = require('axios')
// you can use nodefetch or other stuff than axios too

const jsdom = require("jsdom");
const { JSDOM } = jsdom;



const getProductUrl= (product_id)=>`https://www.amazon.com/Razer-BlackShark-V2-Gaming-Headset/dp/${product_id}/ref=sr_1_1?_encoding=UTF8&sr=8-1`
async function getPrices(product_id){

    const productUrl=getProductUrl(product_id)
    const {data}= await axios.get(productUrl,{
        Headers:{
            Accept: 'text/html, */*; q=0.01',
            Host:'www.amazon.com',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
            'Cache-Control': 'no-store',
            'Upgrade-Insecure-Requests': '1'

        },
    })
    const dom = new JSDOM(data);
    console.log(dom.window.document.querySelector(".a-price  .a-offscreen").textContent); // "Hello world"
    

}

getPrices('B098LG3N6R')