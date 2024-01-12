import { gql } from '@apollo/client'

export const GET_LIGHTING_ASSET = gql`
  query GetLightingAsset($id: ID!) {
    lightingAsset(id: $id) {
      _id
      uid
      currentStatus
      predictiveStatus {
        status
        predictedTime
      }
      type
      location {
        floor
        section
        area
      }
      workOrders {
        _id
        workOrderID
        lightingAssetID
        type
        workOrderStatus
        description
        comment
        location {
          floor
          section
          area
        }
        dateOfMaintenance
        executionStartDate
        executedDate
      }
      cilLevel
    }
  }
`

export const GET_LIGHTING_ASSETS = gql`
  query GetLightingAssets(
    $input: SortAndPaginate
    $filter: LightingAssetFilter
  ) {
    lightingAssets(input: $input, filter: $filter) {
      _id
      uid
      currentStatus
      predictiveStatus {
        status
        predictedTime
      }
      type
      location {
        floor
        section
        area
      }
      cilLevel
    }
  }
`

export const GET_LIGHTING_ASSET_TIME_SERIES_DATA = gql`
  query GetLightingAssetTimeSeriesData(
    $assetId: ID!
    $startTime: String!
    $endTime: String!
    $thresholds: TimeSeriesDataThresholds
  ) {
    getLightingAssetTimeSeriesData(
      assetId: $assetId
      startTime: $startTime
      endTime: $endTime
      thresholds: $thresholds
    ) {
      timestamp
      power {
        WATT {
          value
          healthStatus
        }
      }
      illuminance {
        maintainedAverage {
          value
          healthStatus
        }
        uniformityRatio {
          value
          healthStatus
        }
      }
      glare {
        UGR {
          value
          healthStatus
        }
      }
      colorRendering {
        CRI {
          value
          healthStatus
        }
      }
      colorTemperature {
        CCT {
          value
          healthStatus
        }
        Duv {
          value
          healthStatus
        }
      }
      flicker {
        SVM {
          value
          healthStatus
        }
      }
      colorPreference {
        PVF {
          value
          healthStatus
        }
      }
      photobiologicalSafety {
        UV {
          value
          healthStatus
        }
      }
    }
  }
`

export const GET_AVERAGE_LIGHTING_ASSET_DATA = gql`
  query GetAverageLightingAssetData(
    $assetId: ID!
    $startTime: String!
    $endTime: String!
  ) {
    getAverageLightingAssetData(
      assetId: $assetId
      startTime: $startTime
      endTime: $endTime
    ) {
      timestamp
      averageIlluminance
      averageGlare
      averageColorRendering
      averageColorTemperature
      averageFlicker
      averageColorPreference
      averagePhotobiologicalSafety
    }
  }
`

export const GET_METRICS = gql`
  query GetMetrics {
    metrics {
      metric
      unit
      scale {
        tooHigh
        perfect
        good
        mid
        tooLow
      }
      information
      tooltipSummary
    }
  }
`

export const GET_METRIC = gql`
  query GetMetric($metric: String!) {
    metric(metric: $metric) {
      metric
      unit
      scale {
        tooHigh
        perfect
        good
        mid
        tooLow
      }
      information
      tooltipSummary
    }
  }
`

export const GET_WORK_ORDER = gql`
  query GetWorkOrder($id: ID!) {
    workOrder(id: $id) {
      _id
      workOrderID
      lightingAssetID
      workOrderType
      workOrderStatus
      description
      comment
      location {
        floor
        section
        area
      }
      dateOfMaintenance
      executionStartDate
      executedDate
    }
  }
`

export const GET_WORK_ORDERS = gql`
  query GetWorkOrders {
    workOrder {
      _id
      workOrderID
      lightingAssetID
      workOrdertype
      workOrderStatus
      description
      comment
      location {
        floor
        section
        area
      }
      dateOfMaintenance
      executionStartDate
      executedDate
    }
  }
`
