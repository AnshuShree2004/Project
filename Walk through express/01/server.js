http = require('http');
const port =3034
const host = 'localhost'

 const menProducts = [
 
    
    { id: 1, name: "Men's T-Shirt", brand:"ABC",price:"$19.99",color:"Blue",size:"M",catrgory:"Clothing"},

    { id: 1, name: "Men's T-Shirt", brand:"ABC",price:"$19.99",color:"Blue",size:"M",catrgory:"Clothing"},

    { id: 1, name: "Men's T-Shirt", brand:"ABC",price:"$19.99",color:"Blue",size:"M",catrgory:"Clothing"},

    { id: 1, name: "Men's T-Shirt", brand:"ABC",price:"$19.99",color:"Blue",size:"M",catrgory:"Clothing"},

    { id: 1, name: "Men's T-Shirt", brand:"ABC",price:"$19.99",color:"Blue",size:"M",catrgory:"Clothing"},

    { id: 1, name: "Men's T-Shirt", brand:"ABC",price:"$19.99",color:"Blue",size:"M",catrgory:"Clothing"},

    { id: 1, name: "Men's T-Shirt", brand:"ABC",price:"$19.99",color:"Blue",size:"M",catrgory:"Clothing"},

    { id: 1, name: "Men's T-Shirt", brand:"ABC",price:"$19.99",color:"Blue",size:"M",catrgory:"Clothing"},

    { id: 1, name: "Men's T-Shirt", brand:"ABC",price:"$19.99",color:"Blue",size:"M",catrgory:"Clothing"},

    { id: 1, name: "Men's T-Shirt", brand:"ABC",price:"$19.99",color:"Blue",size:"M",catrgory:"Clothing"},
  ];


  const womenProducts = [
 
    
    { id: 1, name: "Girl's T-Shirt", brand:"ABC",price:"$19.99",color:"Blue",size:"M",catrgory:"Clothing"},

    { id: 1, name: "Girl's T-Shirt", brand:"ABC",price:"$19.99",color:"Blue",size:"M",catrgory:"Clothing"},

    { id: 1, name: "Girl's T-Shirt", brand:"ABC",price:"$19.99",color:"Blue",size:"M",catrgory:"Clothing"},

    { id: 1, name: "Girl's T-Shirt", brand:"ABC",price:"$19.99",color:"Blue",size:"M",catrgory:"Clothing"},

    { id: 1, name: "Girl's T-Shirt", brand:"ABC",price:"$19.99",color:"Blue",size:"M",catrgory:"Clothing"},

    { id: 1, name: "Girl's T-Shirt", brand:"ABC",price:"$19.99",color:"Blue",size:"M",catrgory:"Clothing"},

    { id: 1, name: "Girl's T-Shirt", brand:"ABC",price:"$19.99",color:"Blue",size:"M",catrgory:"Clothing"},

    { id: 1, name: "Girl's T-Shirt", brand:"ABC",price:"$19.99",color:"Blue",size:"M",catrgory:"Clothing"}
  ]

  

const server = http.createServer((req,res) =>{
     if(req.url === '/') {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: 'Welcome to Men & Women Dummy Data' }));
      } else if (req.url === '/men') {
        res.statusCode = 200;
        res.end(JSON.stringify(menProducts));
      } else if (req.url === '/women') {
        res.statusCode = 200;
        res.end(JSON.stringify(womenProducts));
      } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'Page not found' }));
      }
    
})


server.listen(port,() =>{
    console.log(`Server running at ${host}:${port}`)
})