import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Tooltip } from "@nextui-org/react";
import { LinkIcon } from '@heroicons/react/24/outline'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip } from "@nextui-org/react";

export default function LinkedWorkorders() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Tooltip content="View Linked Workorders">
        <Button size="sm" className="px-1 bg-primary-500" isIconOnly onPress={onOpen}><LinkIcon /></Button>
      </Tooltip>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Linked workorders</ModalHeader>
              <ModalBody>
                <Table aria-label="Example static collection table">
                  <TableHeader>
                    <TableColumn>WORKORDER ID</TableColumn>
                    <TableColumn>STATUS</TableColumn>
                    <TableColumn>DATE OF MAINTENENCE</TableColumn>
                  </TableHeader>
                  <TableBody>
                    <TableRow key="1">
                      <TableCell>WO 0001</TableCell>
                      <TableCell>
                        <Chip variant="dot" color="default" className="border-none"> Scheduled</Chip>
                      </TableCell>
                      <TableCell>20/12/2023 10:30</TableCell>
                    </TableRow>
                    <TableRow key="2">
                      <TableCell>WO 0001</TableCell>
                      <TableCell>
                        <Chip variant="dot" color="danger" className="border-none"> Not Compleated</Chip>
                      </TableCell>
                      <TableCell>01/12/2023 15:00</TableCell>
                    </TableRow>
                    <TableRow key="3">
                      <TableCell>WO 0001</TableCell>
                      <TableCell>
                        <Chip variant="dot" color="success" className="border-none"> Compleated</Chip>
                      </TableCell>
                      <TableCell>08/11/2023 09:30</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
