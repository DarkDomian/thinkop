import React, { useState, useEffect, Children, ReactNode } from 'react';
import { FaArrowRight } from "react-icons/fa";

type PaginatorProps = {
  children: ReactNode[];
};

const Paginator: React.FC<PaginatorProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [formStatus, setFormStatus] = useState<boolean[]>(Array(children.length).fill(false));

  // Сохранение состояния в localStorage при изменении formStatus
  useEffect(() => {
    localStorage.setItem('formStatus', JSON.stringify(formStatus));
  }, [formStatus]);

  // Восстановление состояния из localStorage при загрузке
  useEffect(() => {
    const savedStatus = localStorage.getItem('formStatus');
    if (savedStatus) {
      setFormStatus(JSON.parse(savedStatus));
    }
  }, []);

  // Функция для обновления состояния текущей формы
  const handleFormCompletion = (isComplete: boolean) => {
    const updatedStatus = [...formStatus];
    updatedStatus[currentIndex] = isComplete;
    setFormStatus(updatedStatus);
  };

  // Функции для перехода между формами
  const goToNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, children.length - 1));
    // if (formStatus[currentIndex]) {
    //   setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, children.length - 1));
    // } else {
    //   alert('Заполните все необходимые поля, чтобы продолжить.');
    // }
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className='w-full h-full overflow-y-auto md:min-w-screen md:min-h-screen md:overflow-hidden flex flex-col justify-between items-center'>
      <div className='justify-center max-w-6xl'>
        {React.cloneElement(children[currentIndex] as React.ReactElement, {
        onComplete: handleFormCompletion,
        })}
      </div>
      <div className="h-full flex-1 justify-center content-center">
        <div className="w-fit h-fit flex flex-row text-center content-center justify-center flex-shrink-0">
          {currentIndex === 0 ? <></> :
            <FaArrowRight className='h-7 w-7 p-2 m-2 rotate-180 self-center aspect-square ' onClick={goToPrev}/>
          }
          {Children.map(children, (_, index) => (
            <span
              className={`items-center w-11 h-11 aspect-square p-2 m-2 rounded-full text-lg ${index === currentIndex ? 'text-black border border-solid border-gray-500' : 'text-gray-500'}`}
            >{index + 1}</span>
          ))}
          {currentIndex === children.length - 1 ? <></> :
            <FaArrowRight className='self-center aspect-square h-7 w-7 p-2 m-2' onClick={goToNext}/>
          }
        </div>
      </div>
    </div>
  );
};

export default Paginator;
