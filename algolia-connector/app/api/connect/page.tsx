import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {

    const url = 'https://api.europe-west1.gcp.commercetools.com/ct-manitou-b2b-sales-demo/products';
    const bearerToken = 'DXFIJOtCqkbHVrZRBIgIQqE5Np9E2w6_'; // Replace with your actual Bearer token

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${bearerToken}`,
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data.results);


    return (
        <div>
            {JSON.stringify(data.results)}
        </div>
    )
}
