import React from 'react';
import moksto from '../images/moksto.png';
import travel from '../images/travel1.png';
import floral from '../images/floral.png';
import manmun from '../images/manmun.png';
import nalabolu from '../images/nalabolu.png';
import cargo from '../images/cargo.png';
import bikini from '../images/bikini.png';
import hotel from '../images/hotel.png';
import tihub from '../images/tihub.png';

// Project data
const projectData = [
  {
    title: "Tourism Website",
    image: travel,
    link: "https://tourism-frontend-flame.vercel.app/"
  },
  {
    title: "MokstoSolutions",
    image: moksto,
    link: "https://mokstosolutions.tech/"
  },
  {
    title: "Floral Designs",
    image: floral,
    link: "https://floral-client-six.vercel.app/"
  },
  {
    title: "Manmun Enterprises",
    image: manmun,
    link: "https://manmun.tech/"
  },
  {
    title: "Nalabolu IT Training",
    image: nalabolu,
    link: "https://ittrainingclient.vercel.app/"
  },
  {
    title: "Cargo Transport",
    image: cargo,
    link: "https://cargo-client-gamma.vercel.app/"
  },
  {
    title: "Bikini Modeling",
    image: bikini,
    link: "https://bikini-gamma.vercel.app/"
  },
  {
    title: "TechInfoHub",
    image: tihub,
    link: "https://techinfohub.online/"
  },
  {
    title: "Hotel Booking",
    image: hotel,
    link: "https://hotel-client-lime.vercel.app/"
  },
  
];

function ProjectCards() {
  return (
    <div className="container my-5">
    {/* Cards Container */}
    <div className="row">
      {projectData.map((project, index) => (
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={index}>
          <div className="card shadow-lg border-0 rounded-3 overflow-hidden" style={{ transition: 'transform 0.3s ease' }}>
            <div className="card-img-wrapper" style={{ position: 'relative', height: '200px' }}>
              <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease',
                  transform: 'scale(1)', // Ensure it starts at 1 scale
                }}
              />
            </div>
            <div className="card-body d-flex flex-column justify-content-between" style={{ height: '150px' }}>
              <h5 className="card-title text-center" style={{ fontSize: '1.25rem', fontWeight: '500' }}>
                {project.title}
              </h5>
              <div className="d-flex justify-content-center mt-auto">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-sm px-4">
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  );
}

export default ProjectCards;
