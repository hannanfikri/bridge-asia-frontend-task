import { useFormContext } from "react-hook-form";
import { Input } from "@headlessui/react";

export const DetailsForm = () => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="space-y-4 flex flex-col md:flex-row md:w-full gap-4 p-4">
            <div className="flex-1">
                <label className="block mb-1 font-medium">Name</label>
                <Input
                    type="text"
                    {...register("name", { required: true })}
                    className={`w-full px-3 py-2 border rounded ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="Enter your name"
                />
                {errors.name && (
                    <span className="text-red-500 text-sm mt-1 block">This field is required</span>
                )}
            </div>
            <div className="flex-1">
                <label className="block mb-1 font-medium">Score</label>
                <Input
                    {...register("score")}
                    className="w-full px-3 py-2 border rounded"
                    placeholder="Enter your score"
                />
            </div>
        </div>
    );
};