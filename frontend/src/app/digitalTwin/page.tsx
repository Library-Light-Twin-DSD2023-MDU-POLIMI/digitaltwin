'use client'

import React from "react";
import { Card, CardHeader, CardBody, Button, ButtonGroup, Tooltip } from "@nextui-org/react";
import { Cog6ToothIcon, AdjustmentsHorizontalIcon, TrashIcon, FlagIcon, ClockIcon, CalendarDaysIcon, CalendarIcon, WrenchScrewdriverIcon, ArrowTopRightOnSquareIcon,QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { Chip } from "@nextui-org/react";

export default function DigitalTwin() {
    return <div>
        <div id="container_name_options" className="py-4 px-2">
            <Card >
                <CardHeader className="flex justify-between items-center bg-cyan-950">
                    <div className="flex flex-col">
                        <p className="text-md text-2xl" id="digital_twin_name">Childrens' Area - Low Table</p>
                        <p id="located_floor">1st Floor</p>
                    </div>
                    <ButtonGroup size="sm">
                        <div className="px-1">
                            <Tooltip content="Scheduled Maintanence">
                                <Button size="sm" className="px-1 bg-cyan-900" isIconOnly><WrenchScrewdriverIcon /></Button>
                            </Tooltip>
                        </div>
                        <div className="px-1">
                            <Tooltip content="Recomended Future Maintenence">
                                <Button size="sm" className="px-1  bg-cyan-900" isIconOnly><FlagIcon /></Button>
                            </Tooltip>
                        </div>
                        <div className="px-1">
                            <Tooltip content="Control Lighting Asset">
                                <Button size="sm" className="px-1  bg-cyan-900" isIconOnly><AdjustmentsHorizontalIcon /></Button>
                            </Tooltip>
                        </div>
                        <div className="px-1">
                            <Tooltip content="Remove Digital Twin">
                                <Button size="sm" className="px-1 bg-cyan-900" isIconOnly><TrashIcon /></Button>
                            </Tooltip>
                        </div>
                        <div className="px-1">
                            <Tooltip content="Settings">
                                <Button size="sm" className="px-1  bg-cyan-900" isIconOnly><Cog6ToothIcon /></Button>
                            </Tooltip>
                        </div>
                    </ButtonGroup>
                </CardHeader>
            </Card>
        </div>

        <div id="container_status_latest_values" className=" flex px-2 py-2 gap-2 w-auto">
            <div>
                <Card className="bg-cyan-950">
                    <CardBody>
                        <div className="py-1">
                            <Chip color="success" className="w-40 " variant="dot" >
                                Current Status
                            </Chip>
                        </div>
                        <div className="py-1 flex gap-2 grid-cols-1">
                            <div>
                                <Chip color="warning" variant="dot" >
                                    Predicted Status in 1 week
                                </Chip>
                            </div>
                            <div>
                                <Tooltip showArrow placement="top" content="Go to predictions">
                                    <Button size="sm" className="p-2 bg-cyan-950" isIconOnly><ArrowTopRightOnSquareIcon /></Button>
                                </Tooltip>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <div>
                <Card className="bg-cyan-950 " >
                    <div className="flex px-2 py-2 gap-2">
                        <div className="m-auto">
                            <p className="text-sm"> Latest Values</p>
                        </div>
                        <div>
                        <Card className="flex bg-cyan-950">
                                <CardHeader className="px-1">
                                    <div>
                                    <Tooltip showArrow placement="bottom"
                                    content={
                                        <div className="px-1 py-2">
                                            <div className="text-small font-bold">What is Illuminance?</div>
                                            <div className="text-tiny">Lorem ipsum dolor sit amet</div>
                                        </div>
                                    }
                                >
                                    <Chip className="text-sm font-bold content-center" color="success" variant="dot" >
                                        Illuminance
                                    </Chip>
                                </Tooltip>
                                    </div>
                                </CardHeader>
                            <CardBody className="items-center flex grid-cols-2 py-1">
                                <div className="flex grid-cols-2">
                                    <div>
                                        <Chip color="default" variant="light" size="sm">24</Chip>
                                    </div>
                                    <div className="py-1 text-xs">
                                        <p>lux</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                        </div>
                        <div>
                        <Card className="flex bg-cyan-950">
                                <CardHeader className="px-1">
                                    <div>
                                        <Chip className="text-sm font-bold content-center" color="warning" variant="dot" >
                                            Glare
                                        </Chip>
                                    </div>
                                </CardHeader>
                            <CardBody className="items-center flex grid-cols-2 py-1">
                                <div className="flex grid-cols-2">
                                    <div>
                                        <Chip color="default" variant="light" size="sm">24</Chip>
                                    </div>
                                    <div className="py-1 text-xs">
                                        <p></p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                        </div>
                        <div>
                        <Card className="flex bg-cyan-950">
                                <CardHeader className="px-1">
                                    <div>
                                        <Chip className="text-sm font-bold content-center" color="danger" variant="dot" >
                                            Color Rendering
                                        </Chip>
                                    </div>
                                </CardHeader>
                            <CardBody className="items-center flex grid-cols-2 py-1">
                                <div className="flex grid-cols-2">
                                    <div>
                                        <Chip color="default" variant="light" size="sm">24</Chip>
                                    </div>
                                    <div className="py-1 text-xs">
                                        <p>CRI</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                        </div>
                        <div>
                        <Card className="flex bg-cyan-950">
                                <CardHeader className="px-1">
                                    <div>
                                        <Chip className="text-sm font-bold content-center" color="success" variant="dot" >
                                            Temperature
                                        </Chip>
                                    </div>
                                </CardHeader>
                            <CardBody className="items-center flex grid-cols-2 py-1">
                                <div className="flex grid-cols-2">
                                    <div>
                                        <Chip color="default" variant="light" size="sm">24</Chip>
                                    </div>
                                    <div className="py-1 text-xs">
                                        <p>K</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                        </div>
                        <div>
                        <Card className="flex bg-cyan-950">
                                <CardHeader className="px-1">
                                    <div>
                                        <Chip className="text-sm font-bold content-center" color="danger" variant="dot" >
                                            Flicker
                                        </Chip>
                                    </div>
                                </CardHeader>
                            <CardBody className="items-center flex grid-cols-2 py-1">
                                <div className="flex grid-cols-2">
                                    <div>
                                        <Chip color="default" variant="light" size="sm">24</Chip>
                                    </div>
                                    <div className="py-1 text-xs">
                                        <p>Hz</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                        </div>
                        {/* <div>
                        <Card className="flex bg-cyan-950">
                                <CardHeader className="px-1">
                                    <div>
                                        <Chip className="text-sm font-bold content-center" color="success" variant="dot" >
                                            Color Prefer
                                        </Chip>
                                    </div>
                                </CardHeader>
                            <CardBody className="items-center flex grid-cols-2 py-1">
                                <div className="flex grid-cols-2">
                                    <div>
                                        <Chip color="default" variant="light" size="sm">24</Chip>
                                    </div>
                                    <div className="py-1 text-xs">
                                        <p></p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                        </div> */}
                        {/* <div>
                        <Card className="flex bg-cyan-950">
                                <CardHeader className="px-1">
                                    <div>
                                        <Chip className="text-sm font-bold content-center" color="success" variant="dot" >
                                            Photo Safety
                                        </Chip>
                                    </div>
                                </CardHeader>
                            <CardBody className="items-center flex grid-cols-2 py-1">
                                <div className="flex grid-cols-2">
                                    <div>
                                        <Chip color="default" variant="light" size="sm">24</Chip>
                                    </div>
                                    <div className="py-1 text-xs">
                                        <p></p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                        </div> */}
                    </div>
                </Card>
            </div>
        </div>

        <div id= "container_grpahs" className="py-2 px-2 h-auto" >
            <Card className=" bg-cyan-950">
                <div id= "btn_duration" className="flex gap-4 justify-end items-center px-4 py-4" >
                    <Button className=" bg-cyan-900" startContent={<ClockIcon />}> 24 hours </Button>
                    <Button className=" bg-cyan-900" startContent={<CalendarDaysIcon />}> 1 week</Button>
                    <Button className=" bg-cyan-900" startContent={<CalendarDaysIcon />}> 1 month</Button>
                    <Button className=" bg-cyan-900" startContent={<CalendarDaysIcon />}> 3 months</Button>
                    <Button className=" bg-cyan-900" startContent={<CalendarIcon />}> 1 year</Button>
                </div>

                <div id="left_card_param_illumination" className="flex px-2 py-2 gap-2 grid-cols-2">
                    <div className="w-1/6 items-center px-2">
                        <Card className="flex h-32 bg-cyan-950">
                            <CardHeader >
                                <Tooltip showArrow placement="right"
                                    content={
                                        <div className="px-1 py-2">
                                            <div className="text-small font-bold">What is Illuminance?</div>
                                            <div className="text-tiny">Lorem ipsum dolor sit amet</div>
                                        </div>
                                    }
                                >
                                    <Chip className="text-lg font-bold content-center" color="success" variant="dot" >
                                        Illuminance
                                    </Chip>
                                </Tooltip>
                            </CardHeader>
                            <CardBody className="items-center flex grid-cols-2">
                                <div className="flex grid-cols-2">
                                    <div>
                                        <Chip color="default" variant="light" size="lg">24</Chip>
                                    </div>
                                    <div className="py-1 text-xs">
                                        <p>lux</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="w-5/6 px-2">
                        <Card className="h-32  bg-cyan-900">
                            <CardBody>
                                <p>Graph goes here</p>
                            </CardBody>
                        </Card>
                    </div>
                </div>

                <div id="left_card_param_glare" className="flex px-2 py-2 gap-2 grid-cols-2">
                    <div className="w-1/6 items-center px-2">
                        <Card className="flex h-32 bg-cyan-950">
                            <CardHeader >
                                <Chip className="text-lg font-bold content-center" color="warning" variant="dot" >
                                    Glare
                                </Chip>
                            </CardHeader>
                            <CardBody className="items-center flex grid-cols-2">
                                <div className="flex grid-cols-2">
                                    <div>
                                        <Chip color="default" variant="light" size="lg">24</Chip>
                                    </div>
                                    <div className="py-1 text-xs">
                                        <p> </p>
                                    </div>
                                </div>
                            </CardBody>
                            
                        </Card>
                    </div>
                    <div className="w-5/6 px-2">
                        <Card className="h-32  bg-cyan-900">
                            <CardBody>
                                <p>Graph goes here</p>
                            </CardBody>
                        </Card>
                    </div>
                </div>

                <div id="left_card_param_clr_rendering" className="flex px-2 py-2 gap-2 grid-cols-2">
                    <div className="w-1/6 items-center px-2">
                        <Card className="flex h-32 bg-cyan-950">
                            <CardHeader >
                                <Chip className="text-lg font-bold content-center" color="success" variant="dot" >
                                    Color Rendering
                                </Chip>
                            </CardHeader>
                            <CardBody className="items-center flex grid-cols-2">
                                <div className="flex grid-cols-2">
                                    <div>
                                        <Chip color="default" variant="light" size="lg">24</Chip>
                                    </div>
                                    <div className="py-1 text-xs">
                                        <p>CRI</p>
                                    </div>
                                </div>
                            </CardBody>
                            
                        </Card>
                    </div>
                    <div className="w-5/6 px-2">
                        <Card className="h-32  bg-cyan-900">
                            <CardBody>
                                <p>Graph goes here</p>
                            </CardBody>
                        </Card>
                    </div>
                </div>

                <div id="left_card_temperature" className="flex px-2 py-2 gap-2 grid-cols-2">
                    <div className="w-1/6 items-center px-2">
                        <Card className="flex h-32 bg-cyan-950">
                            <CardHeader >
                                <Chip className="text-lg font-bold content-center" color="success" variant="dot" >
                                    Temperature
                                </Chip>
                            </CardHeader>
                            <CardBody className="items-center flex grid-cols-2">
                                <div className="flex grid-cols-2">
                                    <div>
                                        <Chip color="default" variant="light" size="lg">24</Chip>
                                    </div>
                                    <div className="py-1 text-xs">
                                        <p>K</p>
                                    </div>
                                </div>
                            </CardBody>
                            
                        </Card>
                    </div>
                    <div className="w-5/6 px-2">
                        <Card className="h-32  bg-cyan-900">
                            <CardBody>
                                <p>Graph goes here</p>
                            </CardBody>
                        </Card>
                    </div>
                </div>

                <div id="left_card_flicker" className="flex px-2 py-2 gap-2 grid-cols-2">
                    <div className="w-1/6 items-center px-2">
                        <Card className="flex h-32 bg-cyan-950">
                            <CardHeader >
                                <Chip className="text-lg font-bold content-center" color="danger" variant="dot" >
                                    Flicker
                                </Chip>
                            </CardHeader>
                            <CardBody className="items-center flex grid-cols-2">
                                <div className="flex grid-cols-2">
                                    <div>
                                        <Chip color="default" variant="light" size="lg">24</Chip>
                                    </div>
                                    <div className="py-1 text-xs">
                                        <p>Hz</p>
                                    </div>
                                </div>
                            </CardBody>
                            
                        </Card>
                    </div>
                    <div className="w-5/6 px-2">
                        <Card className="h-32  bg-cyan-900">
                            <CardBody>
                                <p>Graph goes here</p>
                            </CardBody>
                        </Card>
                    </div>
                </div>

                <div id="left_card_clr_preference" className="flex px-2 py-2 gap-2 grid-cols-2">
                    <div className="w-1/6 items-center px-2">
                        <Card className="flex h-32 bg-cyan-950">
                            <CardHeader >
                                <Chip className="text-lg font-bold content-center" color="success" variant="dot" >
                                    Color Pref
                                </Chip>
                            </CardHeader>
                            <CardBody className="items-center flex grid-cols-2">
                                <div className="flex grid-cols-2">
                                    <div>
                                        <Chip color="default" variant="light" size="lg">24</Chip>
                                    </div>
                                    <div className="py-1 text-xs">
                                        <p></p>
                                    </div>
                                </div>
                            </CardBody>
                            
                        </Card>
                    </div>
                    <div className="w-5/6 px-2">
                        <Card className="h-32  bg-cyan-900">
                            <CardBody>
                                <p>Graph goes here</p>
                            </CardBody>
                        </Card>
                    </div>
                </div>

                <div id="left_card_phot_safety" className="flex px-2 py-2 gap-2 grid-cols-2">
                    <div className="w-1/6 items-center px-2">
                        <Card className="flex h-32 bg-cyan-950">
                            <CardHeader >
                                <Chip className="text-lg font-bold content-center" color="success" variant="dot" >
                                    Photo Safety
                                </Chip>
                            </CardHeader>
                            <CardBody className="items-center flex grid-cols-2">
                                <div className="flex grid-cols-2">
                                    <div>
                                        <Chip color="default" variant="light" size="lg">24</Chip>
                                    </div>
                                    <div className="py-1 text-xs">
                                        <p></p>
                                    </div>
                                </div>
                            </CardBody>
                            
                        </Card>
                    </div>
                    <div className="w-5/6 px-2">
                        <Card className="h-32  bg-cyan-900">
                            <CardBody>
                                <p>Graph goes here</p>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </Card>
        </div>
    </div>
}

