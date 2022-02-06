import React,{useState} from "react";
import { Dropdown,DropdowItem,DropdownMenu,DropdownToggle } from "reactstrap";
const Drop=()=>{
    const[dropdown,setDropdown]=useState(false);

    const abrir=()=>{
       setDropdown(!dropdown);
    }
    return(<div>
        <Dropdown isOpen={dropdown} toggle={abrir}>
<DropdownToggle>
    ejemplo
</DropdownToggle>
<DropdownMenu>
    <DropdowItem>item 1</DropdowItem>
    <DropdowItem>item 2</DropdowItem>
    <DropdowItem>item 3</DropdowItem>
</DropdownMenu>
</Dropdown>
</div>
    )

}

export default Drop