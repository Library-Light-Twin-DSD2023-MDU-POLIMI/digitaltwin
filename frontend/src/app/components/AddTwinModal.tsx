import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  Textarea,
} from '@nextui-org/react'
import React, { useState } from 'react'

interface AddTwinModalProps {
  onOpen: () => void
  isOpen: boolean
  onClose: () => void
  onAddTwin: (
    uid: string,
    currentStatus: string,
    predictiveStatus: { status: string; predictedTime: Date },
    type: string,
    cilLevel: number,
    location: { floor: number; section: string; area: string }
  ) => void
}

export default function AddTwinModal(props: AddTwinModalProps) {
  //Adding the digital twin after clicking the save button in the modal.
  const onAddTwin = () => {
    props.onAddTwin(
      uid,
      currentStatus,
      predictiveStatus,
      type,
      cilLevel,
      location
    )
    console.log('UID:', uid)
    console.log('Current Status:', currentStatus)
    console.log('Predictive Status:', predictiveStatus)
    console.log('Type:', type)
    console.log('Cil Level:', cilLevel)
    console.log('Location:', location)
    console.log('Dette er onAddTwin')
    props.onClose()
  }

  //UseStates for the parameters in a lightning asset.
  const [uid, setUid] = useState('')
  const [currentStatus, setCurrentStatus] = useState('')
  const [predictiveStatus, setPredictiveStatus] = useState({
    status: '',
    predictedTime: new Date(),
  })
  const [type, setType] = useState('')
  const [cilLevel, setCilLevel] = useState(1)
  const [location, setLocation] = useState({
    floor: 0,
    section: '',
    area: '',
  })

  return (
    <>
      <Modal id="AddTwinModal" isOpen={props.isOpen} onClose={props.onClose}>
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add new digital twin
              </ModalHeader>
              <ModalBody>
                <div
                  className="flex w-full flex-wrap gap-4"
                  style={{ marginTop: '50px' }}
                >
                  {/* UID */}
                  <Textarea
                    testid-cy="review-textarea"
                    placeholder="Enter asset ID"
                    value={uid.toString()}
                    onChange={change => {
                      setUid(change.target.value)
                    }}
                  />

                  {/* CurrentStatus */}
                  <Select
                    isRequired
                    labelPlacement="outside"
                    label="Current Status"
                    placeholder="Select current status"
                    className="max-w-xs"
                    value={currentStatus.toString()}
                    onChange={change => {
                      setCurrentStatus(change.target.value.toString())
                    }}
                  >
                    <SelectItem key="GOOD">GOOD</SelectItem>
                    <SelectItem key="WARNING">WARNING</SelectItem>
                    <SelectItem key="BROKE">BROKE</SelectItem>
                  </Select>

                  {/* PredictiveStatus */}
                  <Select
                    isRequired
                    labelPlacement="outside"
                    label="Predictive Status"
                    placeholder="Select predictive status"
                    className="max-w-xs"
                    value={predictiveStatus.status.toString()}
                    onChange={change => {
                      setPredictiveStatus({
                        ...predictiveStatus,
                        status: change.target.value.toString(),
                      })
                    }}
                  >
                    <SelectItem key="OKAY">OKAY</SelectItem>
                    <SelectItem key="WARNING">WARNING</SelectItem>
                  </Select>

                  {/* date picker */}

                  {/* Type */}
                  <Select
                    isRequired
                    labelPlacement="outside"
                    label="Type"
                    placeholder="Lightning type"
                    className="max-w-xs"
                    value={type.toString()}
                    onChange={change => {
                      setType(change.target.value.toString())
                    }}
                  >
                    <SelectItem key="LED">LED</SelectItem>
                    <SelectItem key="Other">Other</SelectItem>
                  </Select>

                  {/* location.area */}
                  <Select
                    isRequired
                    labelPlacement="outside"
                    label="Area"
                    placeholder="Select an Area"
                    className="max-w-xs"
                    value={location.area.toString()}
                    onChange={change => {
                      setLocation({
                        ...location,
                        area: change.target.value.toString(),
                      })
                    }}
                  >
                    <SelectItem key="Basement">Basement</SelectItem>
                    <SelectItem key="Main">Main</SelectItem>
                    <SelectItem key="Childrens">Childrens</SelectItem>
                  </Select>

                  {/* location.section */}
                  <Select
                    isRequired
                    labelPlacement="outside"
                    label="Section"
                    placeholder="Select a section"
                    className="max-w-xs"
                    value={location.section}
                    onChange={change => {
                      setLocation({
                        ...location,
                        section: change.target.value.toString(),
                      })
                    }}
                  >
                    <SelectItem key="Section1">Section 1</SelectItem>
                    <SelectItem key="Section2">Section 2</SelectItem>
                    <SelectItem key="Section3">Section 3</SelectItem>
                  </Select>

                  {/* location.floor */}
                  <Select
                    isRequired
                    labelPlacement="outside"
                    label="Floor"
                    placeholder="Select a floor"
                    className="max-w-xs"
                    value={location.floor.toString()}
                    onChange={change => {
                      const parsedValue = parseInt(change.target.value, 10)
                      if (!isNaN(parsedValue)) {
                        setLocation({ ...location, floor: parsedValue })
                      } else {
                        // Set to a default value or handle the error
                        setLocation({ ...location, floor: 0 }) // Example: default to 0
                      }
                    }}
                  >
                    <SelectItem key="0">0</SelectItem>
                    <SelectItem key="1">1</SelectItem>
                    <SelectItem key="2">2</SelectItem>
                    <SelectItem key="3">3</SelectItem>
                  </Select>
                </div>

                {/* cilLevel */}
                <Select
                  isRequired
                  labelPlacement="outside"
                  label="Cil Level"
                  placeholder="Select a cilLevel"
                  className="max-w-xs"
                  value={cilLevel.toString()}
                  onChange={change => {
                    const parsedValue = parseInt(change.target.value, 10)
                    if (!isNaN(parsedValue)) {
                      setCilLevel(parsedValue)
                    } else {
                      setCilLevel(1)
                    }
                  }}
                >
                  <SelectItem key="cilLevel1">1</SelectItem>
                  <SelectItem key="cilLevel2">2</SelectItem>
                </Select>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onClick={() => {
                    props.onClose()
                    setUid('')
                  }}
                >
                  Close
                </Button>
                <Button
                  color="primary"
                  onClick={() => {
                    onAddTwin()
                  }}
                >
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
