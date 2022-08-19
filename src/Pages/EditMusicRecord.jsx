import {Box, Button, Container, Input} from "@chakra-ui/react"
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate, useParams } from "react-router-dom"
import { getMusic, updateMusic } from "../Reducerr/appReducer/action";


export default function EditMusicRecords(){
    const {id} = useParams();
    const [currentMusicAlbum,setcurrentMusicAlbum] = useState({})
    const musicRecord = useSelector((store)=> store.appReducer.musicRecord);
    const [musicName,setMusicName] = useState("")
    const [artistName,setArtistName] = useState("")
    const dispatch = useDispatch();
    const navigation = useNavigate();
    useEffect(()=>{
        if(id){
            const currentMusic = musicRecord.find((album) => album.id === id)
            if(currentMusic){
                setMusicName(currentMusic.name)
                setArtistName(currentMusic.artist)
            }
        }
    },[id,musicRecord]);
    const handleSubmit = ()=>{
      
        if(musicName && artistName){
            const payload = {
                name : musicName,
                artist: artistName
            }
            dispatch(updateMusic(id,payload)).then(()=>{
                dispatch(getMusic());
                navigation("/")
            })
        }
        
    }
    console.log(currentMusicAlbum);
    return (
        <Container>
          <Box>Edit Music Record</Box>
          <Box m={3}>
          <Input m={3} value={musicName} onChange={(e)=>setMusicName(e.target.value)}/>
          <Input m={3} value={artistName} onChange={(e)=>setArtistName(e.target.value)}/>
          <Button onClick={handleSubmit}>Sumbit</Button>
          </Box>
        </Container>
    )
}