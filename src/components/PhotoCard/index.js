import React, { Fragment } from 'react';
import { ImgWrapper,Img,Button,Article } from './styles';
import { MdFavoriteBorder,MdFavorite } from "react-icons/md";
import { useLocalStorage } from '../../hook/useLocalStorage';
import { useNearScreen } from '../../hook/useNearScreen';

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  
  const [show,element] = useNearScreen();
  const key = `like-${id}`
  const [liked,setLiked ] = useLocalStorage(key,false);
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={element}>
      {
        show && <Fragment>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <Button onClick={() => setLiked(!liked)}>
            <Icon size='32px' /> {likes} likes!
          </Button>
        </Fragment>
      }
    </Article>
  )
}