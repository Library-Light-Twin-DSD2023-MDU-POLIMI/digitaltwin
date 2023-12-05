'use client'

import React from "react";
import { 
    Card, 
    CardBody, 
    Select, 
    SelectItem
} from "@nextui-org/react";

import { 
    InformationCircleIcon
} from '@heroicons/react/24/outline';
import sampleData from '../../utils/sampleData.json';
import metricData from '../../utils/sampleMetricMetaData.json';

import LineChart from "../components/LineChart";
import LightingAssetHeader from "../components/LightingAssetHeader";
import LatestValuesBar from "../components/LatestValuesBar";
import LatestValueBox, { ColorOK } from "../components/LatestValueBox";
import { camelToAbbreviation, camelToTitleCase, customFormatter } from "@/utils/textFormat";

export enum FindCategory{
    maintainedAverage = "illuminance", 
    uniformityRatio = "illuminance", 
    UGR = "glare", 
    CRI = "colorRendering",
    CCT = "colorTemperature", 
    Duv = "colorTemperature",
    SVM = "flicker", 
    PVF = "colorPreference",
    UV = "photobiologicalSafety"
}

export const findCategoryMap: Record<string, string> = {
    maintainedAverage: FindCategory.maintainedAverage,
    uniformityRatio: FindCategory.uniformityRatio,
    UGR: FindCategory.UGR, 
    CRI: FindCategory.CRI,
    CCT: FindCategory.CCT,
    Duv: FindCategory.Duv,
    SVM: FindCategory.SVM,
    PVF: FindCategory.PVF,
    UV: FindCategory.UV, 
};

export const findDotColor: Record<number, ColorOK> = {
    5: ColorOK.tooHigh,
    4: ColorOK.good,
    3: ColorOK.good, 
    2: ColorOK.mid,
    1: ColorOK.tooLow,

};

export function getNestedProperty(obj: any, keys: string[]): any {
    return keys.reduce((acc, key) => acc?.[key], obj);
}


//TODO: make selects trigger queries to the DB


export default function DigitalTwin() {
    return (
        <div className="px-10 flex flex-col gap-4 rounded-lg w-7/9 h-full">
            <LightingAssetHeader/>

            <LatestValuesBar data={sampleData[sampleData.length-1]} metadata={metricData} inSummaryBar={true}/>
            

            <div id= "container_grpahs" className="flex w-full flex-wrap md:flex-nowrap gap-4" >
                <Card className="bg-primary-200">
                    <div id="btn_duration" className="flex gap-4 justify-end items-center px-4 py-4" >
                        <Select label="Select time interval" className="max-w-xs " radius={'full'} key={"primary"} color={"default"} /* defaultSelectedKeys={["threeDays"]} */>
                            <SelectItem key={'twentyfourHours'} value={'24 hours'}> 24 hours </SelectItem>
                            <SelectItem key={'threeDays'} value={'3 days'}> 3 days </SelectItem>
                            <SelectItem key={'oneWeek'} value={'1 week'}> 1 week </SelectItem>
                            <SelectItem key={'oneMonth'} value={'1 month'}> 1 month </SelectItem>
                            <SelectItem key={'threeMonths'} value={'3 months'}> 3 months </SelectItem>
                            <SelectItem key={'oneYear'} value={'1 year'}> 1 year </SelectItem>
                        </Select>
                    </div>

                    {Object.entries(metricData).map(([metricKey, metaData]) => {
                        const category = findCategoryMap[metricKey]
                        const metricData = getNestedProperty(sampleData[sampleData.length-1], [category, metricKey])

                        return(
                            <div className="flex px-2 py-2 gap-2 grid-cols-2">
                                <div className="w-[13vw] items-center pl-2">
                                    <LatestValueBox
                                        metricForID={`${metricKey}`} //will be used for modal ... "Go to [...] and close"
                                        tooltipTitle={`${
                                            (category=="illuminance"|| category=="colorTemperature") ? customFormatter(metricKey) : ''} 
                                            ${category ? camelToTitleCase(category):  category}
                                        `}
                                        tooltipContent={metaData.tooltipSummary + ` Health status: ${metricData?.healthStatus}`}
                                        latestValueTitle={`${
                                            (category=="illuminance"|| category=="colorTemperature") ? camelToAbbreviation(metricKey) : ''} 
                                            ${category ? ( 
                                                (category=="colorTemperature") ? "Color Temp" : camelToTitleCase(category) ) 
                                                : 
                                                category
                                            }
                                        `}
                                        latestValueNumber={metricData?.value}  
                                        latestValueUnit={metaData.unit}
                                        dotColor={findDotColor[metricData?.healthStatus]} // Object.keys(metaData.scale).length
                                        inSummaryBar={false}
                                    />  
                                </div>
                                <div className="w-[70vw] px-2 flex flex-col gap-[1vh]">
                                    <Card className="bg-primary">
                                        <CardBody>
                                            <LineChart data={sampleData} categoryKey={category} metricKey={metricKey}></LineChart>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        )
                    })}
                </Card>
            </div>
        </div>
    )
}