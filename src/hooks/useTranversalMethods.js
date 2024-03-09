const useTranversalMethods = () => {

    function insertNode(items,parent,newEntry,type)
    {
        items.forEach(element => {
          if (element.name == parent){
            element.items.push(
              {
                name:newEntry,
                id : 100000,
                isfolder: type =='file'? false: true,
                items : type == 'folder'? [] : null
              }
            )
            return 
          }else{
            if (element.isfolder){
              insertNode(element.items,parent,newEntry,type)
            }else{
              return
            }
          }
        }); 
      }
    return insertNode
}
export default useTranversalMethods