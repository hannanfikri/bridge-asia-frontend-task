import { FormProvider } from 'react-hook-form';
import { useApp } from './data/hooks';
import { Header, Footer, QuestionsForm, DetailsForm } from './components';
import { Button } from '@headlessui/react';

function App() {
  const { questions, formMethod, onSubmit } = useApp();
  const { handleSubmit } = formMethod;

  return (
    <>
      <Header />
      <FormProvider {...formMethod}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DetailsForm />
          <QuestionsForm questions={questions} />
          <Button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
            Submit Answers
          </Button>
        </form>
      </FormProvider>
      <Footer />
    </>
  )
}

export default App
