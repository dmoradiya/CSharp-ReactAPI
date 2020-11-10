import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FetchData(props) {
    const displayName = FetchData.name;

    // Configure our state, and our setState standin methods.
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Build the table based on forecast data.
    function renderProductsTable(products) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Category Name</th>
                        <th>Product Name</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product =>
                        <tr key={product.id}>
                           
                            <td>{product.categoryID}</td>
                           
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    // Grab our data from our API.
    async function populateProductData() {
        // npm install --save axios
        const response = await axios.get('ProductAPI/All');
        setProducts(response.data);
        setLoading(false);
    }

    useEffect(() => {
        populateProductData();
    }, [loading]);

    let contents = loading
        ? <p><em>Loading...</em></p>
        : renderProductsTable(products);

    return (
        <div>
            <h1 id="tabelLabel" >Products</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}

            <button className="btn btn-primary" onClick={() => { setLoading(true) }}>Refresh</button>
        </div>
    );
}

export { FetchData };
