import { useState, useEffect } from 'react';

const useHooks = options => {
    const { url } = options;
    const [data, setDate] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const send = async () => {
        setLoading(true);
        try {
            const data = await fetch(url);
            const res = await data.json();
            setDate(res);
            setLoading(false);
        } catch (e) {
            setError(e);
            setLoading(false);
        }
    }

    return {
        data,
        loading,
        error,
        send,
    };
};

export default useHooks;
