import { gql } from '@apollo/client';

export const ADD_LIGHTING_ASSET = gql`
  mutation AddLightingAsset($input: AddLightingAssetInput!) {
    addLightingAsset(input: $input) {
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
`;

export const UPDATE_LIGHTING_ASSET = gql`
  mutation UpdateLightingAsset($id: ID!, $input: UpdateLightingAssetInput!) {
    updateLightingAsset(id: $id, input: $input) {
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
`;

export const REMOVE_LIGHTING_ASSET = gql`
  mutation RemoveLightingAsset($id: ID!) {
    removeLightingAsset(id: $id)
  }
`;

export const ADD_WORK_ORDER = gql`
  mutation AddWorkOrder($input: AddWorkOrderInput!) {
    addWorkOrder(input: $input) {
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
  }
`;

export const UPDATE_WORK_ORDER = gql`
  mutation UpdateWorkOrder($id: ID!, $input: UpdateWorkOrderInput!) {
    updateWorkOrder(id: $id, input: $input) {
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
  }
`;

export const REMOVE_WORK_ORDER = gql`
  mutation RemoveWorkOrder($id: ID!) {
    removeWorkOrder(id: $id)
  }
`;

export const ADD_METRIC = gql`
  mutation AddMetric($input: MetricMetaDataInput!) {
    addMetric(input: $input) {
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
`;

export const UPDATE_METRIC = gql`
  mutation UpdateMetric($id: ID!, $input: MetricMetaDataInput!) {
    updateMetric(id: $id, input: $input) {
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
`;

export const REMOVE_METRIC = gql`
  mutation RemoveMetric($id: ID!) {
    removeMetric(id: $id) {
      metric
    }
  }
`;
