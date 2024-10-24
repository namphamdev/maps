// DO NOT MODIFY
// THIS FILE IS AUTOGENERATED

import { isAndroid } from './index';

export const StyleTypes = {
  Constant: 'constant',
  Color: 'color',
  Transition: 'transition',
  Translation: 'translation',
  Function: 'function',
  Image: 'image',
  Enum: 'enum',
};

export function getStyleType(styleProp: keyof typeof styleExtras) {
  if (!isAndroid() && styleExtras[styleProp]) {
    return styleExtras[styleProp].iosType;
  }

  if (styleMap[styleProp]) {
    return styleMap[styleProp];
  }

  throw new Error(`${styleProp} is not a valid Mapbox layer style`);
}

const styleMap = {
  fillSortKey: StyleTypes.Constant,
  fillAntialias: StyleTypes.Constant,
  fillOpacity: StyleTypes.Constant,
  fillOpacityTransition: StyleTypes.Transition,
  fillColor: StyleTypes.Color,
  fillColorTransition: StyleTypes.Transition,
  fillOutlineColor: StyleTypes.Color,
  fillOutlineColorTransition: StyleTypes.Transition,
  fillTranslate: StyleTypes.Translation,
  fillTranslateTransition: StyleTypes.Transition,
  fillTranslateAnchor: StyleTypes.Enum,
  fillPattern: StyleTypes.Image,
  fillEmissiveStrength: StyleTypes.Constant,
  fillEmissiveStrengthTransition: StyleTypes.Transition,

  lineCap: StyleTypes.Enum,
  lineJoin: StyleTypes.Enum,
  lineMiterLimit: StyleTypes.Constant,
  lineRoundLimit: StyleTypes.Constant,
  lineSortKey: StyleTypes.Constant,
  lineZOffset: StyleTypes.Constant,
  lineOpacity: StyleTypes.Constant,
  lineOpacityTransition: StyleTypes.Transition,
  lineColor: StyleTypes.Color,
  lineColorTransition: StyleTypes.Transition,
  lineTranslate: StyleTypes.Translation,
  lineTranslateTransition: StyleTypes.Transition,
  lineTranslateAnchor: StyleTypes.Enum,
  lineWidth: StyleTypes.Constant,
  lineWidthTransition: StyleTypes.Transition,
  lineGapWidth: StyleTypes.Constant,
  lineGapWidthTransition: StyleTypes.Transition,
  lineOffset: StyleTypes.Constant,
  lineOffsetTransition: StyleTypes.Transition,
  lineBlur: StyleTypes.Constant,
  lineBlurTransition: StyleTypes.Transition,
  lineDasharray: StyleTypes.Constant,
  linePattern: StyleTypes.Image,
  lineGradient: StyleTypes.Color,
  lineTrimOffset: StyleTypes.Constant,
  lineEmissiveStrength: StyleTypes.Constant,
  lineEmissiveStrengthTransition: StyleTypes.Transition,

  symbolPlacement: StyleTypes.Enum,
  symbolSpacing: StyleTypes.Constant,
  symbolAvoidEdges: StyleTypes.Constant,
  symbolSortKey: StyleTypes.Constant,
  symbolZOrder: StyleTypes.Enum,
  symbolZElevate: StyleTypes.Constant,
  iconAllowOverlap: StyleTypes.Constant,
  iconIgnorePlacement: StyleTypes.Constant,
  iconOptional: StyleTypes.Constant,
  iconRotationAlignment: StyleTypes.Enum,
  iconSize: StyleTypes.Constant,
  iconTextFit: StyleTypes.Enum,
  iconTextFitPadding: StyleTypes.Constant,
  iconImage: StyleTypes.Image,
  iconRotate: StyleTypes.Constant,
  iconPadding: StyleTypes.Constant,
  iconKeepUpright: StyleTypes.Constant,
  iconOffset: StyleTypes.Constant,
  iconAnchor: StyleTypes.Enum,
  iconPitchAlignment: StyleTypes.Enum,
  textPitchAlignment: StyleTypes.Enum,
  textRotationAlignment: StyleTypes.Enum,
  textField: StyleTypes.Constant,
  textFont: StyleTypes.Constant,
  textSize: StyleTypes.Constant,
  textMaxWidth: StyleTypes.Constant,
  textLineHeight: StyleTypes.Constant,
  textLetterSpacing: StyleTypes.Constant,
  textJustify: StyleTypes.Enum,
  textRadialOffset: StyleTypes.Constant,
  textVariableAnchor: StyleTypes.Constant,
  textAnchor: StyleTypes.Enum,
  textMaxAngle: StyleTypes.Constant,
  textWritingMode: StyleTypes.Constant,
  textRotate: StyleTypes.Constant,
  textPadding: StyleTypes.Constant,
  textKeepUpright: StyleTypes.Constant,
  textTransform: StyleTypes.Enum,
  textOffset: StyleTypes.Constant,
  textAllowOverlap: StyleTypes.Constant,
  textIgnorePlacement: StyleTypes.Constant,
  textOptional: StyleTypes.Constant,
  iconOpacity: StyleTypes.Constant,
  iconOpacityTransition: StyleTypes.Transition,
  iconColor: StyleTypes.Color,
  iconColorTransition: StyleTypes.Transition,
  iconHaloColor: StyleTypes.Color,
  iconHaloColorTransition: StyleTypes.Transition,
  iconHaloWidth: StyleTypes.Constant,
  iconHaloWidthTransition: StyleTypes.Transition,
  iconHaloBlur: StyleTypes.Constant,
  iconHaloBlurTransition: StyleTypes.Transition,
  iconTranslate: StyleTypes.Translation,
  iconTranslateTransition: StyleTypes.Transition,
  iconTranslateAnchor: StyleTypes.Enum,
  textOpacity: StyleTypes.Constant,
  textOpacityTransition: StyleTypes.Transition,
  textColor: StyleTypes.Color,
  textColorTransition: StyleTypes.Transition,
  textHaloColor: StyleTypes.Color,
  textHaloColorTransition: StyleTypes.Transition,
  textHaloWidth: StyleTypes.Constant,
  textHaloWidthTransition: StyleTypes.Transition,
  textHaloBlur: StyleTypes.Constant,
  textHaloBlurTransition: StyleTypes.Transition,
  textTranslate: StyleTypes.Translation,
  textTranslateTransition: StyleTypes.Transition,
  textTranslateAnchor: StyleTypes.Enum,
  symbolZOffset: StyleTypes.Constant,
  symbolZOffsetTransition: StyleTypes.Transition,
  symbolElevationReference: StyleTypes.Enum,
  iconEmissiveStrength: StyleTypes.Constant,
  iconEmissiveStrengthTransition: StyleTypes.Transition,
  textEmissiveStrength: StyleTypes.Constant,
  textEmissiveStrengthTransition: StyleTypes.Transition,
  iconImageCrossFade: StyleTypes.Constant,
  iconImageCrossFadeTransition: StyleTypes.Transition,

  circleSortKey: StyleTypes.Constant,
  circleRadius: StyleTypes.Constant,
  circleRadiusTransition: StyleTypes.Transition,
  circleColor: StyleTypes.Color,
  circleColorTransition: StyleTypes.Transition,
  circleBlur: StyleTypes.Constant,
  circleBlurTransition: StyleTypes.Transition,
  circleOpacity: StyleTypes.Constant,
  circleOpacityTransition: StyleTypes.Transition,
  circleTranslate: StyleTypes.Translation,
  circleTranslateTransition: StyleTypes.Transition,
  circleTranslateAnchor: StyleTypes.Enum,
  circlePitchScale: StyleTypes.Enum,
  circlePitchAlignment: StyleTypes.Enum,
  circleStrokeWidth: StyleTypes.Constant,
  circleStrokeWidthTransition: StyleTypes.Transition,
  circleStrokeColor: StyleTypes.Color,
  circleStrokeColorTransition: StyleTypes.Transition,
  circleStrokeOpacity: StyleTypes.Constant,
  circleStrokeOpacityTransition: StyleTypes.Transition,
  circleEmissiveStrength: StyleTypes.Constant,
  circleEmissiveStrengthTransition: StyleTypes.Transition,

  heatmapRadius: StyleTypes.Constant,
  heatmapRadiusTransition: StyleTypes.Transition,
  heatmapWeight: StyleTypes.Constant,
  heatmapIntensity: StyleTypes.Constant,
  heatmapIntensityTransition: StyleTypes.Transition,
  heatmapColor: StyleTypes.Color,
  heatmapOpacity: StyleTypes.Constant,
  heatmapOpacityTransition: StyleTypes.Transition,

  fillExtrusionEdgeRadius: StyleTypes.Constant,
  fillExtrusionOpacity: StyleTypes.Constant,
  fillExtrusionOpacityTransition: StyleTypes.Transition,
  fillExtrusionColor: StyleTypes.Color,
  fillExtrusionColorTransition: StyleTypes.Transition,
  fillExtrusionTranslate: StyleTypes.Translation,
  fillExtrusionTranslateTransition: StyleTypes.Transition,
  fillExtrusionTranslateAnchor: StyleTypes.Enum,
  fillExtrusionPattern: StyleTypes.Image,
  fillExtrusionHeight: StyleTypes.Constant,
  fillExtrusionHeightTransition: StyleTypes.Transition,
  fillExtrusionBase: StyleTypes.Constant,
  fillExtrusionBaseTransition: StyleTypes.Transition,
  fillExtrusionVerticalGradient: StyleTypes.Constant,
  fillExtrusionAmbientOcclusionIntensity: StyleTypes.Constant,
  fillExtrusionAmbientOcclusionIntensityTransition: StyleTypes.Transition,
  fillExtrusionAmbientOcclusionRadius: StyleTypes.Constant,
  fillExtrusionAmbientOcclusionRadiusTransition: StyleTypes.Transition,
  fillExtrusionAmbientOcclusionGroundRadius: StyleTypes.Constant,
  fillExtrusionAmbientOcclusionGroundRadiusTransition: StyleTypes.Transition,
  fillExtrusionAmbientOcclusionGroundAttenuation: StyleTypes.Constant,
  fillExtrusionAmbientOcclusionGroundAttenuationTransition:
    StyleTypes.Transition,
  fillExtrusionFloodLightColor: StyleTypes.Color,
  fillExtrusionFloodLightColorTransition: StyleTypes.Transition,
  fillExtrusionFloodLightIntensity: StyleTypes.Constant,
  fillExtrusionFloodLightIntensityTransition: StyleTypes.Transition,
  fillExtrusionFloodLightWallRadius: StyleTypes.Constant,
  fillExtrusionFloodLightWallRadiusTransition: StyleTypes.Transition,
  fillExtrusionFloodLightGroundRadius: StyleTypes.Constant,
  fillExtrusionFloodLightGroundRadiusTransition: StyleTypes.Transition,
  fillExtrusionFloodLightGroundAttenuation: StyleTypes.Constant,
  fillExtrusionFloodLightGroundAttenuationTransition: StyleTypes.Transition,
  fillExtrusionVerticalScale: StyleTypes.Constant,
  fillExtrusionVerticalScaleTransition: StyleTypes.Transition,
  fillExtrusionRoundedRoof: StyleTypes.Constant,
  fillExtrusionCutoffFadeRange: StyleTypes.Constant,
  fillExtrusionEmissiveStrength: StyleTypes.Constant,
  fillExtrusionEmissiveStrengthTransition: StyleTypes.Transition,
  fillExtrusionLineWidth: StyleTypes.Constant,
  fillExtrusionLineWidthTransition: StyleTypes.Transition,
  fillExtrusionAmbientOcclusionWallRadius: StyleTypes.Constant,
  fillExtrusionAmbientOcclusionWallRadiusTransition: StyleTypes.Transition,

  rasterOpacity: StyleTypes.Constant,
  rasterOpacityTransition: StyleTypes.Transition,
  rasterColor: StyleTypes.Color,
  rasterColorMix: StyleTypes.Constant,
  rasterColorMixTransition: StyleTypes.Transition,
  rasterColorRange: StyleTypes.Constant,
  rasterColorRangeTransition: StyleTypes.Transition,
  rasterHueRotate: StyleTypes.Constant,
  rasterHueRotateTransition: StyleTypes.Transition,
  rasterBrightnessMin: StyleTypes.Constant,
  rasterBrightnessMinTransition: StyleTypes.Transition,
  rasterBrightnessMax: StyleTypes.Constant,
  rasterBrightnessMaxTransition: StyleTypes.Transition,
  rasterSaturation: StyleTypes.Constant,
  rasterSaturationTransition: StyleTypes.Transition,
  rasterContrast: StyleTypes.Constant,
  rasterContrastTransition: StyleTypes.Transition,
  rasterResampling: StyleTypes.Enum,
  rasterFadeDuration: StyleTypes.Constant,
  rasterEmissiveStrength: StyleTypes.Constant,
  rasterEmissiveStrengthTransition: StyleTypes.Transition,
  rasterArrayBand: StyleTypes.Constant,
  rasterElevation: StyleTypes.Constant,
  rasterElevationTransition: StyleTypes.Transition,

  rasterParticleArrayBand: StyleTypes.Constant,
  rasterParticleCount: StyleTypes.Constant,
  rasterParticleColor: StyleTypes.Color,
  rasterParticleMaxSpeed: StyleTypes.Constant,
  rasterParticleSpeedFactor: StyleTypes.Constant,
  rasterParticleSpeedFactorTransition: StyleTypes.Transition,
  rasterParticleFadeOpacityFactor: StyleTypes.Constant,
  rasterParticleFadeOpacityFactorTransition: StyleTypes.Transition,
  rasterParticleResetRateFactor: StyleTypes.Constant,
  rasterParticleElevation: StyleTypes.Constant,
  rasterParticleElevationTransition: StyleTypes.Transition,

  hillshadeIlluminationDirection: StyleTypes.Constant,
  hillshadeIlluminationAnchor: StyleTypes.Enum,
  hillshadeExaggeration: StyleTypes.Constant,
  hillshadeExaggerationTransition: StyleTypes.Transition,
  hillshadeShadowColor: StyleTypes.Color,
  hillshadeShadowColorTransition: StyleTypes.Transition,
  hillshadeHighlightColor: StyleTypes.Color,
  hillshadeHighlightColorTransition: StyleTypes.Transition,
  hillshadeAccentColor: StyleTypes.Color,
  hillshadeAccentColorTransition: StyleTypes.Transition,

  modelOpacity: StyleTypes.Constant,
  modelOpacityTransition: StyleTypes.Transition,
  modelRotation: StyleTypes.Constant,
  modelRotationTransition: StyleTypes.Transition,
  modelScale: StyleTypes.Constant,
  modelScaleTransition: StyleTypes.Transition,
  modelTranslation: StyleTypes.Constant,
  modelTranslationTransition: StyleTypes.Transition,
  modelColor: StyleTypes.Color,
  modelColorTransition: StyleTypes.Transition,
  modelColorMixIntensity: StyleTypes.Constant,
  modelColorMixIntensityTransition: StyleTypes.Transition,
  modelType: StyleTypes.Enum,
  modelCastShadows: StyleTypes.Constant,
  modelReceiveShadows: StyleTypes.Constant,
  modelAmbientOcclusionIntensity: StyleTypes.Constant,
  modelAmbientOcclusionIntensityTransition: StyleTypes.Transition,
  modelEmissiveStrength: StyleTypes.Constant,
  modelEmissiveStrengthTransition: StyleTypes.Transition,
  modelRoughness: StyleTypes.Constant,
  modelRoughnessTransition: StyleTypes.Transition,
  modelHeightBasedEmissiveStrengthMultiplier: StyleTypes.Constant,
  modelHeightBasedEmissiveStrengthMultiplierTransition: StyleTypes.Transition,
  modelCutoffFadeRange: StyleTypes.Constant,
  modelId: StyleTypes.Constant,

  backgroundColor: StyleTypes.Color,
  backgroundColorTransition: StyleTypes.Transition,
  backgroundPattern: StyleTypes.Image,
  backgroundOpacity: StyleTypes.Constant,
  backgroundOpacityTransition: StyleTypes.Transition,
  backgroundEmissiveStrength: StyleTypes.Constant,
  backgroundEmissiveStrengthTransition: StyleTypes.Transition,
  backgroundPitchAlignment: StyleTypes.Enum,

  skyType: StyleTypes.Enum,
  skyAtmosphereSun: StyleTypes.Constant,
  skyAtmosphereSunIntensity: StyleTypes.Constant,
  skyGradientCenter: StyleTypes.Constant,
  skyGradientRadius: StyleTypes.Constant,
  skyGradient: StyleTypes.Color,
  skyAtmosphereHaloColor: StyleTypes.Color,
  skyAtmosphereColor: StyleTypes.Color,
  skyOpacity: StyleTypes.Constant,
  skyOpacityTransition: StyleTypes.Transition,

  anchor: StyleTypes.Enum,
  position: StyleTypes.Constant,
  positionTransition: StyleTypes.Transition,
  intensity: StyleTypes.Constant,
  intensityTransition: StyleTypes.Transition,

  range: StyleTypes.Constant,
  rangeTransition: StyleTypes.Transition,
  highColor: StyleTypes.Color,
  highColorTransition: StyleTypes.Transition,
  spaceColor: StyleTypes.Color,
  spaceColorTransition: StyleTypes.Transition,
  horizonBlend: StyleTypes.Constant,
  horizonBlendTransition: StyleTypes.Transition,
  starIntensity: StyleTypes.Constant,
  starIntensityTransition: StyleTypes.Transition,
  verticalRange: StyleTypes.Constant,
  verticalRangeTransition: StyleTypes.Transition,

  exaggeration: StyleTypes.Constant,

  color: StyleTypes.Color,
  colorTransition: StyleTypes.Transition,
  visibility: StyleTypes.Constant,
};

export const styleExtras = {
  // padding
  iconTextFitPadding: {
    iosType: 'edgeinsets',
  },

  // offsets
  iconOffset: {
    iosType: 'vector',
  },
  textOffset: {
    iosType: 'vector',
  },
  lineOffset: {
    iosType: 'vector',
  },

  // translates
  fillTranslate: {
    iosType: 'vector',
  },
  lineTranslate: {
    iosType: 'vector',
  },
  iconTranslate: {
    iosType: 'vector',
  },
  textTranslate: {
    iosType: 'vector',
  },
  circleTranslate: {
    iosType: 'vector',
  },
  fillExtrusionTranslate: {
    iosType: 'vector',
  },
};
