import LinkedList from "dbly-linked-list";

const navigationList = new LinkedList();

export const navigationObj : { [key : string]:string} = {
    '': "/memes",
    memes: "/evento",
    evento: "/familiar",
    familiar: "/gamer",
    gamer: "/juego",
    juego: "/mascota",
    mascota: "/momero",
    momero: "/sinque",
    sinque: "/tiktok",
    tiktok: "/tiktoker",
    tiktoker: "/trans",
    trans: "/trapo",
    trapo: "/vg",
    vg: "/vrgo",
    vrgo: "/vm",
    vm : '/'
  };
  
Object.keys(navigationObj).forEach(key => {
    navigationList.insert(navigationObj[key]);
});


export default navigationList;
