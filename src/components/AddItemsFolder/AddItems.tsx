//React...
import {useContext, useState} from 'react';

//Components...
import { MyContext } from '../../App';

//Styles...
import "./addItems.scss"


interface itemInfoStructure {
    category: string,
    name: string,
    note: string,
    url: string
}


const AddItems = () => {

    const {inventory, setShowAddItems, setInventory, setSideInventory} = useContext(MyContext);



    const [itemInfo, setItemInfo] = useState<itemInfoStructure>({
        category: "",
        name: "",
        note: "",
        url: ""
    })

    const handleChange = (e: any) => {
        setItemInfo(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }



    const handleSubmit = (e: any) => {
        e.preventDefault()

        if(itemInfo.category) {

            setInventory(prev => ({
                ...prev,
                [itemInfo.category]: [
                    ...(prev[itemInfo.category] || []),
                    itemInfo.name
                ]
            }))

            setSideInventory(prev => ({
                ...prev,
                [itemInfo.category]: [
                    ...prev[itemInfo.category],
                    {
                        name: itemInfo.name,
                        note: itemInfo.note,
                        url: itemInfo.url
                    }
                ]
            }))

            setItemInfo({
                category: "",
                name: "",
                note: "",
                url: ""
            })
            

        }


    }



    return (
        <form className='add-item-wrap' onSubmit={handleSubmit}>
             <h2>Add new product</h2>
            <label>
                Category:
                <input 
                    onChange={handleChange}
                    placeholder='Enter a category or choose one below' 
                    name='category'
                    value={itemInfo.category}
                />
            </label>
            <div className='categories-av-wrap'>
                {
                    Object.keys(inventory).map((cat, i:number) => (
                        <div 
                            key={i} 
                            onClick={() => setItemInfo(prev => ({...prev, category: cat}))}
                        >
                            {cat}
                        </div>
                    ))
                }

            </div>
            <label>
                Product Name:
                <input 
                    placeholder='Name' 
                    onChange={handleChange}
                    name = "name"
                    value={itemInfo.name}
                />
            </label>
            <label>
                Image (optional)
                <input 
                    placeholder='Enter URL' 
                    onChange={handleChange}
                    name = "url"
                    value={itemInfo.url}
                />
            </label>
            <label>
                Note (optional)
                <input 
                    placeholder='Enter a note' 
                    onChange={handleChange}
                    name = "note"
                    value={itemInfo.note}
                />
            </label>
            <div className='submit-or-cancel-wrap'>
                <button onClick={() => setShowAddItems(false)}>cancel</button>
                <button onClick={handleSubmit}>add</button>
            </div>
        </form>
    );
};

export default AddItems;