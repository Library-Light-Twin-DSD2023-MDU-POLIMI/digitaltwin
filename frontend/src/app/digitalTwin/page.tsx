'use client'

import React from "react";
import { 
    Card, 
    CardHeader, 
    CardBody, 
    Button, 
    Tooltip, 
} from "@nextui-org/react";
import { 
    ClockIcon, 
    CalendarDaysIcon, 
    CalendarIcon,
} from '@heroicons/react/24/outline';
import { Chip } from "@nextui-org/react";
import sampleData from '../../utils/sampleData.json';

import LineChart from "../components/LineChart";
import LightingAssetHeader from "../components/LightingAssetHeader";
import LatestValuesBar from "../components/LatestValuesBar";
import StatusSummary from "../components/StatusSummary";




export default function DigitalTwin() {
    return (
        <div className="px-10 flex flex-col gap-2 bg-[#c3ebfa] rounded-lg w-7/9 h-full">
            <LightingAssetHeader/>

            <LatestValuesBar/>
            

            <div id= "container_grpahs" className="py-2 h-auto" >
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
                        <div className="w-5/6 px-2 flex flex-col gap-[1vh]">
                            <Card className="bg-cyan-900">
                                <CardBody>
                                    <LineChart data={sampleData} categoryKey="illuminance" metricKey="maintainedAverage"></LineChart>
                                </CardBody>
                            </Card>
                            <Card className="bg-cyan-900">
                                <CardBody>
                                    <LineChart data={sampleData} categoryKey="illuminance" metricKey="uniformityRatio"></LineChart>
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
                            <Card className="bg-cyan-900">
                                <CardBody>
                                    <LineChart data={sampleData} categoryKey="glare" metricKey="UGR"></LineChart>
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
                            <Card className="bg-cyan-900">
                                <CardBody>
                                    <LineChart data={sampleData} categoryKey="colorRendering" metricKey="CRI"></LineChart>
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
                        <div className="w-5/6 px-2 flex flex-col gap-[1vh]">
                            <Card className="bg-cyan-900">
                                <CardBody>
                                    <LineChart data={sampleData} categoryKey="colorTemperature" metricKey="CCT"></LineChart>
                                </CardBody>
                            </Card>
                            <Card className="bg-cyan-900">
                                <CardBody>
                                    <LineChart data={sampleData} categoryKey="colorTemperature" metricKey="Duv"></LineChart>
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
                            <Card className="bg-cyan-900">
                                <CardBody>
                                    <LineChart data={sampleData} categoryKey="flicker" metricKey="SVM"></LineChart>
                                </CardBody>
                            </Card>
                        </div>
                    </div>

                    <div id="left_card_clr_preference" className="flex px-2 py-2 gap-2 grid-cols-2">
                        <div className="w-1/6 items-center px-2">
                            <Card className="flex h-32 bg-cyan-950">
                                <CardHeader >
                                    <Chip className="text-lg font-bold content-center" color="success" variant="dot" >
                                        Color Preference
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
                            <Card className="bg-cyan-900">
                                <CardBody>
                                    <LineChart data={sampleData} categoryKey="colorPreference" metricKey="PVF"></LineChart>
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
                                            <Chip color="default" variant="light" size="lg">2,1</Chip>
                                        </div>
                                        <div className="py-1 text-xs">
                                            <p></p>
                                        </div>
                                    </div>
                                </CardBody>
                                
                            </Card>
                        </div>
                        <div className="w-5/6 px-2">
                            <Card className="bg-cyan-900">
                                <CardBody>
                                    <LineChart data={sampleData} categoryKey="photobiologicalSafety" metricKey="UV"></LineChart>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}
