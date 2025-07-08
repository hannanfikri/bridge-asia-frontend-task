import { Button } from '@headlessui/react';
import { FormProvider } from 'react-hook-form';
import { DetailsForm, Footer, Header, QuestionsForm } from '../components';
import { AnimatedLogo } from '../components/AnimatedLogo';
import { useApp } from '../data/hooks';

export const App = () => {
  const { formMethod, onSubmit, playAnimation, questions } = useApp();
  const { handleSubmit, formState: { errors } } = formMethod;

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
                Please answer all questions!
              </div>
            )}
            <div className="flex justify-center">
              <Button
                type="submit"
                className="w-1/2 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white py-3 rounded-xl shadow-lg font-semibold text-lg tracking-wide transition-all duration-200 border-none hover:from-blue-700 hover:via-blue-600 hover:to-blue-500 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                {
                  playAnimation ? <AnimatedLogo className="size-7" play={playAnimation} /> : <span>Submit Answers</span>
                }
              </Button>
            </div>
          </div>
        </form>
      </FormProvider>
      <Footer />
    </>
  )
}
