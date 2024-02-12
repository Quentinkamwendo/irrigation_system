import { LockIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Irrigation = () => {
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
      <Button colorScheme="green" className="m-4">
        <LockIcon mr={2} />
        Irrigate
      </Button>
    </div>
  );
};

export default Irrigation;
