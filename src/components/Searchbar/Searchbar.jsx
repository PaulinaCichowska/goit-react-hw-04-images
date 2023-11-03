import css from "./Searchbar.module.css"
export const Searchbar = ({ onSubmit, value, onChange, }) => (
    <header className={css.searchbar}>
        <form onSubmit={onSubmit} className={css.form} >
            <label className={css.label} for="myInput">Search images</label>
            <input
                id="myInput"
                name="search"
                onChange={onChange}
                value={value}
                className={css.input}
                type="text"
                autoComplete="off"
                autoFocus

            />
            <button type="submit" className={css.button}>
                <span className="button-label">Search</span>
            </button>
        </form>
    </header>

)