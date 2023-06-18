"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@mui/material";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  body: yup.string().required("Body is required"),
  author: yup.string().required("Author is required"),
});

const initialValue = {
  title: "",
  body: "",
  author: "",
};

export default function Page() {
  // const selectRef = useRef(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    // setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("data saved", data);
    reset(initialValue);
    // setValue("author", "");
    // selectRef.current.value = "";
  };
  return (
    <Container maxWidth={"md"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} mt={5}>
          <Grid item xs={12} md={6}>
            <TextField
              id="title"
              label="Post Title"
              type="text"
              fullWidth
              {...register("title")}
              error={!!errors.title}
              helperText={errors.title?.message}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="body"
              label="Post Body"
              type="text"
              fullWidth
              multiline
              rows={4}
              {...register("body")}
              error={!!errors.body}
              helperText={errors.body?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="author-label">Author</InputLabel>
              <Select
                // ref={selectRef}
                labelId="author-label"
                {...register("author")}
                error={!!errors.author}
                renderValue={(selected) => selected || "Select an author"}
              >
                <MenuItem value="John Doe">John Doe</MenuItem>
                <MenuItem value="Jane Smith">Jane Smith</MenuItem>
                <MenuItem value="Michael Johnson">Michael Johnson</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button type={"submit"} variant={"contained"}>
              Submit Form
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
