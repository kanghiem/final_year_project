import React from 'react'

const SearchPage = () => {
  return (
    <div className='search--content hidden'>

        <h3 className='text--title'>Search</h3>
        <div className="input--search">
            <div className="input--item">
                <input type="text" placeholder='Search' className="search--input" />
            </div>
            <div className="input--icon">
          <i className="fa-sharp fa-solid fa-magnifying-glass " />

            </div>
        </div>

    </div>
  )
}

export default SearchPage