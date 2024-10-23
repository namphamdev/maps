import Foundation
import MapboxMaps

@objc(RNMBXRasterArraySourceViewManager)
class RNMBXRasterArraySourceViewManager : RCTViewManager {
  @objc
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  override func view() -> UIView! {
    return RNMBXRasterArraySource()
  }
}
