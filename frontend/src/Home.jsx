import React from "react";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const toast = useToast();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: (data) => axios.post("/api/river_flow", data),
    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
      toast({
        title: "great",
        description: "river flow predicted successfully",
        status: "success",
        duration: 7000,
        isClosable: true,
      });
      navigate("/irrigation");
    },
    onError: (error) => {
      if (error) {
        setError("Time", {
          type: "manual",
          message: "something went wrong",
        });
      }
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };
  return (
    <VStack spacing={4} align={"center"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.Time}>
          <FormLabel>Time</FormLabel>
          <Input
            type="number"
            {...register("Time", { required: "Username is required" })}
          />
          <FormErrorMessage>
            {errors.Time && errors.Time?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.VW_30cm}>
          <FormLabel>Volume at 30 cm</FormLabel>
          <Input
            type="number"
            step={"any"}
            {...register("VW_30cm", { required: "Volume is required" })}
          />
          <FormErrorMessage>
            {errors.VW_30cm && errors.VW_30cm.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.T_30cm}>
          <FormLabel>Temperature at 30 cm</FormLabel>
          <Input
            type="number"
            step={"any"}
            {...register("T_30cm", { required: "Temperature is required" })}
          />
          <FormErrorMessage>
            {errors.T_30cm && errors.T_30cm.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          colorScheme="teal"
          variant={"solid"}
          mt={4}
          type="submit"
          isLoading={isPending}
        >
          Predict
        </Button>
      </form>
    </VStack>
  );
};

export default Home;
