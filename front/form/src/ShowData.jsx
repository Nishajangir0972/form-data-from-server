import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function ShowData() {
    const [data, setData] = useState([])
    async function fetchData() {
        const result = await axios.get("http://localhost:5000")
            .then((res) => {
                setData(res.data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='header'>
            <table>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((student) => {
                        return (
                            <>
                                <tr key={student.id}>
                                    <td >{student.id}</td>
                                    <td >{student.name}</td>
                                    <td >{student.age}</td>
                                    <td >{student.phone}</td>

                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
            <Link to='/add' id='add'>ADD MORE</Link>

        </div>

)
}


export default ShowData