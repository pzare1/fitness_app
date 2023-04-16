import React from "react";
import { BiBody } from 'react-icons/bi'
import { FiTarget } from 'react-icons/fi'
import { GiMuscularTorso } from 'react-icons/gi'
function Detail({ exerciseDetail }) {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  return (
    <div className="grid grid-cols-2 text-center align-middle items-center mt-20 p-10">
      <div>
        <img src={gifUrl} />
      </div>
      <div className=" flex justify-start flex-col">
        <h1 className="sm:text-xl text-md text-blue-500 font-extrabold text-left my-3">{name}</h1>
        <p className=" text-justify text-gray-600">
        If you want to strengthen {name}, you need to engage in regular physical
        activity that challenges your muscles. This can involve weightlifting,
        bodyweight exercises, or resistance training. It is also important to
        consume a balanced and nutritious diet that includes sufficient protein
        to support muscle growth and repair. Adequate rest and recovery time are
        also essential to allow your muscles to recover and grow. Remember to
        gradually increase the intensity and duration of your workouts, and vary
        your exercises to avoid hitting a plateau. Consistency is key, so make
        sure to commit to a regular exercise routine that works for you and fits
        your lifestyle.
        </p>
        <div className="flex flex-col">
        <div className="flex justify-start flex-row p-2 m-2 items-center text-center">
            <div className="text-blue-500 bg-blue-100 rounded-full p-2 w-auto text-center items-center sm:text-3xl text-md">
            <BiBody />
            </div>
            <p className="text-gray-500 mx-3">{bodyPart}</p>
        </div>
        <div className="flex justify-start flex-row p-2 m-2 items-center text-center">
            <div className="text-blue-500 bg-blue-100 rounded-full p-2 w-auto text-center items-center sm:text-3xl text-md">
            <FiTarget />
            </div>
            <p className="text-gray-500 mx-3">{target}</p>
        </div>
        <div className="flex justify-start flex-row p-2 m-2 items-center text-center">
            <div className="text-blue-500 bg-blue-100 rounded-full p-2 w-auto text-center items-center sm:text-3xl text-md">
            <GiMuscularTorso />
            </div>
            <p className="text-gray-500 mx-3">{equipment}</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Detail;
