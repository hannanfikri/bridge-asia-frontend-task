import { Button } from '@headlessui/react';
import { FormProvider } from 'react-hook-form';
import { DetailsForm, Footer, Header, QuestionsForm } from '../components';
import { AnimatedLogo } from '../components/AnimatedLogo';
import { useApp } from '../data/hooks';
import { useTranslation } from 'react-i18next';

export const App = () => {
  const { formMethod, onSubmit, playAnimation, questions } = useApp();
  const { handleSubmit, reset, formState: { errors } } = formMethod;
  const { t } = useTranslation("common");

  return (
    <>
      <Header />
      <FormProvider {...formMethod}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-4 md:py-4'>
            <div className="max-w-screen-lg mx-auto p-4 bg-white shadow-md rounded-lg transition-all duration-700 opacity-0 translate-y-8 animate-[fadeInUp_0.7s_ease-in-out_forwards] mb-8">
              <DetailsForm />
              <QuestionsForm questions={questions} />
            </div>
            {errors.answers && (
              <div className="text-center text-red-500 font-semibold text-lg">
                {t("Please answer all questions!")}
              </div>
            )}
            <div className="flex justify-center w-full">
              <div className="w-full max-w-lg flex flex-col md:flex-row gap-4 items-center">
                <Button
                  type="submit"
                  className="w-1/2 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white py-3 rounded-xl shadow-lg font-semibold text-lg tracking-wide transition-all duration-200 border-none hover:from-blue-700 hover:via-blue-600 hover:to-blue-500 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  {
                    playAnimation ? <AnimatedLogo className="size-7" play={playAnimation} /> : <span>{t("submit")}</span>
                  }
                </Button>
                <Button
                  type="button"
                  onClick={() => reset()}
                  className="w-1/2 flex items-center justify-center gap-2 bg-gray-200 text-gray-700 py-3 rounded-xl shadow font-semibold text-lg tracking-wide transition-all duration-200 border-none hover:bg-gray-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  {t('reset')}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
      <Footer />
    </>
  )
}
