import seriesData from '../api/seriesData.json';
import { SeriesCard } from './SeriesCard';

const NetflixSeries = () => {
  return (
    <ul className="grid grid-three--cols">
      {seriesData.map((currentElement) => (
        <SeriesCard key={currentElement.key} currentElement={currentElement} />
      ))}
    </ul>
  );
}

export default NetflixSeries