import { RotatingLines } from 'react-loader-spinner'
import css from './Loader.module.css';

export default function Loader() {
    return (
        <div className={css.container}>
            <RotatingLines className={css.icon} height="40" width="40"/>
        </div>
    )
}