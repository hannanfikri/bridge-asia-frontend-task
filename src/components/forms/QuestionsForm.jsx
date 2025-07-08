import { useFormContext, Controller } from "react-hook-form";
import { Questions } from "../common/Questions";

export const QuestionsForm = ({ questions }) => {
    const { control } = useFormContext();
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
            {questions.map(({ question, options, answer }, index) => (
                <Controller
                    key={index}
                    name={`answers.${index}`}
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <Questions
                            question={question}
                            options={options}
                            answer={answer}
                            selected={field.value}
                            onChange={field.onChange}
                        />
                    )}
                />
            ))}
        </div>
    );
};