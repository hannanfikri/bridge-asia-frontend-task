import { Label, Radio, RadioGroup } from '@headlessui/react';

export const Questions = ({ question, options, answer, selected, onChange }) => {
    return (
        <div className="space-y-4">
            <div className="mb-2 font-semibold">{question}</div>
            <RadioGroup value={selected} onChange={onChange}>
                <Label className="sr-only">Select an answer</Label>
                <div className="space-y-2">
                    {options.map((option, idx) => (
                        <Radio
                            key={idx}
                            value={option}
                            className={({ checked }) =>
                                `flex items-center px-4 py-2 border rounded cursor-pointer transition-colors ${checked ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-900 border-slate-300'}`
                            }
                        >
                            {({ checked }) => (
                                <span>{option}</span>
                            )}
                        </Radio>
                    ))}
                </div>
            </RadioGroup>
        </div>
    );
};