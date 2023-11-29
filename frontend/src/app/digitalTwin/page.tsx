'use client'

import React from "react";
import { 
    Card, 
    CardBody, 
    Button, 
    Select, 
    SelectSection, 
    SelectItem
} from "@nextui-org/react";

import { 
    ClockIcon, 
    CalendarDaysIcon, 
    CalendarIcon,
} from '@heroicons/react/24/outline';
import sampleData from '../../utils/sampleData.json';

import LineChart from "../components/LineChart";
import LightingAssetHeader from "../components/LightingAssetHeader";
import LatestValuesBar from "../components/LatestValuesBar";
import LatestValueBox, { ColorOK } from "../components/LatestValueBox";




export default function DigitalTwin() {
    return (
        <div className="px-10 flex flex-col gap-4 rounded-lg w-7/9 h-full">
            <LightingAssetHeader/>

            <LatestValuesBar/>
            

            <div id= "container_grpahs" className="flex w-full flex-wrap md:flex-nowrap gap-4" >
                <Card className="bg-primary-200">
                    <div id="btn_duration" className="flex gap-4 justify-end items-center px-4 py-4" >
                        <Select label="Select time interval" className="max-w-xs " radius={'full'} key={"primary"} color={"default"} defaultSelectedKeys={["threeDays"]}>
                            <SelectItem key={''} value={''}> 24 hours </SelectItem>
                            <SelectItem key={'threeDays'} value={''}> 3 days </SelectItem>
                            <SelectItem key={''} value={''}> 1 week </SelectItem>
                            <SelectItem key={''} value={''}> 1 month </SelectItem>
                            <SelectItem key={''} value={''}> 3 months </SelectItem>
                            <SelectItem key={''} value={''}> 1 year </SelectItem>
                        </Select>
                    </div>

                    <div id="param_illumination" className="flex px-2 py-2 gap-2 grid-cols-2">
                        <div className="w-[13vw] items-center pl-2">
                            <LatestValueBox 
                                tooltipTitle={"What is Maintained Average Illuminance?"}
                                tooltipContent={'Illuminance level lighting installations aim to provide'}
                                latestValueTitle={"MR Illuminance"}
                                latestValueNumber={50}
                                latestValueUnit={"lux"}
                                dotColor={ColorOK.good} 
                                inSummaryBar={false}                            
                            />  
                        </div>
                        <div className="w-[70vw] px-2 flex flex-col gap-[1vh]">
                            <Card className="bg-primary">
                                <CardBody>
                                    <LineChart data={sampleData} categoryKey="illuminance" metricKey="maintainedAverage"></LineChart>
                                </CardBody>
                            </Card>
                        </div>
                    </div>

                    <div id="param_illumination" className="flex px-2 py-2 gap-2 grid-cols-2">
                        <div className="w-[13vw] items-center pl-2">
                        <LatestValueBox 
                            tooltipTitle={"What is Uniformity Ratio Illuminance?"}
                            tooltipContent={'Ratio of minimum to average or maximum illuminance'}
                            latestValueTitle={"UR Illuminance"}
                            latestValueNumber={5.0}
                            latestValueUnit={"lux"} 
                            dotColor={ColorOK.warning}       
                            inSummaryBar={false}     
                        />  
                        </div>
                        <div className="w-[70vw] px-2 flex flex-col gap-[1vh]">
                            <Card className="bg-primary">
                                <CardBody>
                                    <LineChart data={sampleData} categoryKey="illuminance" metricKey="uniformityRatio"></LineChart>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                    

                    <div id="param_glare" className="flex px-2 py-2 gap-2 grid-cols-2">
                        <div className="w-[13vw] items-center pl-2">
                            <LatestValueBox 
                                tooltipTitle={"What is Glare?"}
                                tooltipContent={'Unified Glare Rating (UGR) - Numerical measure of glare in a particular environment'}
                                latestValueTitle={"Glare"}
                                latestValueNumber={4.0}
                                dotColor={ColorOK.warning} 
                                inSummaryBar={false}           
                            />
                        </div>
                        <div className="w-[70vw] px-2">
                            <Card className="bg-primary">
                                <CardBody>
                                    <LineChart data={sampleData} categoryKey="glare" metricKey="UGR"></LineChart>
                                </CardBody>
                            </Card>
                        </div>
                    </div>

                    <div id="param_clr_rendering" className="flex px-2 py-2 gap-2 grid-cols-2">
                        <div className="w-[13vw] items-center px-2">
                            <LatestValueBox 
                                tooltipTitle={"What is Color Rendering?"}
                                tooltipContent={"Measure of light source's ability to reveal colors accurately"}
                                latestValueTitle={"Color Rendering"}
                                latestValueNumber={180}
                                latestValueUnit={"CRI"} 
                                dotColor={ColorOK.good}
                                inSummaryBar={false}            
                            />
                        </div>
                        <div className="w-[70vw] px-2">
                            <Card className="bg-primary">
                                <CardBody>
                                    <LineChart data={sampleData} categoryKey="colorRendering" metricKey="CRI"></LineChart>
                                </CardBody>
                            </Card>
                        </div>
                    </div>

                    <div id="cct_c_temperature" className="flex px-2 py-2 gap-2 grid-cols-2">
                        <div className="w-[13vw] items-center pl-2">
                            <LatestValueBox 
                                tooltipTitle={"What is CCT Color Temperature?"}
                                tooltipContent={"Color appearance of light emitted by a lamp"}
                                latestValueTitle={"CCT Color Temp"}
                                latestValueNumber={5500}
                                latestValueUnit={"K"} 
                                dotColor={ColorOK.warning}
                                inSummaryBar={false}            
                            />
                        </div>
                        <div className="w-[70vw] px-2 flex flex-col gap-[1vh]">
                            <Card className="bg-primary">
                                <CardBody>
                                    <LineChart data={sampleData} categoryKey="colorTemperature" metricKey="CCT"></LineChart>
                                </CardBody>
                            </Card>
                        </div>
                    </div>

                    <div id="duv_c_temperature" className="flex px-2 py-2 gap-2 grid-cols-2">
                        <div className="w-[13vw] items-center pl-2">
                            <LatestValueBox 
                                tooltipTitle={"What is Duv Color Temperature?"}
                                tooltipContent={"Deviation from the black-body line in color space"}
                                latestValueTitle={"Duv Color Temp"}
                                latestValueNumber={0}
                                latestValueUnit={"K"} 
                                dotColor={ColorOK.warning}
                                inSummaryBar={false}            
                            />  
                        </div>
                        <div className="w-[70vw] px-2 flex flex-col gap-[1vh]">
                            <Card className="bg-primary">
                                <CardBody>
                                    <LineChart data={sampleData} categoryKey="colorTemperature" metricKey="Duv"></LineChart>
                                </CardBody>
                            </Card>
                        </div>
                    </div>

                    <div id="flicker" className="flex px-2 py-2 gap-2 grid-cols-2">
                        <div className="w-[13vw] items-center px-2">
                            <LatestValueBox 
                                tooltipTitle={"What is Flicker?"}
                                tooltipContent={"Stroboscopic Visibility Measure (SVM) - Measure of visibility of stroboscopic effects"}
                                latestValueTitle={"Flicker"}
                                latestValueNumber={24}
                                latestValueUnit={"Hz"} 
                                dotColor={ColorOK.warning}
                                inSummaryBar={false}            
                            />  
                        </div>
                        <div className="w-[70vw] px-2">
                            <Card className="bg-primary">
                                <CardBody>
                                    <LineChart data={sampleData} categoryKey="flicker" metricKey="SVM"></LineChart>
                                </CardBody>
                            </Card>
                        </div>
                    </div>

                    <div id="clr_preference" className="flex px-2 py-2 gap-2 grid-cols-2">
                        <div className="w-[13vw] items-center px-2">
                            <LatestValueBox 
                                tooltipTitle={"What is Color Preference?"}
                                tooltipContent={"PVF"}
                                latestValueTitle={"Color Preference"}
                                latestValueNumber={78}
                                latestValueUnit={""} 
                                dotColor={ColorOK.tooLow}
                                inSummaryBar={false}            
                            />
                        </div>
                        <div className="w-[70vw] px-2">
                            <Card className="bg-primary">
                                <CardBody>
                                    <LineChart data={sampleData} categoryKey="colorPreference" metricKey="PVF"></LineChart>
                                </CardBody>
                            </Card>
                        </div>
                    </div>

                    <div id="phot_safety" className="flex px-2 py-2 pb-5 gap-2 grid-cols-2">
                        <div className="w-[13vw] items-center px-2">
                            <LatestValueBox 
                                tooltipTitle={"What is Photo Safety?"}
                                tooltipContent={"Ultra Violet radiation"}
                                latestValueTitle={"Photo Safety"}
                                latestValueNumber={1.9}
                                latestValueUnit={""} 
                                dotColor={ColorOK.warning}
                                inSummaryBar={false}            
                            />      
                        </div>
                        <div className="w-[70vw] px-2">
                            <Card className="bg-primary">
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


/* 

Kan lage en grid med to kollonner + en funksjon som populerer én rad av gangen. Slik kan jeg få fixed width på kolonnene!!
Kolonne 1 rad x har LatestValueBox, kolonne2 rad x har tilhørende graf.

*/
