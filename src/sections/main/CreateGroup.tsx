import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Stack,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import FormProvider from "@/components/hook-form/FormProvider";
import { RHFTextField } from "@/components/hook-form";
import { RHFAutocomplete } from "@/components/hook-form";
import { useTranslation } from "react-i18next";

const MEMBERS = ["John Doe", "Jane Doe", "John Smith", "Jane Smith"];

type CreateGroupProps = {
  open: boolean;
  handleClose: () => void;
};

// TODO => Create a reusable component
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type CreateGroupFormProps = {
  handleClose: () => void;
};

const CreateGroupForm = ({ handleClose }: CreateGroupFormProps) => {
  const { t } = useTranslation();

  const NewGroupSchema = Yup.object().shape({
    title: Yup.string().required(t("title_is_required")),
    members: Yup.array().min(2, t("must_have_at_least_2_members")),
  });

  const defaultValues = {
    title: String(""),
    members: Array([]),
  };

  const methods = useForm({
    resolver: yupResolver(NewGroupSchema),
    defaultValues: defaultValues,
  });

  const {
    reset,
    watch,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmintSuccessful, isValid },
  } = methods;

  const onSubmit = async (data: any) => {
    try {
      // submit data to api
      console.log("Data", data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFTextField name="title" label={t("title")} />
        <RHFAutocomplete
          name="members"
          label={t("members")}
          multiple
          freeSolo
          options={MEMBERS.map((member) => member)}
          ChipProps={{ size: "medium" }}
        />
        <Stack
          spacing={2}
          direction={"row"}
          justifyContent={"end"}
          alignItems={"center"}
        >
          <Button onClick={handleClose}>{t("cancel")}</Button>
          <Button variant={"contained"} type={"submit"}>
            {t("create")}
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
};

const CreateGroup = ({ open, handleClose }: CreateGroupProps) => {
  const { t } = useTranslation();
  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      keepMounted
      sx={{ p: 4 }}
    >
      {/* { Title } */}
      <DialogTitle sx={{ mb: 2 }}>
        {/* Create New Group */}
        {t("create_new_group")}
      </DialogTitle>
      {/* { Content } */}
      <DialogContent>
        {/* Form */}
        <CreateGroupForm handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateGroup;
