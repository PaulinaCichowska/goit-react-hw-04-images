import css from './ImageGalleryItem.module.css'
export const ImageGalleryItem = ({ obj }) => (
    <>
        {
            obj.map((elem) => {
                const id = elem.id
                const link = `#${id}`
                return <li className={css.listItem} key={elem.id}>
                    <a href={link} >
                        <img src={elem.webformatURL} className={css.picture} alt={elem.tags} />
                    </a>
                </li>

            })}
    </>
)
