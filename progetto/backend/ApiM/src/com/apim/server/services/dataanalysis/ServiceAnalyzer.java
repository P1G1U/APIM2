package com.apim.server.services.dataanalysis;

import com.apim.server.utilities.ObjectSizeFetcher;
import jolie.runtime.Value;

/**
 * Created by alberto on 12/04/17.
 */

public class ServiceAnalyzer {
    public static long getTime() {
        return System.nanoTime();
    }

    public static double timeDiff(long start, long end) {
        return (end-start)/1e6;
    }

    public static long getValueSize(Value v) {
        return ObjectSizeFetcher.getObjectSize(v);
    }
}
