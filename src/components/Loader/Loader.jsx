import css from './Loader.module.css'
import { Dna } from "react-loader-spinner";

export const Loader = () => (
    <div className={css.container}>
        <div className={css.dna}>
            <Dna
                height="200"
                width="300"
                ariaLabel="loading" />
        </div>
    </div>
)
