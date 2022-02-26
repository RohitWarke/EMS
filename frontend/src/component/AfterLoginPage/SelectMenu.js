import React, {useEffect, useState,use } from "react";
// import "./LoginRegister.css";
import { Link,useHistory } from "react-router-dom";
import axios from "axios";
import { url } from '../common/constants';

const SelectMenu = () => {
    const history=useHistory();
    const [addclass, setaddclass] = useState("");
    const [category, setcategory] = useState("ALL");
    const [subCategory, setsubCategory] = useState("ALL");
    const [menus, setMenus] = useState([]);

    // const init = () => {
    //     axios.get(url+"/menu")
    //         .then(Response => {
    //             console.log('Printing Menu data', Response.data);
    //             setMenus(Response.data);
    //         })
    //         .catch(error => {
    //             console.log('Something went wrong', error);
    //         })
    // }

    const [menulist, setmenulist] = useState([]);
    const [menu, setmenu] = useState({
        id: '',
        heading: ''
    });

    // const handleAddFormChange = (event) => {
    //     event.preventDefault();

    //     const fieldName = event.target.getAttribute("name");
    //     const fieldValue = event.target.value;
    //     console.log(fieldName);
    //     console.log(fieldValue);
    //     const newFormData = { ...menu };
    //     newFormData[fieldName] = fieldValue;

    //     setmenu(newFormData);
    // };

    const handleAddFormSubmit = (event) => {
        // console.log(event.id);
        // console.log(event.menuName);
        // const newContact = {
        //     id: event.id,
        //     menuName: event.menuName,
        //     category:event.category,
        //     subCategory:event.subCategory,
        //     price:event.price
        // };
        const newContact=event;
        // console.log(newContact);
        // console.log(newContact.id);
        const newContacts = [...menulist, newContact];
        setmenulist(newContacts);
    };
    const handleDeleteClick = (contactId) => {
        const newContacts = [...menulist];

        const index = newContacts.findIndex((contact) => contact.id === contactId);

        newContacts.splice(index, 1);

        setmenulist(newContacts);
    };

    // const [state, setstate] = useState([
    //     {
    //         id: 1,
    //         heading: "Book Event"
    //     },
    //     {
    //         id: 2,
    //         heading: "View Event"
    //     },
    //     {
    //         id: 3,
    //         heading: "Edit Event Information"
    //     }
    // ]);

    const showmenulist=()=>{
            axios.get(url+"/menucategory",{params:{category,subCategory}}).then(Response => {
                console.log('Printing Menu data', Response.data);
                setMenus(Response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }

    const submitMenu=()=>{
       localStorage.setItem('menulist',JSON.stringify(menulist));
       history.push("/customer/bookevent/selectmedia")
        // console.log(menulist)
        // axios.post(url+"/submitmenu",menulist).then(Response => {
        //     console.log('Printing Menu data', Response.data);
        //     setMenus(Response.data);

        // })
        // .catch(error => {
        //     console.log('Something went wrong', error);
        // })
    }
    useEffect(() => {
       showmenulist();
    }, []);

    return (
        <div className="forms-container">
            <div className="row col-12 py-5 text-white my-5">
                <div className="fw-bold pt-5 display-6">
                    Select Menu
                </div>
                <hr className="m-4 pt-1" />
                <div className="grid-container">
                    <div className="grid-child border border-white ">
                        <h4>Your Menu List</h4>
                        {menulist.map((info) => (
                            <div key={info.id}>
                                <div className="event__box py-1 my-2 px-2 border border-1 border-white d-flex justify-content-between">
                                    <h5 className="mx-2">{info.menuName}</h5>
                                    <button className="btn-warning mx-3" onClick={()=>handleDeleteClick(info.id)}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="grid-child">
                        <span className="row justify-content-center">
                            <table className="w-75 mb-3">
                                <thead>
                                    <tr>
                                        <th>
                                        <button type="submit" className="btn-warning mx-5 w-25" onClick={submitMenu}>submit</button>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <select name="category" id="category" className="input-fields-mod" onChange={(e) => { setcategory(e.target.value)}}>
                                                <option defaultValue={"ALL"}>All</option>
                                                <option value="VEG">Veg</option>
                                                <option value="NON_VEG">Non-Veg</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select name="subcategory" id="subcategory" className="input-fields-mod" onChange={(e) => { setsubCategory(e.target.value) }}>
                                                <option defaultValue={"ALL"}>All</option>
                                                <option value="ROTI">Roti's</option>
                                                <option value="CURRY">Curry's</option>
                                                <option value="DESERT">Deserts</option>
                                                <option value="DRINK">Drinks</option>
                                            </select>
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-primary" onClick={showmenulist}>search</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </span>
                        {menus.map((m) => (
                            <div key={m.id} >
                                <div className="event__box py-1 my-2 px-2 border border-1 border-white d-flex justify-content-between">
                                    {/* <h5 className="mx-2 border " >{m.id}</h5> */}
                                    <h5 className="mx-2 border " >{m.menuName}</h5>
                                    <h5 className="mx-2 border" >{m.price}</h5>
                                    {/* <h5 className="mx-2 border" >{m.category}</h5>
                                    <h5 className="mx-2 border" >{m.subCategory}</h5> */}
                                    <button type="submit" className="btn-warning mx-5 w-25" onClick={()=>handleAddFormSubmit(m)}>Add</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectMenu;