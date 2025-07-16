import { Header } from "../components/header";
import Footer from "../components/footer"; // ✅ CORRECT
import { SearchResult } from "./searchResult";

  const SearchPage=(params)=>{
    const{text,handleSearchText}=params;
  return(
    <div>
      <Header text={text} handleSearchText={handleSearchText} />
      <main>
        <p>
          Search result for: <span className="text-red-800 font-bold">{text}</span>
        </p>
        <SearchResult searchQuery={text}/>
      </main>
      <Footer/>
    </div>
  );
};

export{SearchPage};