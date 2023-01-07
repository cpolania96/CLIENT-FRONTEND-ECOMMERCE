import SearchIco from "../../../assets/svg/icon-search";

const Search = () => {
    return (
        <div className="search">
            <input type="text" placeholder="Buscar" />
            <button>
                <SearchIco />
            </button>
        </div>
    )
}
export default Search;