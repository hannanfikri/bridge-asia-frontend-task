import { useMemo } from 'react';
import questionsData from '../questions';
import { useForm } from 'react-hook-form';

export const useApp = () => {
    const formMethod = useForm();
    const { setValue } = formMethod;
    const questions = useMemo(() => questionsData, [])
    const onSubmit = (data) => {
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
    return { questions, formMethod, onSubmit };
};