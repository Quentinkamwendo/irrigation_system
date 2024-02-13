import { LockIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";

const Irrigation = () => {
  const getColumns = async () => {
    const response = await axios.get('/api/get_columns');
    return response.data;
  }

  const {data} = useQuery({
    queryFn: getColumns,
    queryKey: ['columns']
  });
  console.log(data);
  return (
    <div className="bg-violet-100">
      <Card m={2} mt={2}>
        <CardHeader>
          <Heading>IoT data</Heading>
        </CardHeader>
        <CardBody>
          <Text>soil moisture is: 0</Text>
          <Text>Current temperature is: 0</Text>
          <Text>Current river flow is: 0</Text>
        </CardBody>
      </Card>
      <List className="grid items-center justify-center">{data?.columns.map((column) => (
        <ListItem key={column} className="bg-purple-400 p-2 m-2">{column}</ListItem>
      ))}</List>
      <Button colorScheme="green" className="m-4">
        <LockIcon mr={2} />
        Irrigate
      </Button>
    </div>
  );
};

export default Irrigation;
