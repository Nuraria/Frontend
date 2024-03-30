import './Header.css';
import { Link } from 'react-router-dom';
import React from 'react';
import cart from '../../assets/svg/group.svg';
import smile from '../../assets/svg/smile.svg';
import add from '../../assets/svg/add.svg';

function Header({ position, isAdmin }) {
  const [categoryId, activeCategory] = React.useState(0);

  const setCategoryId = (index) => {
    activeCategory(index);
    console.log(categoryId);
  };

  return (
    <header>
      <div className="bg-cart">
        <div className="cart">
          <img src={cart} alt="" />
          <span className="text">Корзина</span>
        </div>
      </div>
      <div style={{ paddingLeft: '70px', display: 'flex', gap: '20px' }}>
        {position.map(({ title, color }, index) => (
          <div key={index} className="block_header" onClick={() => setCategoryId(index)}>
            <img
              className="store"
              src={index === categoryId ? smile : ''}
              style={{
                backgroundColor: index === categoryId ? 'white' : color,
                textIndent: '-9999px',
              }}
            />
            <Link to="" className={index === categoryId ? 'text active' : 'text'}>
              {title}
            </Link>
          </div>
        ))}
      </div>
      {isAdmin && (
        <div className="block_header">
          <div className="store" style={{ backgroundColor: 'transparent' }}>
            <img className="addImg" src={add} alt="" />
          </div>
          <Link to="#" className="text">
            Добавить
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
