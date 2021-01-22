import { useEffect, useState } from "react";
import axios from "axios";

export function useFindUsers() {
    const [state, setDataState] = useState();

    useEffect(_ => {
        setDataState({
            loading: true,
            error: null
        });
        listUsers();
    }, []);

    return { state };

}