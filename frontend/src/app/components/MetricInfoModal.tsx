import React, { Ref } from 'react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Chip,
} from '@nextui-org/react'
import {
  camelToTitleCase,
  customFormatter,
  formatSubscripts,
} from '@/utils/textFormat'
import { ColorOK } from './LatestValueBox'

type MetricInfoModalProps = {
  isOpen: boolean
  onClose: () => void
  action?: () => void
  category: string
  metricKey: string
  latestValue: number
  unit: string
  currentHealthStatus: number
  dotColor: ColorOK
  scale: {
    tooHigh?: string
    perfect?: string
    good?: string
    mid?: string
    tooLow?: string
  }
  information: string
  tooltipSummary: string
  inSummaryBar: boolean
}

export default function MetricInfoModal(props: MetricInfoModalProps) {
  const scrollToChart = () => {
    const chart = document.getElementById(props.metricKey + 'LineChart')

    if (chart) {
      const targetScrollPosition =
        window.scrollY +
        chart.getBoundingClientRect().top -
        0.05 * window.innerHeight

      props.onClose()
      window.scrollTo({
        top: targetScrollPosition,
        behavior: 'smooth',
      })
    } else {
      console.error(
        `Element with ID ${props.metricKey + 'LineChart'} not found.`
      )
    }
  }

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} placement="top-center">
      <ModalContent>
        {onClose => (
          <>
            <ModalHeader>
              {props.category == 'illuminance' ||
              props.category == 'colorTemperature'
                ? customFormatter(props.metricKey)
                : ''}{' '}
              {camelToTitleCase(props.category)}
            </ModalHeader>
            <ModalBody>
              <Chip
                className={
                  props.inSummaryBar
                    ? 'text-sm font-bold content-center'
                    : 'w-full font-bold content-center'
                }
                color={props.dotColor}
                variant="flat"
              >
                <i>Health status:</i> {props.currentHealthStatus}
              </Chip>
              <Chip
                className={
                  props.inSummaryBar
                    ? 'text-sm font-bold content-center'
                    : 'w-full font-bold content-center'
                }
              >
                <i>Current value:</i> {props.latestValue}{' '}
                {formatSubscripts(props.unit)}
              </Chip>
              <>
                <div className="font-bold text-md pt-[2vh]">
                  {' '}
                  Health state values - overview
                </div>
                <div className="justify-center grid grid-cols-2 gap-1 bg-primary p-[1vh]">
                  {Object.entries(props.scale).map(([key, value]) => (
                    <>
                      <p>{camelToTitleCase(key)}</p>
                      <p>{value}</p>
                    </>
                  ))}
                </div>
              </>
              <p className="pt-[2vh]">{props.information}</p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onPress={onClose}>
                Close
              </Button>
              {props.inSummaryBar ? (
                <Button color="secondary" onPress={scrollToChart}>
                  Go to graph
                </Button>
              ) : null}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
