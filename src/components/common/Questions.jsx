import { Radio, RadioGroup } from '@headlessui/react';

export const Questions = ({ questionNo, totalQuestions, question, options, answer, selected, onChange }) => {
    const optionLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    return (
        <div className="space-y-4">
            <div className="flex flex-col gap-1">
                <span className='text-sm text-gray-400'>Question {questionNo} of {totalQuestions} </span>
                <span className='text-lg font-semibold'>{question}</span>
            </div>
            <RadioGroup value={selected} onChange={onChange}>
                <div className="space-y-2">
                    {options.map((option, idx) => (
                        <Radio
                            key={idx}
                            value={option}
                            className={({ checked }) =>
                                `flex items-center px-4 py-2 border rounded cursor-pointer transition-colors ${checked ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-900 border-slate-300 hover:bg-blue-200'}`
                            }
                        >
                            {({ checked }) => (
                                <span className="flex items-center gap-2">
                                    <span className={`flex items-center justify-center w-7 h-7 rounded-full border-2 font-bold text-blue-500 text-center ${checked ? 'bg-white border-blue-600' : 'bg-blue-50 border-blue-300'}`}>
                                        <span className="w-full">{optionLabels[idx]}</span>
                                    </span>
                                    <span>{option}</span>
                                </span>
                            )}
                        </Radio>
                    ))}
                </div>
            </RadioGroup>
        </div>
    );
};