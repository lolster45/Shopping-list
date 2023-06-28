//React...
import { useContext, useEffect } from 'react';

//Components...
import { MyContext } from '../../App';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from "recharts"

//Styles...
import "./Statistics.scss"



const Statistics = () => {
    //Helpers functions for dates...
        const date = new Date();
        const getMonthName = (monthNum: any) => {
        switch(monthNum) {
            case 0: 
            monthNum = "Jan"
            break;
            case 1:
            monthNum = "Feb"
            break;
            case 2:
            monthNum = "March"
            break;
            case 3:
            monthNum = "April"
            break;
            case 4:
            monthNum = "May"
            break;
            case 5:
            monthNum = "June"
            break;
            case 6:
            monthNum = "July"
            break;
            case 7:
            monthNum = "Aug"
            break;
            case 8:
            monthNum = "Sept"
            break;
            case 9:
            monthNum = "Oct"
            break;
            case 10:
            monthNum = "Nov"
            break;
            case 11:
            monthNum = "Dec"
            break;
            default:
            console.log("bruh")
        }
        return monthNum
        }
        const getDaysInMonth = (year: number, month: number) => {
        const date = new Date(year, month - 1, 1);
        date.setMonth(date.getMonth() + 1);
        date.setDate(date.getDate() - 1);
        return date.getDate();
        }
        const {history, statData, setStatData, singleNumberDayState, setSingleNumberDayState} = useContext(MyContext);

        
    //When history changes or first starts up, it gets the number of obj in history and displays it...
        useEffect(() => {    
            //Changes the monthly uses in the statistics in the yearly graph...
            const newObjDateData = {month: getMonthName(date.getMonth()), created: history.length}
            setStatData(prev => {
                const newArray = [...prev];
                newArray[date.getMonth()] = newObjDateData;
                return newArray;
            })
        
            //Creates an array with x number of objects representing the number of days in current month...
            const numberOfDays = getDaysInMonth(date.getFullYear(), date.getMonth());
        
            if(!singleNumberDayState.length) {
            const array1 =
                Array.from({length: numberOfDays}, (_, i: number) => ({day: i + 1, created: 0}));
            
                setSingleNumberDayState(array1)
            } else {
            const newObj = {day: date.getDate(), created: history.length}
        
            setSingleNumberDayState(prev => {
                const newArray = [...prev];
                newArray[date.getDate() - 1] = newObj;
                return newArray;
            })
        
            }
        }, [history])


    return (
        <div className='statics-page-wrap'>
            <h1>Daily Summary</h1>
            {singleNumberDayState &&
            <ResponsiveContainer  height={260}  width="95%">
                <LineChart    
                    data={singleNumberDayState}
                    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                >
                    <Line type="monotone" dataKey="created" stroke="orange" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="3 3"/>
                    <XAxis dataKey="day"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                </LineChart>
            </ResponsiveContainer>
            }
            <h1>Monthly Summary  - {getMonthName(date.getMonth())}</h1>
            <ResponsiveContainer  width="95%"  height={260}>
                <LineChart  
                    data={statData}
                    margin={{ top: 0, right: 5, bottom: 0, left: 0 }}
                >
                    <Line type="monotone" dataKey="created" stroke="orange" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="3 3"/>
                    <XAxis dataKey="month"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;