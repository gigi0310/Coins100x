import React from 'react';
import { useParams } from 'react-router';

export default function CoinDetailsPage() {
    const { id } = useParams();


    return(<div>Coin Details Page</div>)
}