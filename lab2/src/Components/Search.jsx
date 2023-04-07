import React, { useState } from "react";

export default function Search() {
   let itemsList = [
        "Eman Osama ",
        "Shrouk Osama",
        "Layan",
       "Yasmeen",
        "Mohammed Osama "
    ]
    let [tempList, setListValue] = useState(itemsList);
    const getInputValue = (event) => {
        if(event.target.value === ""){
            setListValue(itemsList)
        }
        else{
            let temp = itemsList.filter((item)=>item.match(event.target.value))
            if(temp.length<=0) setListValue(["Not Found"])
            else setListValue(temp);
        }
    };

      return (
        <section className="container">
            <h1 className="text-center">My List </h1>
            <form className="row justify-content-center">
                <div className="mb-3 mt-5 col-4">
                <input type="text" 
                className="form-control p-2" 
                id="searchKey" 
                placeholder="Search Key" 
                name="searchKey"
                onChange={getInputValue}/>
                </div>
            </form>

            <div className="border my-5 p-5">
            <div className="row">
            {
            tempList.map((item, index) => {
              return <div className="border border-dark p-3 my-3">{item}</div>;
            })
            
            }
          </div>
            </div>

        </section>


      );
    }
  