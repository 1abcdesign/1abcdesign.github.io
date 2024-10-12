const photos = [
  'photo_2024-09-06_15-03-20 (2).jpg',
  'photo_2024-09-06_15-03-20.jpg',
  'photo_2024-09-06_15-03-28.jpg',
  'photo_2024-09-06_15-03-41 (2).jpg',
  'photo_2024-09-06_15-03-41 (3).jpg',
  'photo_2024-09-06_15-03-41 (4).jpg',
  'photo_2024-09-06_15-03-41.jpg',
  'photo_2024-09-06_15-03-48 (2).jpg',
  'photo_2024-09-06_15-03-48 (3).jpg',
  'photo_2024-09-06_15-03-48.jpg',
  'photo_2024-10-11_13-36-09.jpg',
  'photo_2024-10-11_13-36-44.jpg',
  'photo_2024-10-11_13-37-04.jpg',
  'photo_2024-10-11_13-37-47.jpg',
  'photo_2024-10-11_13-38-22.jpg',
  'photo_2024-10-11_13-38-42.jpg',
  'photo_2024-10-11_13-39-58.jpg',
  'photo_2024-10-11_13-40-23.jpg',
  'photo_2024-10-11_13-40-45.jpg',
  'photo_2024-10-11_13-41-11.jpg',
  'photo_2024-10-11_13-47-52 (2).jpg',
  'photo_2024-10-11_13-47-52 (3).jpg',
  'photo_2024-10-11_13-47-52.jpg',
  'photo_2024-10-11_13-47-53 (2).jpg',
  'photo_2024-10-11_13-47-53 (3).jpg',
  'photo_2024-10-11_13-47-53 (4).jpg',
  'photo_2024-10-11_13-47-53.jpg',
  'photo_2024-10-11_13-47-54 (2).jpg',
  'photo_2024-10-11_13-47-54 (3).jpg',
  'photo_2024-10-11_13-47-54 (4).jpg',
  'photo_2024-10-11_13-47-54.jpg',
  'photo_2024-10-11_13-47-55 (2).jpg',
  'photo_2024-10-11_13-47-55.jpg',
  'photo_2024-10-11_13-47-56 (2).jpg',
  'photo_2024-10-11_13-47-56.jpg',
  'photo_2024-10-11_13-47-57 (10).jpg',
  'photo_2024-10-11_13-47-57 (11).jpg',
  'photo_2024-10-11_13-47-57 (2).jpg',
  'photo_2024-10-11_13-47-57 (3).jpg',
  'photo_2024-10-11_13-47-57 (4).jpg',
  'photo_2024-10-11_13-47-57 (5).jpg',
  'photo_2024-10-11_13-47-57 (6).jpg',
  'photo_2024-10-11_13-47-57 (7).jpg',
  'photo_2024-10-11_13-47-57 (8).jpg',
  'photo_2024-10-11_13-47-57 (9).jpg',
  'photo_2024-10-11_13-47-57.jpg',
  'photo_2024-10-11_13-47-58 (2).jpg',
  'photo_2024-10-11_13-47-58 (3).jpg',
  'photo_2024-10-11_13-47-58 (4).jpg',
  'photo_2024-10-11_13-47-58 (5).jpg',
  'photo_2024-10-11_13-47-58 (6).jpg',
  'photo_2024-10-11_13-47-58 (7).jpg',
  'photo_2024-10-11_13-47-58.jpg'
]

// Base directory where your photos are stored
const basePath = './projects/';

// Create array of JSON objects
const photoObjects = photos.map((photo, index) => {
  return {
    title: `Image ${index + 1}`,
    content: `<div style="background-image: url('${basePath}${photo}'); width: 100vw; height: 31vh; background-size: cover; background-position: center;"></div>`
  };
});

export default photoObjects