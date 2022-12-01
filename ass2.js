const root = document.getElementById("root")
const item = [ 
     {name: 'Bike', price:100},
     {name: 'TV', price:200}, 
     {name: 'Album', price:10}, 
     {name: 'Book', price:5}, 
     {name: 'Phone', price:500}, 
     {name: 'Computer', price:1000},
     ];

     const cheapone =  item.filter( items =>{
        return items.price <= 100
     })
     console.log("cheap product:");
     console.log(cheapone)

     const expensive = item.filter( items =>{
        return items.price > 100
     })
     console.log("expensive");
     console.log(expensive)

     const fullprice = item.reduce( (currentTotal,item) => {
        return item.price+currentTotal
     },0)

     console.log('fullprice')
     console.log(fullprice)

     const fullpricewithoutdollar = item.filter(items => {
        return items.price > 10
     }).reduce((currentTotal,items) =>{
        return items.price + currentTotal
     },0)

     console.log('full price with product under the 10 dollar')
     console.log(fullpricewithoutdollar)