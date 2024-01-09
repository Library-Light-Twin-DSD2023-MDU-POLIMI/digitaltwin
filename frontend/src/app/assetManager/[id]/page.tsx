import DigitalTwin from '../../digitalTwin/page'

interface Asset {
    uid: string
    currentStatus: string
    predictiveStatus: {
      status: string
      predictedTime: number
    }
    location: {
      floor: number
      section: string
      area: string
    }
    cilLevel: number
  }

  

export default function AssetManager() {
  return (
    <div className="flex flex-col gap-[3vh] p-3 w-full">
      <DigitalTwin></DigitalTwin>
    </div>
  )
}
