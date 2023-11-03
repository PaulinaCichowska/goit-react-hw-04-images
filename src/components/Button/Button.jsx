import css from './Button.module.css'
export const Button = ({ loadMore, children }) => (
    <>
        <button className={css.button} onClick={loadMore}>{children}</button>

    </>
)