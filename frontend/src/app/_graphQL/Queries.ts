import { gql } from '@apollo/client';

export const GET_LIGHTING_ASSET = gql`
  query GetLightingAsset($id: ID!) {
    lightingAsset(id: $id) {
      _id
      uid
      currentStatus
      predictiveStatus
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
        workOrderStatus
        description
        comment
        location {
          floor
          section
          area
        }
        dateOfMaintenance
      }
    }
  }
`;

export const GET_LIGHTING_ASSETS = gql`
  query GetLightingAssets($input: SortAndPaginate, $filter: LightingAssetFilter) {
    lightingAssets(input: $input, filter: $filter) {
      _id
      uid
      currentStatus
      predictiveStatus
      type
      location {
        floor
        section
        area
      }
      workOrders {
        _id
      }
    }
  }
`;

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
      assetId
      illuminance {
        maintainedAverage
        uniformityRatio
      }
      glare {
        UGR
      }
      colorRendering {
        CRI
      }
      colorTemperature {
        CCT
        Duv
      }
      flicker {
        SVM
      }
      colorPreference {
        PVF
      }
      photobiologicalSafety {
        UV
      }
    }
  }
`;

export const GET_AVERAGE_LIGHTING_ASSET_DATA = gql`
  query GetAverageLightingAssetData($assetId: ID!, $startTime: String!, $endTime: String!) {
    getAverageLightingAssetData(assetId: $assetId, startTime: $startTime, endTime: $endTime) {
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
`;

export const GET_WORK_ORDER = gql`
  query GetWorkOrder($id: ID!) {
    workOrder(id: $id) {
      _id
      workOrderID
      lightingAssetID
      workOrderStatus
      description
      comment
      location {
        floor
        section
        area
      }
      dateOfMaintenance
    }
  }
`;

export const GET_WORK_ORDERS = gql`
  query GetWorkOrders {
    workOrders {
      _id
      workOrderID
      lightingAssetID
      workOrderStatus
      description
      comment
      location {
        floor
        section
        area
      }
      dateOfMaintenance
    }
  }
`;
