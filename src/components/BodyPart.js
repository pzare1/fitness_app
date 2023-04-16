import React from 'react';

function BodyPart({ item, setbodyPart }) {
  const handleClick = () => {
    setbodyPart(item);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };
  return (
    <div
      className="p-4 w-[130px] cursor-pointer text-sm m-5 justify-center space-x-3 rounded-md text-center bg-blue-100 text-blue-500 text-md border-blue-600 border-spacing-1 border-2 border-opacity-5"
      onClick={handleClick}
    >
      {item}
    </div>
  );
}

export default BodyPart;
