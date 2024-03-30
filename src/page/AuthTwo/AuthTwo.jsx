import React from 'react';
import './AuthTwo.scss';
import { Link } from 'react-router-dom';

const AuthTwo = () => {
  return (
    <div className="root-auth">
      <div className="form">
        <div className='form-part'>
          <div>
            <h1>Здравствуйте Александр!</h1>
            <p>Выберите раздел для редактирования или заполнения</p>
          </div>

          <div class="container">
            <input type="radio" name="slider" id="item-1" checked />
            <input type="radio" name="slider" id="item-2" />
            <input type="radio" name="slider" id="item-3" />
            <div class="cards">
              <label class="card" for="item-1" id="song-1"></label>
              <label class="card" for="item-2" id="song-2"></label>
              <label class="card" for="item-3" id="song-3"></label>
            </div>
          </div>
        </div>

        <footer className="logout"><Link to="/Auth">выйти из аккаунта</Link> </footer>
      </div>
    </div>
  );
};

export default AuthTwo;
