import { faker } from "@faker-js/faker/locale/en"

function createRandomMovie(){
    return `${faker.word.adjective()} ${faker.word.noun()}`
}

function createRandomSong(){
    return faker.music.songName()
}

export { 
    createRandomMovie,
    createRandomSong
 }