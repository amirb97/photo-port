import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [photos] = useState([
    {
      name: 'Grocery aisle',
      category: 'commercial',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      photo: require('../../assets/small/commercial/0.jpg')
    },
    {
      name: 'Grocery booth',
      category: 'commercial',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      photo: require('../../assets/small/commercial/1.jpg')
    },
    {
      name: 'Building exterior',
      category: 'commercial',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      photo: require('../../assets/small/commercial/2.jpg')
    },
    {
      name: 'Restaurant table',
      category: 'commercial',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      photo: require('../../assets/small/commercial/3.jpg')
    },
    {
      name: 'Cafe interior',
      category: 'commercial',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      photo: require('../../assets/small/commercial/4.jpg')
    },
    {
      name: 'Cat green eyes',
      category: 'portraits',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      photo: require('../../assets/small/portraits/0.jpg')
    },
    {
      name: 'Green parrot',
      category: 'portraits',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      photo: require('../../assets/small/portraits/1.jpg')
    },
    {
      name: 'Yellow macaw',
      category: 'portraits',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      photo: require('../../assets/small/portraits/2.jpg')
    },
    {
      name: 'Pug smile',
      category: 'portraits',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      photo: require('../../assets/small/portraits/3.jpg')
    },
    {
      name: 'Pancakes',
      category: 'food',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      photo: require('../../assets/small/food/0.jpg')
    },
    {
      name: 'Burrito',
      category: 'food',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      photo: require('../../assets/small/food/1.jpg')
    },
    {
      name: 'Scallop pasta',
      category: 'food',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      photo: require('../../assets/small/food/2.jpg')
    },
    {
      name: 'Burger',
      category: 'food',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      photo: require('../../assets/small/food/3.jpg')
    },
    {
      name: 'Fruit bowl',
      category: 'food',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      photo: require('../../assets/small/food/4.jpg')
    },
    {
      name: 'Green river',
      category: 'landscape',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      photo: require('../../assets/small/landscape/0.jpg')
    },
    {
      name: 'Docks',
      category: 'landscape',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        photo: require('../../assets/small/landscape/1.jpg')
    },
    {
      name: 'Panoramic village by sea',
      category: 'landscape',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        photo: require('../../assets/small/landscape/2.jpg')
    },
    {
      name: 'Domestic landscape',
      category: 'landscape',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      photo: require('../../assets/small/landscape/3.jpg')
    },
    {
      name: 'Park bench',
      category: 'landscape',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      photo: require('../../assets/small/landscape/4.jpg')
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentPhotos = photos.filter(photo => photo.category === category);
  const [currentPhoto, setCurrentPhoto] = useState();

  const toggleModal = (image) => {
    setCurrentPhoto({...image});
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div>
      {isModalOpen && <Modal currentPhoto={currentPhoto} onClose={toggleModal}/>}
      <div className="flex-row">
        {currentPhotos.map((image) => (
          <img
            src={image.photo}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
