
//React...
import {useContext} from 'react';
import {Link} from "react-router-dom"
import { MyContext } from '../../App';

//React icons...
import {IoIosArrowForward} from "react-icons/io"
import {BsCalendar4Week} from "react-icons/bs"

//Styles...
import "./History.scss"


const History = () => {

    const {history} = useContext(MyContext)

    return (
        <div className='history-wrap-page'>
            <h2>History page</h2>
            {!history.length &&
                <h2 className='history-empty'>Empty...</h2>
            }
            {history &&
                history.map((list) => {
                        return (
                            <Link 
                                className='link-btn'
                                key={list.id} 
                                to={`/History/${list.id}`}
                            >
                                <div className='single-list'>
                                    {list.name}
                                    <span>
                                        <BsCalendar4Week/>
                                        {list.date}
                                        <IoIosArrowForward/>
                                    </span>
                                </div>
                            </Link>
                        )
                    }   
                )
            }
            {/* {
                Object.keys(inventory).map(category => (
                    <div>
                        <h3>{category}</h3>
                        {
                            history[0]?.list.map(listItem => {
                                return (
                                    <div>{listItem.category === category ? listItem.name: null}</div>
                                )
                            })
                        }
                    </div>
                ))
            } */}
            {/* {
                history.map(listItem => {
                    return (
                        <div className='single-list'>
                            <h2>{listItem.name}</h2>

                        </div>

                    )
                })
            } */}
        </div>
    );
};

export default History;