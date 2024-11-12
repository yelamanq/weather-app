import React from "react";
import currLocIcon from '../assets/images/location-icon.svg'

const Search = ({search, setSearch}) => {
    return (
        <div className="search">
            <input
                type="text"
                className="searchInput"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by city name.."

            />
            <div className="currLocButton">
                <img src={currLocIcon} alt="" className="currLocIcon" onClick={() => setSearch('Almaty')} />
            </div>
        </div>
    )
}

export default Search;