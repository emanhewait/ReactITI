import { Component } from "react";
import { ProductItem } from "./ProductItem";

export class MyProduct extends Component{
    ProductList=[
        {
             id:1,
             ProductName:"Lap Top",
             Price:"200$",
             Quantity:"3",
             Img:"https://images.pexels.com/photos/7610459/pexels-photo-7610459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",  
        },
        {
            id:2,
            ProductName:"Computer",
            Price:"300$",
            Quantity:"5",  
            Img:"https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=600",
       },
       {
        id:3,
        ProductName:"Mobile",
        Price:"800$",
        Quantity:"4",  
        Img:"https://images.pexels.com/photos/1156684/pexels-photo-1156684.jpeg?auto=compress&cs=tinysrgb&w=600",
     },
     {
        id:4,
        ProductName:"Head Phone",
        Price:"400$",
        Quantity:"1",
        Img:"https://images.pexels.com/photos/3587477/pexels-photo-3587477.jpeg?auto=compress&cs=tinysrgb&w=600",  
   },
   {
       id:5,
       ProductName:"Music",
       Price:"700$",
       Quantity:"3",  
       Img:"https://images.pexels.com/photos/11333878/pexels-photo-11333878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
   id:6,
   ProductName:"Camera",
   Price:"900$",
   Quantity:"2",  
   Img:"https://images.pexels.com/photos/3014826/pexels-photo-3014826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
},
       
    ];
    render(){
        return(
            <div className="bg-light p-5 text-center">
                <div className="container">
                    <h2>Our Product </h2>
                    <div className="row">
                    {
                        this.ProductList.map((item ,index)=>{
                            return <ProductItem  key={item.id} myProduct={item}/>;
                        })
                    }
                    </div>
                    
                </div>
            </div>
        );
    }
}