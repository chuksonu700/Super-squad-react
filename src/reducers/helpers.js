import charactersList from '../data/characters.json';

export function createCharacter(id){
    let character = charactersList.find(c=>c.id===id);
    return character;
}