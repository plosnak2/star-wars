// type for movie
export type IMovie = {
    title : string;
    release_date: Date;
    opening_crawl: string;
    episode_id: number;
    characters: string[]
}

// type for character
export type ICharacter = {
    name : string;
    birth_year: string;
    eye_color : string;
    gender : string;
    hair_color : string;
    height: string;
    mass: string;
    skin_color: string;
    homeworld: string;
    url: string;
    films: string[];
    species: string[];
    starships: string[];
    vehicles: string[];
}

// type for planet
export type IPlanet = {
    climate: string;
    diameter: string;
    gravity: string;
    name: string;
    orbital_period: string;
    population: string;
    terrain: string;
    rotation_period: string
}

