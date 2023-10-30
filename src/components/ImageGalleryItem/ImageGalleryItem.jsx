export const ImageGalleryItem = ({ obj }) => (
    <>
        {
            obj.map((elem) => {
                return <li className="gallery-item" key={elem.id}>
                    <img src={elem.webformatURL} alt={elem.tags} />
                </li>
            })}
    </>
)
