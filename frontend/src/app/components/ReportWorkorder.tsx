import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Tooltip } from "@nextui-org/react";
import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
import { Input, Textarea } from "@nextui-org/react";

export default function ReportWorkorder (){
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Tooltip content="Report Workorder">
                <Button size="sm" className="px-1 bg-primary-500" isIconOnly onPress={onOpen}><WrenchScrewdriverIcon /></Button>
            </Tooltip>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="flex">
                <ModalContent className="flex">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Report Workorder</ModalHeader>
                            <ModalBody>
                                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                                    <Input type="text" label="Asset Id" isReadOnly isDisabled value="id1"/>
                                    <Input type="text" label="Floor" isReadOnly isDisabled value="1"/>
                                </div>
                                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                                    <Input type="text" label="Section" isReadOnly isDisabled value="Section 1"/>
                                    <Input type="text" label="Area" isReadOnly isDisabled value="Childrens"/>
                                </div>
                                <div>
                                    <Textarea
                                        label="Issue Description"
                                        placeholder="What is the issue?"
                                        isRequired={true}
                                        classNames={{
                                            base: "max-w-md",
                                            input: "resize-y min-h-[40px]",
                                        }}
                                    />
                                </div>
                                <div>
                                    <Textarea
                                        label="Comments"
                                        placeholder="Any additional comments"
                                        classNames={{
                                            base: "max-w-md",
                                            input: "resize-y min-h-[40px]",
                                        }}
                                    />
                                </div>
                                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                                    <Input id="date" label="Maintenance Date" type="date" defaultValue="2023-01-01"/>
                                    <Input id="time" label="Maintenance Time" type="time" defaultValue="00:00"/>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onPress={onClose}>
                                    Send Workorder
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}