//React...
import {useContext, useState} from 'react';
import { MyContext } from '../../App';

//React icons...
import {HiMagnifyingGlass} from "react-icons/hi2"

//Styles...
import "./itemsPage.scss"



const ItemsPage = () => {
    const {currShoppingList, setCurrShoppingList, inventory, setShowSingleItem, setPath} = useContext(MyContext);


    //user input when searching...
    const [filterInput, setFilterInput] = useState<string>("")
    const handleFilter = (e: any) => {
        //Chnages the filterInput state...
        setFilterInput(e.target.value)
    }
    
    //Actually filters the items...
    const filteredArr = Object.keys(inventory).filter((category: string) => {
        return inventory[category].some((item: string) =>
        item.toLowerCase().includes(filterInput.toLowerCase())
        );
    });
    

    //Function that adds items to right side component which displays current active shopping list...
    const addToShoppingList = (listItem: string, category: string) => {
        if(![...Object.values(currShoppingList).flat()].includes(listItem)) {
            setCurrShoppingList((prev: any) => ({
                ...prev,
                [category]: [...(prev[category] || []), listItem]
            }))
        }else {
            const newArr = currShoppingList[category].filter(item => item !== listItem)

            setCurrShoppingList((prev: any) => ({
                ...prev,
                [category]: newArr
            }))
        }
    }


    
    return (
        <div className='items-page'>
            <div className='search-bar-wrap'>
                <h1><span>Shoppingify</span>allows you take your shopping list wherever you go</h1>
                <div>
                    <HiMagnifyingGlass/>
                    <input 
                        onChange={handleFilter}
                        placeholder='search item'
                    />
                </div>
            </div>
            {
                filteredArr.map((category: string) => (
                    <div key={category} className='item-category'>
                        <h1>{category} ({inventory[category].length})</h1>
                        <ul className='grid-list'>
                            { 
                                inventory[category]
                                    .filter((listItem: string) => 
                                        listItem.toLowerCase().includes(filterInput.toLowerCase())
                                    )
                                    .map((listItem: string) => (
                                        <li key={listItem}>
                                            <span 
                                                onClick={() => {
                                                    setShowSingleItem(true)
                                                    setPath({category: category, name: listItem})
                                                }}
                                            >
                                                {listItem}
                                            </span>
                                            <button 
                                                className={[...Object.values(currShoppingList).flat()].includes(listItem) ? "selected" : ""}
                                                onClick={() => {
                                                    addToShoppingList(listItem, category)
                                                }}
                                            >
                                                +
                                            </button>
                                        </li>
                                    ))
                            }
                            
                        </ul>
                    </div>
                ))
            }
        </div>
    );
};

export default ItemsPage;