import { gql } from '@apollo/client';

export const ADD_LIGHTING_ASSET = gql`
  mutation AddLightingAsset($input: AddLightingAssetInput!) {
    addLightingAsset(input: $input) {
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
    }
  }
`;

export const UPDATE_LIGHTING_ASSET = gql`
  mutation UpdateLightingAsset($id: ID!, $newStatus: CurrentStatus!) {
    updateLightingAsset(id: $id, newStatus: $newStatus) {
      _id
      uid
      currentStatus
      predictiveStatus
      location {
        floor
        section
        area
      }
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

export const UPDATE_WORK_ORDER = gql`
  mutation UpdateWorkOrder($id: ID!, $input: UpdateWorkOrderInput!) {
    updateWorkOrder(id: $id, input: $input) {
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

export const ADD_LIGHTING_ASSET_MEASUREMENTS = gql`
  mutation AddLightingAssetMeasurements($inputs: [LightingAssetMeasurementInput!]!) {
    addLightingAssetMeasurements(inputs: $inputs) {
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
