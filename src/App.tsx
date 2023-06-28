//React...
import {useState, createContext } from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


//MyContext...
interface MyContextInterface {

  history: HistoryObjLayout[],
  setHistory: React.Dispatch<React.SetStateAction<HistoryObjLayout[]>>,

  inventory: InventoryLayout,
  setInventory: React.Dispatch<React.SetStateAction<InventoryLayout>>,

  statData: MonthlyUse[],
  setStatData: React.Dispatch<React.SetStateAction<MonthlyUse[]>>,

  
  sideInventory: SideInventory,
  setSideInventory: React.Dispatch<React.SetStateAction<SideInventory>>,

  path: PathInt,
  setPath: React.Dispatch<React.SetStateAction<PathInt>>,

  showAddItems: boolean,
  setShowAddItems: React.Dispatch<React.SetStateAction<boolean>>,

  showSingleItem: boolean,
  setShowSingleItem: React.Dispatch<React.SetStateAction<boolean>>,

  showMobileM: boolean,
  setShowMobileM: React.Dispatch<React.SetStateAction<boolean>>

  currShoppingList: CurrShoppingListInt,
  setCurrShoppingList: React.Dispatch<React.SetStateAction<CurrShoppingListInt>>,

  singleNumberDayState: DatesInMonth[],
  setSingleNumberDayState: React.Dispatch<React.SetStateAction<DatesInMonth[]>>

}
export const MyContext = createContext<MyContextInterface>({
  history: [],
  setHistory: () => {},

  inventory: {},
  setInventory: () => {},

  statData: [],
  setStatData: () => {},
  
  sideInventory: {},
  setSideInventory: () => {},

  path: {category: "", name: ""},
  setPath: () => {},

  showAddItems: false,
  setShowAddItems: () => {},

  showSingleItem: false,
  setShowSingleItem: () => {},

  currShoppingList: {},
  setCurrShoppingList: () => {},

  showMobileM: false,
  setShowMobileM: () => {},

  singleNumberDayState: [],
  setSingleNumberDayState: () => {}
  
});

//Pages...
import ItemsPage from "./components/ItemsPageFolder/ItemsPage"
import History from "./components/HistoryFolder/History";
import Statistics from "./components/StatisticsFolder/Statistics";


//Components...
import SideNav from './components/SideNavFolder/SideNav'
import CreateList from "./components/CreateListFolder/CreateList";
import SingleList from "./components/SingleListInfoFolder/SingleList";


//Styles...
import "./index.scss"



interface CurrShoppingListInt {
  [category: string]: string[]
}
interface MonthlyUse {
  month: string,
  created: number
}
interface DatesInMonth {
  day: number,
  created: number
}
interface HistoryObjLayout {
  id: number,
  name: string,
  date: string,
  list: {
    [category: string]: string[]
  }

}
interface InventoryLayout {
  [category: string]: string[]
}
interface SideInventory {
  [category: string]: {name: string, note: string, url: string}[];
}
interface PathInt {
  category: string,
  name: string
}




function App() {
  //Current shopping list state that the users actively creates on home page...
    const [currShoppingList, setCurrShoppingList] = useState<CurrShoppingListInt>({})


  //Inventory for products...
    const [path, setPath] = useState<PathInt>({
      category: "",
      name: ""
    })
    const [inventory, setInventory] = useState<InventoryLayout>({
      Beverage: [
        "Sparkling Water",
      ],
      Electronics: [
        "Samsung Z fold 3",
        "Z flip 3",
        "Note 9"
      ],
      Drugs: [
        "Meth",
        "Advil",
        "Tylenol"
      ],
      Games: [
        "Horizon Zero Dawn",
        "The Withcher 3",
      ],
      Movies: [
        "Interstellar",
        "Looper",
        "Your Name",
        "Turbo",
        "Wall-e"
      ]
    })
    const [sideInventory, setSideInventory] = useState<SideInventory>({
      Beverage: [
        {name: "Sparkling Water", note: "this is some good sparkling water to drink", url: ""},
      ],
      Electronics: [
        {name: "Samsung Z fold 3", note: "the fold series", url: ""},
        {name: "Z flip 3", note: "flipity floppy", url: ""},
        {name: "Note 9", note: "this makes a good note pad", url: ""}
      ],
      Drugs: [
        {name: "Meth", note: "", url: ""},
        {name: "Advil", note: "", url: ""},
        {name: "Tylenol", note: "", url: ""}
      ],
      Games: [
        {name: "Horizon Zero Dawn", note: "", url: "https://www.cnet.com/a/img/resize/f6c94f246c067ce1bd7156004ffc58bd05d09ae8/hub/2017/01/30/9b192a20-eb5f-4d28-938e-4b719e04dc67/horizon-zero-dawnthumb.jpg?auto=webp&fit=cover&height=482&width=856"},
        {name: "The Withcher 3", note: "", url: ""}
      ],
      Movies: [
        {name: "Interstellar", note: "", url: ""},
        {name: "Looper", note: "", url: ""},
        {name: "Your Name", note: "", url: ""},
        {name: "Turbo", note: "", url: ""},
        {name: "Wall-e", note: "", url: ""}
      ]
    })


  //Statistical data about user activity data...
    const [statData, setStatData] = useState<MonthlyUse[]>([
      {month: "Jan", created: 0},
      {month: "Feb", created: 0},
      {month: "March", created: 0},
      {month: "April", created: 0},
      {month: "May", created: 0},
      {month: "Jun", created: 0},
      {month: "July", created: 0},
      {month: "Aug", created: 0},
      {month: "Sept", created: 0},
      {month: "Oct", created: 0},
      {month: "Nov", created: 0},
      {month: "Dec", created: 0},
    ])
    const [singleNumberDayState, setSingleNumberDayState] = useState<DatesInMonth[]>([])


  //History page state...
  const [history, setHistory] = useState<HistoryObjLayout[]>([])



//These states decide if the desired popup should show up...
  //Pop up for adding items to page...
    const [showAddItems, setShowAddItems] = useState<boolean>(false);

  //Single item pop up...
    const [showSingleItem, setShowSingleItem] = useState<boolean>(false);

  //Mobile phone menu pop up state...
    const [showMobileM, setShowMobileM] = useState<boolean>(false);


  return (
    <section className='app'>
      <Router>
        <MyContext.Provider 
          value={{currShoppingList, setCurrShoppingList, inventory, setInventory, history, setHistory, showAddItems, setShowAddItems, sideInventory, setSideInventory, showSingleItem, setShowSingleItem, path, setPath, statData, setStatData, singleNumberDayState, setSingleNumberDayState, showMobileM, setShowMobileM}}
        >
          <SideNav/>
          <div className="main-content-display">
            <Routes>
              <Route path="/" element={<ItemsPage/>}/>
              <Route path="/history" element={<History/>}/>
              <Route path="/history/:id" element={<SingleList/>}/>
              <Route path="/statistics" element={<Statistics/>}/>
            </Routes>
          </div>
          <CreateList/>       
        </MyContext.Provider>
      </Router>   
    </section>
  )
}

export default App