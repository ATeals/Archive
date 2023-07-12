import React, { useEffect, useState } from "react";

type UseForm<T> = {
    initialState: T;
    callbackFn: (values: T) => Promise<void>;
};

export const useForm = <T extends {}>(initialState: T, callbackFn?: any): [T, React.ChangeEventHandler, React.FormEventHandler] => {
    const [values, setValues] = useState(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        callbackFn(values);
    };

    return [values, handleChange, handleSubmit];
};
