import axios from 'axios';
import React, {useState, useEffect} from 'react';


export default function View() {
    const [apiData, setApiData] = useState([]);

    function getData() {
        axios.get('https://6615fad2b8b8e32ffc7c0ce9.mockapi.io/crud')
            .then((response) => {
                setApiData(response.data);
            })
            .catch(error => console.error("There was an error!", error));
    }

    useEffect(() => {
        getData();
        const intervalId = setInterval(getData, 10000); // Fetches data every 10 seconds

        return () => clearInterval(intervalId); // Clean up the interval on component unmount
    }, []);

    return (
        <div className='container mt-5'>
            <table className='table table-bordered table-striped table-hover'>
            <thead className='table-dark'>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>EMAIL</th>
                    </tr>
                </thead>
                <tbody>
                    {apiData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.e_name}</td>
                            <td>{item.e_age}</td>
                            <td>{item.e_email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
