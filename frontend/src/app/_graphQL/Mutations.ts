import { gql } from '@apollo/client';

export const ADD_LIGHTING_ASSET_MUTATION = gql`
  mutation AddLightingAsset($input: AddLightingAssetInput!) {
    addLightingAsset(input: $input) {
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

export const UPDATE_LIGHTING_ASSET_MUTATION = gql`
  mutation UpdateLightingAsset($input: UpdateLightingAssetInput!) {
    updateLightingAsset(input: $input) {
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

export const ADD_LIGHTING_ASSET_MEASUREMENT_MUTATION = gql`
  mutation AddLightingAssetMeasurement($input: LightingAssetMeasurementInput!) {
    addLightingAssetMeasurement(input: $input) {
      assetId
      timestamp
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

export const ADD_WORK_ORDER_MUTATION = gql`
  mutation AddWorkOrder($input: AddWorkOrderInput!) {
    addWorkOrder(input: $input) {
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

export const UPDATE_WORK_ORDER_MUTATION = gql`
  mutation UpdateWorkOrder($input: UpdateWorkOrderInput!) {
    updateWorkOrder(input: $input) {
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
