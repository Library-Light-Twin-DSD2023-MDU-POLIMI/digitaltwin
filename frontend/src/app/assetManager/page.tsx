import LineChart from "../components/LineChart";
import sampleData from '../../utils/sampleData.json';

export default function AssetManager() {
    return (
    <div className="bg-blue-50 flex flex-col gap-[3vh] p-10">
      Asset manager
      <div className="bg-white rounded-lg p-10 max-w-800 flex flex-col gap-[4vh]">
        <LineChart data={sampleData} categoryKey="illuminance" metricKey="maintainedAverage"></LineChart>
        <LineChart data={sampleData} categoryKey="illuminance" metricKey="uniformityRatio"></LineChart>
      </div>
      <div className="bg-white rounded-lg p-10 max-w-800">
        <LineChart data={sampleData} categoryKey="glare" metricKey="UGR"></LineChart>
      </div>
      <div className="bg-white rounded-lg p-10 max-w-800">
        <LineChart data={sampleData} categoryKey="colorRendering" metricKey="CRI"></LineChart>
      </div>
      <div className=" bg-white rounded-lg p-10 max-w-800 flex flex-col gap-[4vh]">
        <LineChart data={sampleData} categoryKey="colorTemperature" metricKey="CCT"></LineChart>
        <LineChart data={sampleData} categoryKey="colorTemperature" metricKey="Duv"></LineChart>
      </div>
      <div className="bg-white rounded-lg p-10 max-w-800">
        <LineChart data={sampleData} categoryKey="flicker" metricKey="SVM"></LineChart>
      </div>
      <div className="bg-white rounded-lg p-10 max-w-800">
        <LineChart data={sampleData} categoryKey="colorPreference" metricKey="PVF"></LineChart>
      </div>
      <div className="bg-white rounded-lg p-10 max-w-800">
        <LineChart data={sampleData} categoryKey="photobiologicalSafety" metricKey="UV"></LineChart>
      </div> 
    </div>
    )
}