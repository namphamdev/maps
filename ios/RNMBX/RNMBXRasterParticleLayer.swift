@_spi(Experimental) import MapboxMaps

@objc(RNMBXRasterParticleLayer)
public class RNMBXRasterParticleLayer: RNMBXLayer {
  typealias LayerType = RasterParticleLayer
	private let particlesSpeedGradient = Exp(.interpolate) {
		Exp(.linear)
		Exp(.rasterParticleSpeed)
		1.5
		Exp(.rgb) { 134.0; 163.0; 171.0 }

		2.5
		Exp(.rgb) { 134.0; 163.0; 171.0 }

		4.63
		Exp(.rgb) { 110.0; 143.0; 208.0 }

		6.17
		Exp(.rgb) { 15.0; 147.0; 167.0 }

		7.72
		Exp(.rgb) { 15.0; 147.0; 167.0 }

		9.26
		Exp(.rgb) { 57.0; 163.0; 57.0 }

		10.29
		Exp(.rgb) { 57.0; 163.0; 57.0 }

		11.83
		Exp(.rgb) { 194.0; 134.0; 62.0 }

		13.37
		Exp(.rgb) { 194.0; 134.0; 63.0 }

		14.92
		Exp(.rgb) { 200.0; 66.0; 13.0 }

		16.46
		Exp(.rgb) { 200.0; 66.0; 13.0 }

		18.00
		Exp(.rgb) { 210.0; 0.0; 50.0 }

		20.06
		Exp(.rgb) { 215.0; 0.0; 50.0 }

		21.60
		Exp(.rgb) { 175.0; 80.0; 136.0 }

		23.66
		Exp(.rgb) { 175.0; 80.0; 136.0 }

		25.21
		Exp(.rgb) { 117.0; 74.0; 147.0 }

		27.78
		Exp(.rgb) { 117.0; 74.0; 147.0 }

		29.32
		Exp(.rgb) { 68.0; 105.0; 141.0 }

		31.89
		Exp(.rgb) { 68.0; 105.0; 141.0 }

		33.44
		Exp(.rgb) { 194.0; 251.0; 119.0 }

		42.18
		Exp(.rgb) { 194.0; 251.0; 119.0 }

		43.72
		Exp(.rgb) { 241.0; 255.0; 109.0 }

		48.87
		Exp(.rgb) { 241.0; 255.0; 109.0 }

		50.41
		Exp(.rgb) { 255.0; 255.0; 255.0 }

		57.61
		Exp(.rgb) { 255.0; 255.0; 255.0 }

		59.16
		Exp(.rgb) { 255.0; 255.0; 255.0 }

		68.93
		Exp(.rgb) { 255.0; 255.0; 255.0 }

		69.44
		Exp(.rgb) { 255.0; 37.0; 255.0 }
	}
	
  override func makeLayer(style: Style) throws -> Layer {
	  let sourceLayer = self.id.split(separator: "-", maxSplits: 1).map(String.init)[0]
	  var layer = LayerType(id: self.id, source: sourceID!)
		  .sourceLayer(sourceLayer)
//		  .rasterParticleSpeedFactor(0.4)
//		  .rasterParticleMaxSpeed(70)
//		  .rasterParticleCount(2048)
//		  .rasterParticleFadeOpacityFactor(0.8)
//		  .rasterParticleResetRateFactor(0.4)
		  .rasterParticleColor(particlesSpeedGradient)
    layer.source = sourceID
	  
    return layer
  }

// @{codepart-replace-start(LayerPropsCommon.codepart-swift.ejs,{layerType:"RasterParticle"})}
  func setCommonOptions(_ layer: inout RasterParticleLayer) -> Bool {
    var changed = false

    if let sourceLayerID = sourceLayerID {
      layer.sourceLayer = sourceLayerID
      changed = true
    }

    if let sourceID = sourceID {
      if !(existingLayer && sourceID == DEFAULT_SOURCE_ID) && hasSource() {
        layer.source = sourceID
        changed = true
      }
    }

    return changed
  }

  override func setOptions(_ layer: inout Layer) {
	  super.setOptions(&layer)
    if var actualLayer = layer as? LayerType {
      if self.setCommonOptions(&actualLayer) {
        layer = actualLayer
      }
    } else {
      Logger.log(level: .error, message: "Expected layer type to be Raster but was \(type(of: layer))")
    }
  }

  override func apply(style : Style) throws {
    try style.updateLayer(withId: id, type: LayerType.self) { (layer : inout RasterParticleLayer) in
      if self.styleLayer != nil {
        self.setOptions(&self.styleLayer!)
      }
      if let styleLayer = self.styleLayer as? LayerType {
        layer = styleLayer
      }
    }
  }
// @{codepart-replace-end}
 
  override func addStyles() {
    if let style : Style = self.style,
       let reactStyle = reactStyle {
      let styler =  RNMBXStyle(style: self.style!)
      styler.bridge = self.bridge
      
      if var styleLayer = self.styleLayer as? LayerType {
        styler.rasterParticleLayer(
          layer: &styleLayer,
          reactStyle: reactStyle,
          oldReactStyle: oldReatStyle,
          applyUpdater:{ (updater) in logged("RNMBXRasterParticleLayer.updateLayer") {
            try style.updateLayer(withId: self.id, type: LayerType.self) { (layer: inout LayerType) in updater(&layer) }
          }},
          isValid: { return self.isAddedToMap() }
        )
        self.styleLayer = styleLayer
      } else {
        fatalError("[xxx] layer is not raster layer?!!! \(optional: self.styleLayer)")
      }
    }
  }
   
  func isAddedToMap() -> Bool {
    return true
  }

  override func layerType() -> Layer.Type {
    return LayerType.self
  }
}
