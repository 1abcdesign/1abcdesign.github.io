import { flatPhotos } from './flatPhotos';

export const groupPhotos = (arr, groupSize = 10) => {
  const grouped = [];
  for (let i = 0; i < arr.length; i += groupSize) {
    grouped.push(arr.slice(i, i + groupSize));
  }
  return grouped;
};

export const groupedPhotos = groupPhotos(flatPhotos);