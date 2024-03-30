import React from 'react';
import './ModalStyle.css';
import done from '../../assets/svg/done.svg';
import arrowRed from '../../assets/svg/arrowRed.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setClose } from '../../store/slices/closeSlice';

const Modal = () => {
  const { closeValue } = useSelector((state) => state.closeSlice);
  const dispatch = useDispatch();
  const setClosed = () => {
    dispatch(setClose(!closeValue));
  };

  return (
    <>
      {closeValue && (
        <div className="modal">
          <div className="modal__content">
            <img src={arrowRed} alt="" onClick={() => setClosed()} />
            <div className="textArea">
              <span>ТОЧНО УДАЛИТЬ ?</span>
              <p>
                весь контент в данном <br /> разделе будет удален
              </p>
            </div>
            <img src={done} alt="" />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
