//React...
import {useState, useContext} from 'react';

//Components...
import {MyContext} from "../../App"
import AddItems from '../AddItemsFolder/AddItems';
import SingleItem from '../SingleItemFolder/SingleItem';

//Svg...
import BottleLogo from "../../assets/bottle.svg"

//Styles...
import "./CreateList.scss"


const CreateList = () => {

    const {currShoppingList, setCurrShoppingList, setHistory, showAddItems, setShowAddItems, showSingleItem, showMobileM} = useContext(MyContext);

    const [listName, setListName] = useState<string>("")


    const handleCreateList = () => {
        if(!listName || !Object.keys(currShoppingList).length) return;

        setHistory(prev => [...prev, 
            {
                id: Math.floor(Math.random() * 20000),
                date: new Date().toLocaleDateString(),
                name: listName,
                list: currShoppingList
            }
        ])

        setListName("")
        setCurrShoppingList({})


    }



    return (
        <div className={showMobileM ? "create-list-wrap active" : 'create-list-wrap'}>
            {showAddItems && <AddItems/>}
            <SingleItem/>
            {!showSingleItem &&
            <div className='items-display'>
                <aside>
                    <img src={BottleLogo} />
                    <div>
                        <p>Didn’t find what you need?</p>
                        <button onClick={() => setShowAddItems(true)}>Add Item</button>
                    </div>
                </aside>
                <h2>Shopping list</h2>
                {currShoppingList &&
                    [...Object.values(currShoppingList).flat()].map((item) => {
                        return (
                            <div className='user-items' key={item}>{item}</div>
                            )
                        })
                    }  
            </div>}
            {!showSingleItem &&
                <div className='input-btn-wrap'>
                    <input 
                        type='text' 
                        placeholder='Give your list a name...' 
                        onChange={(e) => setListName(e.target.value)}
                        value={listName}
                    />
                    <button onClick={handleCreateList}>Create</button>
                </div>
            }
        </div>
    );
};

export default CreateList;