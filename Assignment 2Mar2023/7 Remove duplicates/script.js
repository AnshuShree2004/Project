//removing duplicates from the cart
var arr = ["apple", "mango", "apple",  

            "orange", "mango", "mango"]; 

      

    function removeDuplicates(arr) { 

        return arr.filter((item,  

            index) => arr.indexOf(item) === index); 

    } 
console.log(removeDuplicates(arr))
