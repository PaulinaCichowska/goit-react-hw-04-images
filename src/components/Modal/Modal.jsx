import css from './Modal.module.css'

//właściwie nie ma tu modala tylko css udający modala// 
export const Modal = ({ obj }) => (
    <>
        {
            obj.map((elem) => {
                return < div key={elem.id}>
                    <a href="/#" className={css.lightbox} id={elem.id}>
                        <img className={css.lightboxImg} src={elem.largeImageURL} alt={elem.tags} ></img></a>
                </div>

            })}
    </>
)
