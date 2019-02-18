export default class SwapiService{

    _apiBase = 'https://swapi.co/api';
    _imgSrcBase = 'https://starwars-visualguide.com/assets/img';

    _getEntityId = (entity) => {
        const idRegEx = /\/([0-9]+)\/$/;
        return entity.url.match(idRegEx)[1];
    };
    
    _getEntityType = (entity) => {
        const idRegEx = /\/([a-z]+)\/[0-9]+\/$/;
        const type = entity.url.match(idRegEx)[1];
        switch (type) {
            case 'people':
                return 'characters';
                break;
            default:
                return type;
        }
    };
    
    _getImageSrc = (type, id) => {
        return `${this._imgSrcBase}/${type}/${id}.jpg`;
    };

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok){
            throw new Error(`Could not fetch ${url}. Status: ${res.status}`)
        }
        return await res.json();
    };

    getAllPersons = async () => {
        const res = await this.getResource(`/people/?page=2`);
        return res.results.map((item) => this._transformPerson(item));
    };

    getPerson = async (id) => {
        const res = await this.getResource(`/people/${id}/`);
        return this._transformPerson(res);
    };

    _transformPerson = (item) => {
        return {
            ...this._transformCommonInfo(item),
            name: item.name,
            hairColor: item.hair_color,
            skinColor: item.skin_color,
            birthYear: item.birth_year,
            gender: item.gender,
        }
    };

    getAllPlanets = async () =>  {
        const res = await this.getResource(`/planets/`);
        return res.results.map((item) => this._transformPlanet(item));
    };

    getPlanet = async (id) =>  {
        const res = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(res);
    };
        
    _transformPlanet = (item) => {
        return {
            ...this._transformCommonInfo(item),
            name: item.name,
            population: item.population,
            rotationPeriod: item.rotation_period,
            diameter: item.diameter
        }
    };
    
    getAllStarships = async () =>  {
        const res = await this.getResource(`/starships/`);
        return res.map((item) => this._transformStarship(item));
    };

    getStarship = async (id) => {
        const res = await this.getResource(`/starships/${id}/`);
        return this._transformStarship(res)
    };

    _transformStarship = (item) => {
        return {
            ...this._transformCommonInfo(item),
            cost: item.cost_in_credits,
            created: item.created,
            crew: item.crew,
            rating: item.hyperdrive_rating,
            length: item.length,
            manufacturer: item.manufacturer,
            maxSpeed: item.max_atmosphering_speed,
            model: item.model,
            passengers: item.passengers,
            class: item.starship_class,
        }
    };

    _transformCommonInfo = (item) => {
        const id = this._getEntityId(item);
        const entityType = this._getEntityType(item);
        return {
            id,
            image: this._getImageSrc(entityType, id),
            name: item.name
        }
    };
}