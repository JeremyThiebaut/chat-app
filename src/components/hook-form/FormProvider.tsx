import { FormProvider as Form } from "react-hook-form";

type FormProviderProps = {
  children: React.ReactNode;
  onSubmin: (event: React.FormEvent<HTMLFormElement>) => void;
  methods: any;
};

const FormProvider = ({ children, onSubmin, methods }: FormProviderProps) => {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmin}>{children}</form>
    </Form>
  );
};

export default FormProvider;
