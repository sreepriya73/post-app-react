import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewPost = () => {
    const [data, setdata] = useState([])
    const fetchData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then(
            (response)=>{
                setdata(response.data)
            }
        ).catch().finally()
    }
    return (
        <div>
            <NavBar />
            <h1><center>post</center></h1>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table" border="3" >
                            <thead>
                                <tr>
                                    <th scope="col">postid</th>
                                    <th scope="col">title</th>
                                    <th scope="col">body</th>
                                </tr>
                            </thead>
                            {data.map(
                                (value, index) => {
                                    return <tbody>
                                        <tr>
                                            <td>{value.id}</td>
                                            <td>{value.title}</td>
                                            <td>{value.body}</td>

                                        </tr>


                                    </tbody>
                                }
                            )
                        }
</table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewPost