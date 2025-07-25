package com.rnmapbox.rnmbx.components.styles.layers

import android.content.Context
import com.mapbox.maps.Style
import com.mapbox.maps.extension.style.layers.generated.RasterParticleLayer
import com.rnmapbox.rnmbx.components.styles.RNMBXStyle
import com.rnmapbox.rnmbx.components.styles.RNMBXStyleFactory
import com.rnmapbox.rnmbx.utils.Logger
import com.mapbox.maps.extension.style.expressions.dsl.generated.interpolate

class RNMBXRasterParticleLayer(context: Context?) : RNMBXLayer<RasterParticleLayer?>(
    context!!
) {
    override fun makeLayer(): RasterParticleLayer {
		var source = iD!!.split("-")[0]
        return RasterParticleLayer(iD!!, mSourceID!!)
			.sourceLayer(source)
    }

    override fun addStyles() {
        mLayer?.also {
            RNMBXStyleFactory.setRasterParticleLayerStyle(it, RNMBXStyle(context, mReactStyle, mMap!!))
        } ?: run {
            Logger.e("RNMBXRasterParticleLayer", "mLayer is null")
        }
    }

    fun setSourceLayerID(asString: String?) {
        // no-op
    }
}
