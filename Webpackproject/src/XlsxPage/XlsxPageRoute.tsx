import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getData } from "../api";
import TableRow from "@mui/material/TableRow";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead } from "@mui/material";
import * as XLSX from "xlsx"



export async function loader() {
    const data = await getData()
    return data
}
interface Item {
    name: string, height: string, weight: string, old: number
}


function ItemColum({ name, height, weight, old }: Item) {
    // console.log("123")
    return <TableRow>
        <TableCell align="right">{name}</TableCell>
        <TableCell align="right">{height}</TableCell>
        <TableCell align="right">{weight}</TableCell>
        <TableCell align="right">{old}</TableCell>
    </TableRow>
}



export function XlsxPage() {
    const data: Item[] = useLoaderData() as Item[]
    function handleDownload() {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Dates");
        XLSX.writeFile(workbook, "Presidents.xlsx", { compression: true });
    }
    return <div>
        <Link to="/">MainPage</Link>
        <TableContainer sx={{ width: 700 }} component={Paper}>
            <Table sx={{ maxWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Height</TableCell>
                        <TableCell align="right">Weight</TableCell>
                        <TableCell align="right">Old</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data && data.map((item: Item) => <ItemColum {...item} />)}
                </TableBody>
            </Table>
        </TableContainer>
        <button onClick={handleDownload}>export xlsx </button>
    </div>;
}
XlsxPage.displayName = "XlsxPage"
