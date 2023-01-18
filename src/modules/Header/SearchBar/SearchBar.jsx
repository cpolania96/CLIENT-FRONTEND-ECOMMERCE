import SearchIco from "../../../assets/svg/icon-search";

const SearchBar = () => {
    return (
        <div className="container-search">
            <div className="search-desktop">
                <input type="text" placeholder="Buscar" />
                <button>
                    <SearchIco />
                </button>
            </div>
            <div className="search-mobile">
                <button>
                    <SearchIco />
                </button>
            </div>
            <div />
        </div>
    )
}
export default SearchBar;