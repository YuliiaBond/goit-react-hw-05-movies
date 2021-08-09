import React, {useState} from 'react';
import style from './Searchbar.module.css';

export default function Searchbar ({onSubmit}) {
    const [query, setQuery] = useState('');
    
    const handleChange = event => {
        setQuery(event.currentTarget.value.toLowerCase());
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (query.trim() === '') {
            alert('Enter your request, please!');
            return;
        }
        onSubmit(query);
        
    }

        return (
    <header className={style.Searchbar}>
                <form className={style.SearchForm} onSubmit={handleSubmit}>
                    <button type="submit" className={style.SearchForm_button}>
                        <span className={style.SearchForm_button_label}>Search</span>
            </button>

            <input
                        className={style.SearchForm_input}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search movies"
                value={query}
                onChange={handleChange}
            />
        </form>
    </header>
    )

};