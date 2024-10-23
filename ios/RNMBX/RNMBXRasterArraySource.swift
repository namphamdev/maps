@_spi(Experimental) import MapboxMaps

@objc
public class RNMBXRasterArraySource : RNMBXSource {
  typealias SourceType = RasterArraySource

  @objc public var url: String? = nil
  @objc public var tileUrlTemplates: [String]? = nil
  @objc public var minZoomLevel: NSNumber?
  @objc public var maxZoomLevel: NSNumber?
  @objc public var tileSize: NSNumber?

  override func makeSource() -> Source
  {
	#if RNMBX_11
	  var result = RasterArraySource(id: self.id).tileCacheBudget(TileCacheBudgetSize.megabytes(100))
	#else
	  var result = RasterArraySource()
	#endif
	
	  
    if let url = url {
      result.url = url
    } else {
	 result.tiles = tileUrlTemplates
	}
    
    if let minZoomLevel = minZoomLevel {
      result.minzoom = minZoomLevel.doubleValue
    }
    
    if let maxZoomLevel = maxZoomLevel {
      result.maxzoom = maxZoomLevel.doubleValue
    }

    return result
  }
}
