

export default class HeroesStore{
    constructor(){
        this.state = {
            heroes: []
        }
    }

    setHeroes (data){
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            this.state.heroes.push(data[i]);
        }
    }

}