import React, {useState} from 'react';
import '../../style.css';
export default function Searchbar ({onClick}) {
    const [searchQuery, setSearchQuery] = useState('');
    
    const handleChange = event => {
        setSearchQuery(event.currentTarget.value.toLowerCase());
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (searchQuery.trim() === '') {
            alert('Enter your request, please!');
            return;
        }
        onClick(searchQuery);
        
    }

        return (
    <header className="Searchbar">
        <form className="SearchForm" onSubmit={handleSubmit}>
            <button type="submit" className="SearchForm-button">
                <span className="SearchForm-button-label">Search</span>
            </button>

            <input
                className="SearchForm-input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search movies"
                value={searchQuery}
                onChange={handleChange}
            />
        </form>
    </header>
    )

};