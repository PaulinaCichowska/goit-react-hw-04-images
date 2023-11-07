import css from './Button.module.css'
import PropTypes from 'prop-types';
export const Button = ({ loadMore, children }) => (
    <>
        <button className={css.button} onClick={loadMore}>{children}</button>

    </>
)
Button.propTypes = {
    loadMore: PropTypes.func,
    children: PropTypes.node,
}