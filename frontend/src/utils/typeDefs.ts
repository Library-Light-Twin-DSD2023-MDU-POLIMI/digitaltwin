export type LightingAssetTimeSeriesData = {
  timestamp: string // The date and time of the data record
  assetId: string // Reference to the associated lighting asset
  illuminance: {
    maintainedAverage: number // The average maintained illuminance level, important for assessing long-term performance and efficiency.
    uniformityRatio: number // The ratio of minimum to average or maximum illuminance, crucial for evaluating lighting consistency and comfort.
  }
  glare: {
    UGR: number // Unified Glare Rating, a key index for assessing visual comfort in lit environments.
  }
  colorRendering: {
    CRI: number // Color Rendering Index, vital for evaluating how accurately a light source renders colors compared to a natural light source.
  }
  colorTemperature: {
    CCT: number // Correlated Color Temperature, indicates the hue and warmth or coolness of a light source.
    Duv: number // A measure of the deviation of a white light source from the black-body line, important for color fidelity and consistency.
  }
  flicker: {
    SVM: number // Stroboscopic Visibility Measure, crucial for assessing the visibility of stroboscopic effects from light flickering.
  }
  colorPreference: {
    PVF: number // Personal Visual Factor, used to understand personal preferences in color and lighting aesthetics.
  }
  photobiologicalSafety: {
    UV: number // Ultraviolet radiation measure, important for assessing potential health risks related to UV exposure from lighting sources.
  }
}
