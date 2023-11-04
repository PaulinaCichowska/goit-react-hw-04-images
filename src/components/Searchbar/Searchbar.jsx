import css from "./Searchbar.module.css"
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit, value, onChange, }) => (
    <header className={css.searchbar}>
        <form onSubmit={onSubmit} className={css.form} >
            <label className={css.label} htmlFor="myInput">Search images</label>
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

Searchbar.propTypes = {
    onSubmit: PropTypes.func,
    value: PropTypes.string,
    onChange: PropTypes.object,
}