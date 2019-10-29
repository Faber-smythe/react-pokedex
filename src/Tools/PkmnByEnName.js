
export default function PkmnByEnName(data, name){
  return (data).filter((pkmn)=>{
    if((pkmn.name).toLowerCase() == name.toLowerCase()) return true
  })
}
