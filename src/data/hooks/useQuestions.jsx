import { useMemo } from 'react';
import questionsData from '../questions';

const useQuestions = () => {
    const questions = useMemo(() => questionsData, [])
    return { questions };
};

export default useQuestions;