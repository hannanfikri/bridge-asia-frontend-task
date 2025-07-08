import { useFormContext } from "react-hook-form";
import { Input } from "@headlessui/react";

export const DetailsForm = () => {
    const { register } = useFormContext();

    return (
        <div className="space-y-4">
            <div>
                <label className="block mb-1 font-medium">Name</label>
                <Input
                    type="text"
                    {...register("name", { required: true })}
                    className="w-full px-3 py-2 border rounded"
                    placeholder="Enter your name"
                />
            </div>
            <div>
                <label className="block mb-1 font-medium">Score</label>
                <Input
                    type="number"
                    {...register("score", { min: 0 })}
                    className="w-full px-3 py-2 border rounded"
                    placeholder="Enter your score"
                />
            </div>
        </div>
    );
};