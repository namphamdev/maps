# Branch Comparison: feat/old-main vs ft/raster-particle

## Summary

This document outlines the changes made in the `ft/raster-particle` branch compared to `feat/old-main`. The branch contains significant updates to support raster particle layers and raster array sources in the React Native Mapbox library.

---

## Key Features Added

### 1. RasterParticleLayer Component

**New Feature**: Added support for animated particle effects on raster data (e.g., wind, ocean currents visualization)

**Files Added/Modified:**

- `src/components/RasterParticleLayer.tsx` - New React component
- `src/specs/RNMBXRasterParticleLayerNativeComponent.ts` - Native component spec
- `android/src/main/java/com/rnmapbox/rnmbx/components/styles/layers/RNMBXRasterParticleLayer.kt`
- `android/src/main/java/com/rnmapbox/rnmbx/components/styles/layers/RNMBXRasterParticleLayerManager.kt`
- `ios/RNMBX/RNMBXRasterParticleLayer.swift`
- `ios/RNMBX/RNMBXRasterParticleLayerComponentView.h`
- `ios/RNMBX/RNMBXRasterParticleLayerComponentView.mm`
- `ios/RNMBX/RNMBXRasterParticleLayerViewManager.m`
- `ios/RNMBX/RNMBXRasterParticleLayerViewManager.swift`

**Properties Added:**

- `rasterParticleArrayBand` - Select band from raster array
- `rasterParticleCount` - Number of particles
- `rasterParticleColor` - Particle color
- `rasterParticleMaxSpeed` - Maximum particle speed
- `rasterParticleSpeedFactor` - Speed multiplier (with transition)
- `rasterParticleFadeOpacityFactor` - Fade opacity (with transition)
- `rasterParticleResetRateFactor` - Reset rate factor

### 2. RasterArraySource Component

**New Feature**: Added support for multi-band raster data sources

**Files Added/Modified:**

- `src/components/RasterArraySource.tsx` - New React component
- `src/specs/RNMBXRasterArraySourceNativeComponent.ts` - Native component spec
- `android/src/main/java/com/rnmapbox/rnmbx/components/styles/sources/RNMBXRasterArraySource.kt`
- `android/src/main/java/com/rnmapbox/rnmbx/components/styles/sources/RNMBXRasterArraySourceManager.kt`
- `ios/RNMBX/RNMBXRasterArraySource.swift`
- `ios/RNMBX/RNMBXRasterArraySourceComponentView.h`
- `ios/RNMBX/RNMBXRasterArraySourceComponentView.mm`
- `ios/RNMBX/RNMBXRasterArraySourceViewManager.m`
- `ios/RNMBX/RNMBXRasterArraySourceViewManager.swift`

### 3. LineLayer Enhancements

**Enhancement**: Added Z-offset support for line layers

**Property Added:**

- `lineZOffset` - Vertical offset for line positioning (useful for layering)

### 4. SymbolLayer Enhancements

**Enhancement**: Multiple new properties for symbol elevation and positioning

**Properties Added:**

- `symbolZOffset` - Vertical offset for symbols (with transition)
- `symbolZOffsetTransition` - Transition configuration for z-offset
- `symbolElevationReference` - Reference point for elevation (ground/sea)
- `symbolZElevate` - Boolean to enable symbol elevation

### 5. FillExtrusionLayer Enhancements

**Enhancement**: Expanded 3D building styling capabilities

**Properties Added/Modified:**

- `fillExtrusionEdgeRadius` - Rounded edges for extrusions
- `fillExtrusionAmbientOcclusionIntensity` - AO intensity (replaces old property)
- `fillExtrusionAmbientOcclusionRadius` - General AO radius (replaces old property)
- `fillExtrusionEmissiveStrength` - Light emission strength (with transition)
- `fillExtrusionLineWidth` - Outline width (with transition)
- Property reordering for better organization

### 6. RasterLayer Enhancements

**Enhancement**: Color manipulation and elevation support for raster layers

**Properties Added:**

- `rasterColor` - Color transformation expression
- `rasterColorMix` - Color mixing values (with transition)
- `rasterColorRange` - Color range mapping (with transition)
- `rasterEmissiveStrength` - Emissive lighting (with transition)
- `rasterArrayBand` - Select band from raster array source
- `rasterElevation` - Elevation value (with transition)

### 7. MapView Enhancements

**Enhancement**: Added free camera options for iOS

**Files Modified:**

- `ios/RNMBX/RNMBXMapViewManager.swift` - Added camera control methods
- `ios/RNMBX/RNMBXMapViewModule.mm` - Module updates
- `src/components/MapView.tsx` - TypeScript interface updates

---

## Architecture Changes

### Android

1. **Package Registration** (`RNMBXPackage.kt`):
   - Registered `RNMBXRasterParticleLayerManager`
   - Registered `RNMBXRasterArraySourceManager`

