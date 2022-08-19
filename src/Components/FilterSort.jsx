import { Box, Checkbox, Radio, RadioGroup, Stack } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"



export default function FilterSort() {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialGenreParams = searchParams.getAll("genre");
    const initialSortParams = searchParams.get("sortBy");
    const [category, setCategory] = useState(initialGenreParams || []);
    const [sortBy, setSortBy] = useState(initialSortParams || "");
 
    const handleGenreChange = (e) => {
        const option = e.target.value;
        //if the option is already present in the category, remove it
        //else add it in the category array
        let newCategory = [...category];
        if (category.includes(option)) {
            //remove it
            newCategory.splice(newCategory.indexOf(option), 1);
        } else {
            //add it
            newCategory.push(option);
        }
        setCategory(newCategory);
    };

    const handleSortBy = (e) => {
        setSortBy(e);
    };
    useEffect(() => {
        //if the category changes then reflect it on the URL search as well
        if (category || sortBy) {

            const params = {}
            category && (params.genre = category);
            sortBy && (params.sortBy = sortBy);
            setSearchParams(params);
           
        }
    }, [category, setSearchParams, sortBy]);

    return (
        <Box border={"1px solid red"} w={"10%"}>
            <Box >
                <Box  margin={"2em"} borderRadius={"2em"} bgColor={"red"} color={"white"}>Filter By </Box>
                <Box marginLeft={"2em"} textAlign={"start"}>
                <Checkbox value="K-Pop" onChange={handleGenreChange
                }  size='lg' colorScheme='orange' defaultChecked={category.includes("K-Pop")}>K-Pop</Checkbox>
                <hr />
                <Checkbox value="Pop" defaultChecked={category.includes("Pop")} onChange={handleGenreChange
                }  size='lg' colorScheme='orange' >Pop</Checkbox>
                <hr />
                <Checkbox value="Holiday" onChange={handleGenreChange
                }  size='lg' colorScheme='orange' defaultChecked={category.includes("Holiday")}>Holiday</Checkbox>
                <hr />
                <Checkbox value="Country" onChange={handleGenreChange
                }  size='lg' colorScheme='orange' defaultChecked={category.includes("Country")}>Country</Checkbox>
                <hr />
                </Box>
                </Box>
                <Box>
                <Box  margin={"2em"}  borderRadius={"2em"} bgColor={"red"} color={"white"}>Sort By </Box>
                <Box marginLeft={"2em"} textAlign={"start"}>
                <RadioGroup defaultValue={sortBy === "asc" ? "asc" : sortBy === "desc" ? "desc" : ""} name="sortBy" onChange={(value) => {
                    handleSortBy(value)
                }} >
                    <Radio name="sortBy" value="asc" colorScheme='red' >
                        Ascending
                    </Radio>
                    <hr />
                    <Radio value="desc" colorScheme='green' name="sortBy" >
                        Descending
                    </Radio>

                </RadioGroup>
                </Box>

                </Box>
        </Box>
    )
}