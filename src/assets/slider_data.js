const photos = [
  "a01.jpg",  "a09.jpg",  "b07.jpg",  "c05.jpg",  "d03.jpg",
  "a02.jpg",  "a10.jpg",  "b08.jpg",  "c06.jpg",  "d04.jpg",
  "a03.jpg",  "b01.jpg",  "b09.jpg",  "c07.jpg",  "d05.jpg",
  "a04.jpg",  "b02.jpg",  "b10.jpg",  "c08.jpg",  "d06.jpg",
  "a05.jpg",  "b03.jpg",  "c01.jpg",  "c09.jpg",  "d07.jpg",
  "a06.jpg",  "b04.jpg",  "c02.jpg",  "c10.jpg",  "d08.jpg",
  "a07.jpg",  "b05.jpg",  "c03.jpg",  "d01.jpg" , "d09.jpg",
  "a08.jpg" , "b06.jpg" , "c04.jpg" , "d02.jpg",  "d10.jpg"
]

// Base directory where your photos are stored
const BASE_URL = import.meta.env.BASE_URL

// Create array of JSON objects
const photoObjects = photos.map((photo, index) => {
  return {
    title: `Image ${photo} ${index + 1}`,
    content: `<div style="background-image: url('${BASE_URL}${photo}'); width: 100vmin; height: calc(36 * var(--usable-vh)); background-size: cover; background-position: center;"></div>`
  };
});

export default photoObjects