import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import questionsData from '../questions';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export const useApp = () => {
    const formMethod = useForm();
    const { setValue, formState: { errors } } = formMethod;
    const [playAnimation, setPlayAnimation] = useState(false);
    const animationTimeout = useRef();
    const questions = useMemo(() => questionsData, [])
    useEffect(() => {
        // Stop animation if errors appear
        if (errors.answers && playAnimation) {
            setPlayAnimation(false);
            clearTimeout(animationTimeout.current);
        }
    }, [errors, playAnimation]);
    const onSubmit = (data) => {
        setPlayAnimation(true);
        // Stop animation after 2 seconds (or adjust as needed)
        animationTimeout.current = setTimeout(() => setPlayAnimation(false), 2000);
        // Calculate score (0-12)
        let score = 0;
        if (data.answers && Array.isArray(data.answers)) {
            score = data.answers.reduce((acc, answer, idx) => {
                if (answer === questions[idx]?.answer) {
                    return acc + 1;
                }
                return acc;
            }, 0);
        }
        setValue('score', score);
        console.log("Submitted Data:", data);
        console.log("Score:", score);
    };
    return { questions, formMethod, onSubmit, playAnimation };
};