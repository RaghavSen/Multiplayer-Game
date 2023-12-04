class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0; 
    this.score = 0;
    this.rank = 0;
    this.fuel = 185;
    this.life = 185;
  }

  addPlayer(){
   var playerindex = "players/player"+this.index;
  if(this.index === 1){
    this.positionX = width /2 -100
    }
   else{
    this.positionX = width /2 +100
   } 
   database.ref(playerindex).set({
    name:this.name,
    positionX:this.positionX,
    positionY:this.positionY,
    rank:this.rank,
    score:this.score
   });
   
  }
getDistance(){
  var playerDistanceref = database.ref("players/player"+this.index)
  playerDistanceref.on("value",data=>{
    var data = data.val()
    this.positionX = data.positionX;
    this.positionY = data.positionY;
    
  })
}


  getCount(){
    var playerCountref = database.ref("playerCount");
    playerCountref.on("value",data=>{
      playerCount = data.val()
    })
  }
  updateCount(count){
   database.ref("/").update({
    playerCount: count
   })
  }

  update(){
    var playerindex = "players/player"+this.index;
    database.ref(playerindex).update({
      name:this.name,
    positionX:this.positionX,
    positionY:this.positionY,
    rank:this.rank,
    score:this.score,
    life:this.life
    })

  }
  static getPlayersinfo(){
    var playerInforef =  database.ref("players")
    playerInforef.on("value",data=>{
      allPlayers = data.val();
    })
  }

  getcarsAtEnd(){
    database.ref("carsAtEnd").on("value",(data)=>{
      this.rank=data.val();
    })
  }

  static updatecarsAtEnd(rank){
     database.ref("/").update({
      carsAtEnd:rank
     })
  }

 }

