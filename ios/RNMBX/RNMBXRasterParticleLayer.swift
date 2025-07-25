@_spi(Experimental) import MapboxMaps

@objc(RNMBXRasterParticleLayer)
public class RNMBXRasterParticleLayer: RNMBXLayer {
  typealias LayerType = RasterParticleLayer

  override func makeLayer(style: Style) throws -> Layer {
	  let sourceLayer = self.id.split(separator: "-", maxSplits: 1).map(String.init)[0]
	  var layer = LayerType(id: self.id, source: sourceID!)
		  .sourceLayer(sourceLayer)
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
