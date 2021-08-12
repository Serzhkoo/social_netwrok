import { PhotosType, UserType } from '../redux/users-reducer';

type ItemIdType = string | number | boolean | PhotosType;
type ObjPropNameType = 'name' | 'id' | 'uniqueUrlName' | 'photos' | 'status' | 'followed';
type NewObjPropsType = {
  name?: string
  id?: number
  uniqueUrlName?: string
  photos?: PhotosType
  status?: string
  followed?: boolean
}

export const updateObjectInArray = (items: UserType[], itemId: ItemIdType, objPropName: ObjPropNameType, newObjProps: NewObjPropsType) => {
  return items.map(item => {
    return item[objPropName] === itemId ? { ...item, ...newObjProps } : item;
  });
};