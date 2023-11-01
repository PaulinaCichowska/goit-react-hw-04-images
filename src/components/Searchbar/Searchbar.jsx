export const Searchbar = ({ onSubmit, value, onChange, }) => (
    <header className="searchbar">
        <form onSubmit={onSubmit} className="form" >
            <button type="submit" className="button">
                <span className="button-label">Search</span>
            </button>

            <input
                name="search"
                onChange={onChange}
                value={value}
                className="input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
            />
        </form>
    </header>

)