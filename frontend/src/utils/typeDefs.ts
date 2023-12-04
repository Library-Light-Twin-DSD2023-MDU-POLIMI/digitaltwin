export type LightingAssetTimeSeriesData =
{
	"timestamp": string, // The date and time of the data record
  "assetId": string, // Reference to the associated lighting asset
  "illuminance": {
    "maintainedAverage": {
      "value": number // The average maintained illuminance level, important for assessing long-term performance and efficiency.
      "healthStatus": number //1-5
    }, 
    "uniformityRatio": {
      "value": number // The ratio of minimum to average or maximum illuminance, crucial for evaluating lighting consistency and comfort.
      "healthStatus": number // 1-5
    },  
  },
  "glare": {
    "UGR": {
      "value": number // Unified Glare Rating, a key index for assessing visual comfort in lit environments.
      "healthStatus": number //1-5
    },  
  },
  "colorRendering": {
    "CRI": {
      "value": number // Color Rendering Index, vital for evaluating how accurately a light source renders colors compared to a natural light source.
      "healthStatus": number //1-5
    },  
  },
  "colorTemperature": {
    "CCT": {
      "value": number // Correlated Color Temperature, indicates the hue and warmth or coolness of a light source.
      "healthStatus": number //1-5
    },  
    "Duv": {
      "value": number // A measure of the deviation of a white light source from the black-body line, important for color fidelity and consistency.
      "healthStatus": number //1-5
    },  
  },
  "flicker": {
    "SVM": {
      "value": number // Stroboscopic Visibility Measure, crucial for assessing the visibility of stroboscopic effects from light flickering.
      "healthStatus": number //1-5
    },  
  },
  "colorPreference": {
    "PVF": {
      "value": number // Personal Visual Factor, used to understand personal preferences in color and lighting aesthetics.
      "healthStatus": number //1-5
    },  
  },
  "photobiologicalSafety": {
    "UV": {
      "value": number // Ultraviolet radiation measure, important for assessing potential health risks related to UV exposure from lighting sources.
      "healthStatus": number //1-5
    }, 
  }
}



export type MetricMetaData =
{
  "maintainedAverage": {
    "unit": string,
    "scale": {
      "tooHigh": string, //5
      "perfect": string, //4
      "good": string, //3
      "mid": string, //2
      "tooLow": string //1
    },
    "information": string,
    "tooltipSummary": string
  },
  "uniformityRatio": {
    "unit": string,
    "scale": {
      "tooHigh": string, //5
      "perfect": string, //4
      "good": string, //3
      "mid": string, //2
      "tooLow": string //1
    },
    "information": string,
    "tooltipSummary": string
  },
/*   "energy": {
    "unit": string,
    "information": string,
    "tooltipSummary": string
  }, */
  "UGR": {
    "unit": string,
    "scale": {
      "good": string, //4
      "mid": string, //3
      "tooLow2": string, //2
      "tooLow": string //1
    },
    "information": string,
    "tooltipSummary": string
  },
  "CRI": {
    "unit": string,
    "scale": {
      "good": string, //3
      "mid": string, //2
      "tooLow": string //1
    },
    "information": string,
    "tooltipSummary": string
  },
  "CCT": { 
    "unit": string,
    "scale": {
      "perfect": string, 
      "mid": string, 
      "tooLow": string
    },
    "information": string,
    "tooltipSummary": string
  },
  "Duv": {
    "unit": string,
    "scale": {
      "perfect": string, 
      "mid": string, 
      "tooLow": string
    },
    "information": string,
    "tooltipSummary": string
  },
  "SVM": {
    "unit": string,
    "scale": {
      "perfect": string, 
      "good": string, 
      "mid": string, 
      "tooLow": string
    },
    "information": string,
    "tooltipSummary": string
  },
  "PVF": {
    "unit": string,
    "scale": { //did not have any table in Thresholds.docx. Selecting this scale as default
      "tooHigh": string, //5
      "perfect": string, //4
      "good": string, //3
      "mid": string, //2
      "tooLow": string //1
    },
    "information": string,
    "tooltipSummary": string
  },
  "UV": {
    "unit": string,
    "scale": {
      "good": string, 
      "mid": string, 
      "tooLow": string
    },
    "information": string,
    "tooltipSummary": string
  }
}


/* "energy": {
  "unit": "Watt",
  "information": "long - to go in Modal",
  "tooltipSummary": "short (1-2 sentences)"
}, */