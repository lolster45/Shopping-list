//React
import { useContext } from 'react';
import {useLocation, Link} from "react-router-dom"

//Components...
import { MyContext } from '../../App';

//Styles...
import "./singleList.scss"


const SingleList = () => {
    //Helpers...
    const location = useLocation()
    const {history} = useContext(MyContext)

    //Gets the item(object) that you have clicked on...
    const [filtered] = history.filter(list => list.id === +location.pathname.split("/")[2])


    return (
        <div className='single-list-wrap'>
            <Link to={"/"}>← Go back</Link>
            <h1>{filtered?.name}</h1>
            {filtered &&
                Object.keys(filtered?.list).map((x, i:number) => (
                    <div className='single-list-info' key={i}>
                        <h3>{x}</h3>
                        <ul className='single-list-grid'>
                            {
                                filtered?.list[x].map((items: string, i: number) => (
                                    <li key={i}>{items}</li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    );
};

export default SingleList;