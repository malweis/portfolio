import React, { useEffect, useState } from 'react';
import ProjectsItem from './ProjectsItem';

function Projects() {
  const [pokemonImages, setPokemonImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const projectsData = [
    [
      { img: pokemonImages[0], title: 'Project 1' },
      { img: pokemonImages[1], title: 'Project 2' },
      { img: pokemonImages[2], title: 'Project 3' },
    ],
    [
      { img: pokemonImages[3], title: 'Project 4' },
      { img: pokemonImages[4], title: 'Project 5' },
      { img: pokemonImages[5], title: 'Project 6' },
    ],
    [
      { img: pokemonImages[6], title: 'Project 7' },
      { img: pokemonImages[7], title: 'Project 8' },
      { img: pokemonImages[8], title: 'Project 9' },
    ],
  ];

  useEffect(() => {
    const getPokemonSprites = async () => {
      const pokemonIds = [1, 4, 7, 25, 37, 52, 63, 78, 133];
      const spriteUrls = await Promise.all(
        pokemonIds.map(async (id) => {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
          const data = await response.json();
          return data.sprites.front_default;
        })
      );
      setPokemonImages(spriteUrls);
    };
    getPokemonSprites();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderProjects = () => {
    return projectsData[currentPage - 1].map((project, index) => (
      <ProjectsItem key={index} img={project.img} title={project.title} />
    ));
  };

  const renderPagination = () => {
    const totalPages = 3;
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return (
      <div className="flex justify-center my-8">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={`mx-2 py-2 px-4 rounded-lg ${
              currentPage === number ? 'bg-[#001b5e] text-white' : 'bg-gray-200'
            }`}
          >
            {number}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      
      <div className="grid grid-cols-3 gap-12">{renderProjects()}</div>
      {renderPagination()}
    </div>
  );
}

export default Projects;
