import { useFormContext } from "react-hook-form";

export const useQuestions = () => {
    const formMethod = useFormContext();
    return {
        formMethod
    }
}