import {Box} from "@chakra-ui/react"
import FilterSort from "../Components/FilterSort"
import MusicRecords from "./MusicRecords"

export default function Home(){

    return (
        <Box display={"flex"}>
            <FilterSort/>
            <MusicRecords/>
        </Box>
    )
}