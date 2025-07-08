import { Controller, useFormContext } from "react-hook-form";
import { Questions } from "../common/Questions";

export const QuestionsForm = ({questions}) => {
    const { control } = useFormContext();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 px-4">
            {questions.map(({ question, options }, index) => (
                <Controller
                    key={index}
                    name={`answers.${index}`}
                    rules={{ required: true }}
                    control={control}
                    render={({ field }) => (
                        <Questions
                            questionNo={index + 1}
                            totalQuestions={questions.length}
                            question={question}
                            options={options}
                            selected={field.value}
                            onChange={field.onChange}
                        />
                    )}
                />
            ))}
        </div>
    );
};