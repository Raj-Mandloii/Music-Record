import {Box,Button,Image} from "@chakra-ui/react"
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Link, useParams } from "react-router-dom"
import { getMusic } from "../Reducerr/appReducer/action";

export default function SingleMusicRecords(){
    const {id} = useParams();
    const dispatch = useDispatch()
    const [currentMusicAlbum,setcurrentMusicAlbum] = useState({})
    const musicRecord = useSelector((store)=> store.appReducer.musicRecord);

   
    useEffect(()=>{
        if(musicRecord.length === 0){
            dispatch(getMusic());
        }
    })
    useEffect(()=>{

        if(id){
            const currentMusic = musicRecord.find((album) => album.id === id)

            currentMusic && setcurrentMusicAlbum(currentMusic);
            
        }
    },[id,musicRecord]);
    console.log(currentMusicAlbum);
    return (
        <Box m={"auto"} >
             <Box>
             SINGLE MUSIC RECORD DETAILS
             </Box>
             <Box margin={"2em"}><Image border={"2px solid blue"} borderRadius={"2em"} display={"inline"} src={currentMusicAlbum.img}/></Box>
             <Box>Name : {currentMusicAlbum.name}</Box>
             <Box>Artist : {currentMusicAlbum.artist}</Box>
             <Box>Genre : {currentMusicAlbum.genre}</Box>
             <Box>Year : {currentMusicAlbum.year}</Box>
             
                <Link to={`/music/${id}/edit`}>
                    <Button m={2}>Edit</Button>
                </Link>
           
             
             
        </Box>
    )
}

// {
//     "id": "1",
//     "name": "BE",
//     "artist": "BTS",
//     "genre": "K-Pop",
//     "year": 2020,
//     "no_of_songs": "4",
//     "img": "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/cb/12/66/cb126687-c54d-eb71-6a6c-5f32c1472a04/195497623273.jpg/170x170bb.png",
//     "songs": [
//         {
//             "name": "abc"
//         },
//         {
//             "name": "def"
//         },
//         {
//             "name": "ghi"
//         },
//         {
//             "name": "jkl"
//         }
//     ]
// }