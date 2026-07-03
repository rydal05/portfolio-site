import { useEffect } from 'react';

function AutoforwardPage() {
    const navigate = useNavigate();

    useEffect(() => {
        window.location.replace('https://github.com/rydal05');
    }, []);

    return <p>Redirecting you...</p>;
}