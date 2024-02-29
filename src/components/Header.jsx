import style from './Header.module.css';
import rocket from '../assets/images/rocket.png';

export function Header() {
   return (
      <header className={style.header}>
         <img src={rocket} alt="Logotipo" />
         <span className={style.to}>to</span>
         <span className={style.do}>do</span>
      </header>
   );
}
