


export default function SearchResultList({results}) {

  

  return(
    <div className="search__list--wraper">
       {results.map((result,id) => {
        return <div className="serch--each__list" key={id}>{result.title}</div>
       })

       }
    </div>
  )
}