import React, { useState, useEffect, Children, ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "antd";

type PaginatorProps = {
  children: ReactNode[];
};

const Paginator: React.FC<PaginatorProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [formStatus, setFormStatus] = useState<boolean[]>(
    Array(children.length).fill(false)
  );

  useEffect(() => {
    localStorage.setItem("formStatus", JSON.stringify(formStatus));
  }, [formStatus]);
  useEffect(() => {
    const savedStatus = localStorage.getItem("formStatus");
    if (savedStatus) {
      setFormStatus(JSON.parse(savedStatus));
    }
  }, []);

  const handleFormCompletion = (isComplete: boolean) => {
    const updatedStatus = [...formStatus];
    updatedStatus[currentIndex] = isComplete;
    setFormStatus(updatedStatus);
  };

  return (
    <div className="w-full h-full overflow-y-auto md:min-w-screen md:min-h-screen md:overflow-hidden flex flex-col justify-between items-center">
      <div className="justify-center max-w-6xl">
        {React.cloneElement(children[currentIndex] as React.ReactElement, {
          onComplete: handleFormCompletion,
        })}
      </div>
      <div className="h-fit max-w-6xl w-full flex-1 relative flex flex-row justify-center content-center">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-fit h-fit flex flex-row text-center content-center justify-center flex-shrink-0">
          {currentIndex === 0 ? (
            <></>
          ) : (
            <FaArrowRight
              className="h-7 w-7 p-2 m-2 rotate-180 self-center aspect-square cursor-pointer"
              onClick={() => setCurrentIndex(currentIndex - 1)}
            />
          )}
          {Children.map(children, (_, index) => (
            <span
              onClick={() =>
                formStatus[index] || formStatus[index - 1]
                  ? setCurrentIndex(index)
                  : ""
              }
              className={`items-center w-11 h-11 aspect-square p-2 m-2 rounded-full text-lg ${
                index === currentIndex
                  ? "text-black border border-solid border-gray-500"
                  : "text-gray-500"
              } ${
                formStatus[index] || (formStatus[index - 1] && index !== currentIndex)
                  ? "cursor-pointer"
                  : "cursor-default"
              }`}
            >
              {index + 1}
            </span>
          ))}
          {currentIndex === children.length - 1 ? (
            <></>
          ) : (
            <FaArrowRight
              className={`self-center aspect-square h-7 w-7 p-2 m-2 ${
                formStatus[currentIndex]
                  ? "cursor-pointer fill-black"
                  : "fill-neutral-500"
              }`}
              onClick={() =>
                formStatus[currentIndex]
                  ? setCurrentIndex(currentIndex + 1)
                  : ""
              }
            />
          )}
        </div>
        <Button
          className="ml-auto self-start "
          onClick={() => setCurrentIndex(currentIndex + 1)}
          disabled={!formStatus[currentIndex]}
        >
          Следующий шаг <span className="font-black">&rarr;</span>
        </Button>
      </div>
    </div>
  );
};

export default Paginator;
