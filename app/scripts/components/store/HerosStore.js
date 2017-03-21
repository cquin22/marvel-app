

export default class HerosStore{
    constructor(){
        this.state = {
            heros: []
        }
    }

    setHeros (data){
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            this.state.heros.push(data[i]);
        }
    }

}