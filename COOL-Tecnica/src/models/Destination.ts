import { v4 as uuidv4 } from 'uuid';

class Destination {
  id?: string;
  name: string;
  country: string;
  state: string;
  description: string;
  image: string;

  constructor(
    id: string = uuidv4(),
    name: string,
    country: string,
    state: string,
    description: string,
    image: string
  ) {
    this.id = id;
    this.name = name;
    this.country = country;
    this.state = state;
    this.description = description;
    this.image = image;
  }

  storeData() {
    const localJSON = JSON.parse(localStorage.getItem('destinations') || '[]');

    localJSON.push(this);
    localStorage.setItem('destinations', JSON.stringify(localJSON));
  }
}

export default Destination;
export function getDestinationData() {
  return JSON.parse(localStorage.getItem('destinations') || '[]');
}
