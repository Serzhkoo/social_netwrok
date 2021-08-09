export type DialogsDataType = {
  id: number
  name: string
  picture: string
};
type MessagesDataType = {
  id: number
  message: string
};
export type DialogsType = {
  dialogsData: Array<DialogsDataType>
  messagesData: Array<MessagesDataType>
};

export type DialogsActionsType = AddMessageActionType

type AddMessageActionType = {
  type: 'ADD-MESSAGE'
  newMessageBody: string
}

const initialState: DialogsType = {
  dialogsData: [
    {
      id: 1,
      name: 'Lewis',
      picture: 'https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1390x798:1392x796)/origin-imgresizer.eurosport.com/2020/06/01/2826749-58300008-2560-1440.jpg'
    },
    {
      id: 2,
      name: 'Valtteri',
      picture: 'https://sun9-21.userapi.com/Wj79trhX7JToTycCwPG_CYZSQd1JwAzrdl5G1Q/GIcWEc2zRNg.jpg'
    },
    {
      id: 3,
      name: 'Max',
      picture: 'https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/a3/7f/6adfbd96bf588fe6288aca94715e78f65da1d4d07ec09338177982.jpg'
    },
    {
      id: 4,
      name: 'Sergio',
      picture: 'https://www.mexicanist.com/_files/200005550-0f0b40f0b7/450/Sergio%20Perez.jpg'
    },
    {
      id: 5,
      name: 'Daniel',
      picture: 'https://media-cdn.mclaren.com/media/images/articles/hero/DR_x_3_web.jpg'
    },
    {
      id: 6,
      name: 'Carlos',
      picture: 'https://images2.gazzettaobjects.it/methode_image/2021/03/22/Motori/Foto_Motori_-_Trattate/e3fe2efa4317707d10bb7bfa84eb3c6d_1200x675.jpg?v=202103221647'
    }
  ],
  messagesData: [
    { id: 1, message: 'Hi losers' },
    { id: 2, message: 'Your majesty' },
    { id: 3, message: 'Track limits?' },
    { id: 4, message: 'Stop!' },
    { id: 5, message: 'Hahahaha' },
    { id: 6, message: 'Ferrari' }
  ]
};

export const dialogsReducer = (state: DialogsType = initialState, action: DialogsActionsType): DialogsType => {
  switch (action.type) {
    case 'ADD-MESSAGE':
      const newMessage = {
        id: 7,
        message: action.newMessageBody
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage]
      };
    default:
      return state;
  }
};
export const addMessage = (newMessageBody: string): AddMessageActionType => {
  return { type: 'ADD-MESSAGE', newMessageBody } as const;
};