const folderData = [{
    name: 'root',
    id : 1,
    isfolder : true,
    items: [
        {
            name: "folder_01",
            id: 2,
            isfolder:true,
            items: [
                {
                    name:'file_01',
                    id : 3,
                    isfolder: false,
                },
                {
                    name:'file_02',
                    id : 4,
                    isfolder: false,
                }
            ]
        },
        {
            name:'folder_02',
            id : 5,
            isfolder:true,
            items:[
                {
                    name:'file_03',
                    id : 6,
                    isfolder:false
                }
            ]
        },
        {
            name: "file_04",
            id: 6,
            isfolder:false,
        },
    ]
}]

export default folderData