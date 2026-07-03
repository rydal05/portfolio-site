import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AutoforwardPage() {
    const navigate = useNavigate();

    useEffect(() => {
        window.location.replace('https://github.com/rydal05');
    }, []);

    return <p>Redirecting you...</p>;
}