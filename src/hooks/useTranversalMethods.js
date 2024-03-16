const useTranversalMethods = () => {

    function insertNode(items,parent,newEntry,type)
    {
        items.forEach(element => {
          if (element.name == parent){
            element.items.unshift(
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

    function deleteNode(items,deleteItemParent,deleteItem)
    {   
      
      items.forEach(element => {
        if (element.name == deleteItemParent){
          console.log(element.items)
          element.items = element.items.filter(item => item.name != deleteItem)
          console.log(element.items)
          return 
        }else{
          if (element.isfolder){
            deleteNode(element.items,deleteItemParent,deleteItem)
          }else{
            return
          }
        }
      }); 
      }
    return {insertNode,deleteNode}
}
export default useTranversalMethods