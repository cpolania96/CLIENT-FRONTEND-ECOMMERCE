import SearchIco from "../../../assets/svg/icon-search";

const SearchBar = () => {
    return (
        <div className="search">
            <input type="text" placeholder="Buscar" />
            <button>
                <SearchIco />
            </button>
        </div>
    )
}
export default SearchBar;