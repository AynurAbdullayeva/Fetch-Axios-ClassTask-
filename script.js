
import {
    getAllCategories,
    getCategoryByID,
    postCategory,
    editCategoryByID,
    deleteCategoryByID,
  } from "./API/httprequests.js";

  let supplierTable=document.querySelector(".table-group-divider")
  
  
getAllCategories().then(res=>{
    let supplier
    console.log(res)
    res.forEach(element => {
        supplier+=`
        <tr>
        <th scope="row">${element.id}</th>
        <td>${element.companyName}</td>
        <td>${element.contactName}</td>
        <td>${element.contactTitle}</td>
        <td>${element.address.region}</td>
      </tr>
      <tr>
        
        `
        supplierTable.innerHTML=supplier
    });
})

