import { useFormContext } from "react-hook-form";
import { Input } from "@headlessui/react";
import { useTranslation } from "react-i18next";

export const DetailsForm = () => {
    const { register, formState: { errors } } = useFormContext();
    const { t: tPlaceholder } = useTranslation("common", { keyPrefix: "placeholder" });
    const { t: tDetailsForm } = useTranslation("common", { keyPrefix: "detailsForm" });
    const { t } = useTranslation("common");
    return (
        <div className="space-y-4 flex flex-col md:flex-row md:w-full gap-4 p-4">
            <div className="flex-1">
                <label className="block mb-1 font-medium">{tDetailsForm("name")}</label>
                <Input
                    type="text"
                    {...register("name", { required: true })}
                    className={`w-full px-3 py-2 border rounded ${errors.name ? 'border-red-500' : ''}`}
                    placeholder={tPlaceholder("Enter your name")}
                />
                {errors.name && (
                    <span className="text-red-500 text-sm mt-1 block">{t("required")}</span>
                )}
            </div>
            <div className="flex-1">
                <label className="block mb-1 font-medium">Score</label>
                <Input
                    type="text"
                    {...register("score")}
                    className="w-full px-3 py-2 border rounded bg-gray-100 cursor-not-allowed"
                    placeholder={tPlaceholder("Score will be shown here")}
                    readOnly
                    tabIndex={-1}
                />
            </div>
        </div>
    );
};