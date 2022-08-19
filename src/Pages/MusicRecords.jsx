import {Box, Image} from "@chakra-ui/react";
import { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { getMusic } from "../Reducerr/appReducer/action";
import { Link, useLocation, useSearchParams } from "react-router-dom";
export default function MusicRecords(){
    const dispatch = useDispatch()
    const musicRecord = useSelector(store=> store.appReducer.musicRecord)
    const [searchParams] = useSearchParams();
    const location = useLocation();

    useEffect(() => {
        if(musicRecord.length === 0 || location){
            const sortBy = searchParams.get("sortBy");
            const queryParams = {
                params: {
                  genre: searchParams.getAll("genre"),
                  _sort: sortBy && "year",
                  _order: sortBy,
                },
              };
            dispatch(getMusic(queryParams) )
            
        }
       

    }, [location.search]);
    
    return (
        <Box w={"80%"}  display={"flex"} flexWrap={"wrap"} margin={"auto"}>
           {musicRecord.map(item=>(
            <Box  key={item.id} borderRadius={"2em"} w={"290px"} m={"2em"} p={"1em"} bgColor={"red.100"} border={"2px solid red"}>
                <Link to={`/music/${item.id}`}>
                <Image borderRadius={"2em"} display={"inline"} src={item.img}/>
                <Box>Name: {item.name}</Box>
                <Box>Artist :{item.artist}</Box>
                <Box>Genre : {item.genre}</Box>
                <Box>Year : {item.year}</Box>
                </Link>
            </Box>
           ))}
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