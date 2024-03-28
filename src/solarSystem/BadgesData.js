import p1 from './textures/p1.jpg'
import p2 from './textures/p2.jpg'
import p3 from './textures/p3.jpg'
import p4 from './textures/p4.jpg'
import p5 from './textures/p5.jpg'
import p6 from './textures/p6.jpg'


const data  = []; 

  const shuffle = (a) => {
    const temp = a.slice(0);
    for (let i=temp.length-1 ;i>0;i--){
      const j = Math.floor(Math.random()*(i+1));
      [temp[i],temp[j]]=[temp[j],temp[i]];
    }
    return temp;
  };
  const textures = shuffle([p1,p2,p3,p4,p5,p6]);

const shufledTextures = shuffle(textures);

const temp = {
  badges: shufledTextures.map((texture) => ({
    name:'Random',
    texture: texture,
    year:Math.floor(Math.random() * 6)+1,
  })),
}; 
data.push(temp); 
console.log({data}); 

const BadgesData = [];
const totalYears = 6;
const badgePerYear =4;

for (let index = 1; index <= totalYears; index++) {
  // const getYearBadges = data[0].badges.filter((badge)=>{
  //   return badge.year === index; 
  // });
  
  // const orbitRaduis = (index + 1.5)*4;

  for (let i =0; i< badgePerYear;i++){
    const b= data[0].badges[i % data[0].badges.length];
    BadgesData.push({
      id: Math.random(),
      xRadius: (index + 1.5) * 4,
      zRadius: (index + 1.5) * 2,
      size: 0.5 + (index / totalYears)* 0.5,
      speed: 0.1 + (index / totalYears)*0.5,
      offset:((i * 2 * Math.PI) / badgePerYear)+(index / totalYears)*(Math.PI * 2),
      rotationSpeed: 0.01 +(index/totalYears)* 0.02,
      textureMap : b.texture,
      name:`${b.name} - ${ (Math.random()+1).toString(36).substring(7).toUpperCase()}`
    });
  }


}


export default BadgesData;
