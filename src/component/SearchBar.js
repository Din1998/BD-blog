import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { useRef,useState } from "react"


export default function SearchBar({setResults}) {

  const [input,setInput] = useState("")




  // Get data from api
  const getData =  (value) => {
     fetch(`https://server2023.vercel.app/api`)
    .then((response) => response.json())
    .then((json) => {

      const result = json.filter((blog) => {
        return(
          value &&
          blog &&
          blog.title &&
          blog.title.toLowerCase().includes(value)
        )

      })
      setResults(result);
    })
  }


  const handleSubmit = (value) => {
    setInput(value)
    getData(value)
  }


  const serchBarRef = useRef();
  const showSearchBar = () => {
    serchBarRef.current.classList.toggle("active__serchBar")
  }

  return(
    <>
      <div className="search__bar" >
        
        <input ref={serchBarRef} 
          type="text"
          placeholder="Search Here"     
          value={input}
          onChange = {(e) => handleSubmit(e.target.value)}
        />
           <FontAwesomeIcon className="search_icon" onClick={showSearchBar} icon={faSearch} />
      </div>
     
    </>
  )
    
}