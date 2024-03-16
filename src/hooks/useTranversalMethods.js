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
          element.items = element.items.filter(item => item.name != deleteItem)
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

      function renameNode(items,renameParent,renameItem,newName)
    {   
      
      items.forEach(element => {
        if (element.name == renameParent){
          
          element.items = element.items.map(item => {
            if (item.name == renameItem){
              item.name = newName
              return item
            }else{
              return item
            }
          })

          return 
        }else{
          if (element.isfolder){
            renameNode(element.items,renameParent,renameItem,newName)
          }else{
            return
          }
        }
      }); 
      }
    return {insertNode,deleteNode,renameNode}
}
export default useTranversalMethods