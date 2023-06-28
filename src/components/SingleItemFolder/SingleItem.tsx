import React, {useContext} from 'react';

import "./SingleItem.scss"
import { MyContext } from '../../App';



const SingleItem = () => {

    const {path, setShowSingleItem, showSingleItem, sideInventory} = useContext(MyContext);



    return (
        <div className={showSingleItem ? "single-item-wrap active" : "single-item-wrap"}>
            <button onClick={() => setShowSingleItem(false)}>Back</button>
            {
                sideInventory[path.category]?.filter((x) => x.name === path.name)
                    .map((x, i:number) =>  (
                    <React.Fragment key={i}>
                        {x.url &&
                        <img 
                            src={x.url}
                            alt='image of item you selected'
                        />
                        }
                        <label>
                            Category:
                            <div>{path.category}</div>
                        </label>
                        <label>
                            Name: 
                            <div>{x.name}</div>
                        </label>
                        <label>
                            Note: 
                            <div>{x.note}</div>
                        </label>
                    </React.Fragment>
                    ))
            }

            
            
        </div>
    );
};

export default SingleItem;