2. **Style Factory** (`RNMBXStyleFactory.kt`):
   - Added 638+ lines of new style property handlers
   - Implemented `setRasterParticleLayerStyle()` method
   - Added handlers for all new layer properties
   - Updated property ordering for consistency

3. **MapView** (`RNMBXMapView.kt`):
   - Added `RasterParticleLayer` to layer type matching

### iOS

1. **Component Views**:
   - Created new Objective-C++ component views for new features
   - Added Swift bridge files for native integration

2. **Style Management** (`RNMBXStyle.swift`):
   - Added 526+ lines of property handling code
   - Implemented property setters for all new features

### TypeScript/React

1. **Component Exports** (`src/Mapbox.ts`, `src/components/Style.tsx`):
   - Exported new `RasterParticleLayer` component
   - Exported new `RasterArraySource` component

2. **Type Definitions** (`src/utils/MapboxStyles.d.ts`):
   - Added 258+ lines of new type definitions
   - Updated style map with new properties

3. **Animated Support** (`src/utils/animated/Animated.ts`):
   - Added new properties to animated property support

---

## Build & Configuration Updates

### Script Updates

- `scripts/autogenHelpers/generateCodeWithEjs.mjs` - Updated code generation
- `scripts/autogenHelpers/globals.mjs` - Added new globals
- `scripts/templates/RNMBXStyleFactoryv10.kt.ejs` - Template updates

### Style Specification

- `style-spec/v8.json` - Updated Mapbox style spec (3615 line changes, reformatted)

---

## Bug Fixes

1. **Android Build** (commit: 957bc8e3)
   - Fixed Android compilation issues

2. **iOS Component** (commit: 3f4203cc, f2ce0ac5, 735c3ee1)
   - Fixed iOS component rendering
   - Removed unused/non-working properties
   - Cleaned up property definitions

3. **Cross-Platform Compatibility** (commit: 31d22e36)
   - Fixed raster array and raster particle to work on both iOS and Android

4. **Architecture Issues** (commit: ad147a0d)
   - Fixed new architecture compatibility issues

5. **ShapeSource** (commits in iOS files)
   - Minor fixes to shape source handling

---

## Merge History

The branch includes several merges:

- Merged from `rnmapbox:main` (commit: ecd68efc)
- Merged from `upstream/main` (commit: f38e0964)
- Merged from `main` into `ft/raster-particle` (commit: 2a0c7873)

---

## Files Changed Summary

**Total: 47 files changed**

- **Additions**: 4,037 lines
- **Deletions**: 2,259 lines
- **Net Change**: +1,778 lines

### Major File Categories:

- **Android Native**: 11 files (layers, sources, package, style factory)
- **iOS Native**: 17 files (Swift/Objective-C++ implementations)
- **TypeScript/React**: 8 files (components, specs, types)
- **Build Scripts**: 3 files
- **Style Spec**: 1 file (major reformatting)

---

## Implementation Guide for Main Branch

To apply these changes to the main branch:

1. **Core Components** (Priority: High)
   - Implement `RasterParticleLayer` component
   - Implement `RasterArraySource` component
   - Both require native Android and iOS implementations

2. **Layer Enhancements** (Priority: Medium)
   - Add `lineZOffset` to LineLayer
   - Add symbol elevation properties (symbolZOffset, symbolZElevate, symbolElevationReference)
   - Add fill extrusion enhancements (edge radius, emissive strength, line width)
   - Add raster color and elevation properties

3. **MapView Features** (Priority: Medium)
   - Add free camera options for iOS

4. **Testing Requirements**
   - Test RasterParticleLayer with wind/current data
   - Test RasterArraySource with multi-band rasters
   - Verify new properties on existing layers
   - Test on both iOS and Android
   - Verify new architecture compatibility

5. **Dependencies**
   - Ensure Mapbox SDK version supports these features
   - Update style spec to v8.json from this branch

---

## Notes

- The style spec file has been significantly reformatted (may cause merge conflicts)
- Some properties replace deprecated ones (e.g., ambient occlusion properties in FillExtrusionLayer)
- All new properties follow Mapbox GL JS v3 style specification
- New components are fully integrated with React Native's new architecture (Fabric)

---

## Commit Timeline

1. `15d9a555` - ft: RasterParticleLayer for android
2. `169d5089` - ft: RasterParticleLayer component
3. `514db937` - ft: RasterArraySource component
4. `2556fcf8` - ft: RasterArraySource for android
5. `faca9abe` - ft: update map style
6. `f2d86636` - fix: add rasterParticleCount to StyleFactory
7. `31d22e36` - fix: raster array, raster particle to work on ios and android
8. `7fb04f10` - ft: lineZOffset for LineLayer
9. `fe5f889b` - ft: update few property
10. `735c3ee1` - fix: remove not working property
11. `f2ce0ac5` - fix: remove unused property
12. `3f4203cc` - fix: ios component
13. `62b579d3` - ft: freeCameraOption on ios
14. `957bc8e3` - fix: android build
15. `ad147a0d` - fix: new arche issue (latest)
