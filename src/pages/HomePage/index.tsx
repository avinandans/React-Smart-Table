import { useMockData } from "../../hooks";
import { Badge, Container, ScrollArea, Table, Title } from "@mantine/core";

export function HomePage() {
  const data = useMockData();
  return (
    <Container size="xl">
      <Title order={1} mb="lg">
        React Smart Table
      </Title>

      <ScrollArea h={600}>
        <Table striped highlightOnHover withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>ID</Table.Th>
              <Table.Th>Name</Table.Th>
              <Table.Th>Email</Table.Th>
              <Table.Th>Department</Table.Th>
              <Table.Th>Salary</Table.Th>
              <Table.Th>Quantity</Table.Th>
              <Table.Th>Status</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {data.map((employee) => {
              return (
                <Table.Tr key={employee.id}>
                  <Table.Td>{employee.id}</Table.Td>
                  <Table.Td>{employee.name}</Table.Td>
                  <Table.Td>{employee.email}</Table.Td>
                  <Table.Td>{employee.department}</Table.Td>
                  <Table.Td>₹ {employee.salary}</Table.Td>
                  <Table.Td>{employee.quantity}</Table.Td>
                  <Table.Td>
                    <Badge color={employee.status === "Active" ? "green" : "red"}>
                      {employee.status}
                    </Badge>
                  </Table.Td>
                </Table.Tr>
              );
            })}
          </Table.Tbody>
        </Table>
      </ScrollArea>
    </Container>
  );
}
