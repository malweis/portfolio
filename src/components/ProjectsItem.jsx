// ProjectsItem.js
import React from 'react';

const ProjectsItem = ({ img }) => {
  return (
    <div className="w-1/2 mx-auto shadow-xl shadow-gray-400 rounded-xl p-4 ">
      <img src={img} alt="/" className="rounded-xl w-full" />
      <div className="mt-4">
     
        <p className="pb-4 pt-2 text-center">Some quick example to put on the card title and make up the bulk of the cards content</p>
       
      </div>
    </div>
  );
};

export default ProjectsItem;
