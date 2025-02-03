import LinkedList from "dbly-linked-list";

const navigationList = new LinkedList();

export const navigationObj : { [key : string]:string} = {
    '': "/memes",
    memes: "/evento",
    evento: "/familiar",
    familiar: "/gamer",
    gamer: "/juego",
    juego: "/mascota",
    mascota: "/categoria1",
    categoria1: "/categoria2",//momero
    categoria2: "/categoria3",//sinque
    categoria3: "/tiktoker",//tiktok
    tiktoker: "/categoria4",
    categoria4: "/categoria5",//trans
    categoria5: "/categoria6",//trapo
    categoria6: "/categoria7",//vg
    categoria7: "/vm",//vrgo
    vm : '/submit'
  };
  
Object.keys(navigationObj).forEach(key => {
    navigationList.insert(navigationObj[key]);
});


export default navigationList;
